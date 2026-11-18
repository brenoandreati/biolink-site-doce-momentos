// Mostra a logo enviada pelo cliente (link que vai na mensagem do WhatsApp).
export async function onRequestGet({ params, env }) {
  const chave = String(params.id || '');
  if (!/^[a-f0-9]{16}\.(png|jpg|webp)$/.test(chave)) return new Response('Logo não encontrada.', { status: 404 });

  const { value, metadata } = await env.LOGOS.getWithMetadata(chave, { type: 'arrayBuffer' });
  if (!value) return new Response('Logo não encontrada ou expirada.', { status: 404 });

  return new Response(value, {
    headers: {
      'content-type': metadata?.tipo || 'application/octet-stream',
      'cache-control': 'public, max-age=86400',
      'x-content-type-options': 'nosniff',
      'content-security-policy': "default-src 'none'",
    },
  });
}
