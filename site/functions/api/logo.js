// Recebe a logo enviada pelo cliente e devolve um link público para ela.
// O link vai junto na mensagem do WhatsApp.
const TIPOS = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp' };
const MAX_BYTES = 5 * 1024 * 1024;
const UM_ANO = 60 * 60 * 24 * 365;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

export async function onRequestPost({ request, env }) {
  const tipo = (request.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
  if (!TIPOS[tipo]) return json({ erro: 'Formato não aceito. Envie PNG, JPG ou WEBP.' }, 415);

  const tamanho = Number(request.headers.get('content-length') || 0);
  if (tamanho > MAX_BYTES) return json({ erro: 'Imagem muito grande (máx. 5 MB).' }, 413);

  const dados = await request.arrayBuffer();
  if (!dados.byteLength) return json({ erro: 'Arquivo vazio.' }, 400);
  if (dados.byteLength > MAX_BYTES) return json({ erro: 'Imagem muito grande (máx. 5 MB).' }, 413);

  const id = crypto.randomUUID().replace(/-/g, '').slice(0, 16);
  const chave = `${id}.${TIPOS[tipo]}`;
  await env.LOGOS.put(chave, dados, { metadata: { tipo }, expirationTtl: UM_ANO });

  return json({ url: new URL(`/logo/${chave}`, request.url).href });
}
