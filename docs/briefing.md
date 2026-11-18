# Briefing: Biolink Doces Momentos Convites

Documento de referência para construir o biolink no Claude Code. Tudo aqui foi extraído do Instagram @docesmomentosconvites (analisado em 17/11/2026).

---

## 1. Dados do perfil

| Campo | Valor |
|---|---|
| Nome da marca | Doces Momentos Convites |
| Instagram | @docesmomentosconvites (https://www.instagram.com/docesmomentosconvites/) |
| Nome exibido | Papelaria de Casamento \| Patricia Paião |
| Responsável | Patricia Paião |
| Categoria | Empreendedor(a) |
| Números | 1.692 posts, 6.840 seguidores |
| Tempo de mercado | 14 anos |
| Atendimento | Envia para todo o Brasil |
| WhatsApp | (12) 99253-0847 |
| Threads | @docesmomentosconvites |

### Bio atual (texto original)
```
Papelaria personalizada para casamentos
Há 14 anos criando convites exclusivos,
📦 Enviamos para todo o Brasil
👇 Solicite seu orçamento
12 99253-0847
```

### Destaques dos stories (mostram os serviços e o portfólio)
Feedback, Clientes, Branco/Offwhite, Eventos 2026, Bastidores, Verde, 15 Anos, Papelaria do Dia, Produção, Nude, Manual Padrinhos, Rose, Azul Marinho, Azul Serenity.

Leitura: o portfólio é organizado por **cor** (branco/offwhite, verde, nude, rose, azul marinho, azul serenity) e por **tipo de peça** (convite de casamento, 15 anos, papelaria do dia, manual dos padrinhos).

---

## 2. Identidade visual

### Logo
- Selo circular, fundo **azul acinzentado (slate blue)**.
- Texto em **serifada clássica, caixa alta, espaçada**, contornando o círculo: "DOCES MOMENTOS" em cima, "CONVITES" embaixo.
- No centro: ícone de **envelope em traço fino** com uma **flor (lótus/tulipa)** saindo da aba.
- Dois pontinhos laterais separando os textos.
- Traços e textos em branco/offwhite.
- Pedir à cliente o arquivo original (PNG transparente ou SVG). Se não tiver, dá pra recriar em SVG seguindo a descrição acima.

### Estética do feed
- Fotos claras, luz natural, close em mãos segurando o convite.
- Papéis texturizados, envelopes de bico, **lacres de cera dourados**, fitas de cetim, barbante, raminhos secos.
- Monogramas (ex: "VR", "E|A") em relevo seco ou hot stamping dourado.
- Ilustrações em aquarela de igrejas e paisagens.
- Sensação: **elegante, delicado, artesanal, atemporal, romântico sem exagero**.

### Paleta sugerida (tirada do logo e do feed)

| Uso | Cor | Hex |
|---|---|---|
| Fundo principal | Offwhite papel | `#F6F2EC` |
| Fundo alternativo / cards | Branco quente | `#FCFAF7` |
| Cor da marca (logo, botões) | Azul acinzentado | `#55697F` |
| Texto principal | Azul marinho profundo | `#1F2E45` |
| Texto secundário | Cinza quente | `#7A7670` |
| Destaque (detalhes, ícones, linhas) | Dourado lacre | `#B8955A` |
| Apoio (opcional) | Verde sálvia | `#8A9682` |
| Bordas sutis | Bege linho | `#E6DED2` |

### Tipografia (Google Fonts)
- **Títulos:** Cormorant Garamond (400/500, com versalete ou caixa alta espaçada, letter-spacing 0.15em a 0.25em). Conversa com a serifa do logo.
- **Textos e botões:** Jost ou Montserrat (300/400), pequenos e arejados.
- **Detalhe opcional:** uma script fina (ex: Pinyon Script ou Great Vibes) só numa palavra, tipo "Momentos", imitando os nomes de noivos nos convites. Usar com moderação.

---

## 3. Estrutura do biolink

Minimalista: só 2 links principais, como combinado.

```
[ Logo circular ]

DOCES MOMENTOS
Papelaria de casamento

Há 14 anos criando convites exclusivos.
Enviamos para todo o Brasil.

[ Solicitar orçamento no WhatsApp ]   ← botão principal (cheio, azul da marca)
[ Conheça nosso site ]                ← botão secundário (contorno)

  ◦ Instagram   ◦ Threads              ← ícones pequenos (opcional)

Patricia Paião · Doces Momentos Convites
```

### Links

| Botão | URL |
|---|---|
| WhatsApp | `https://wa.me/5512992530847?text=Ol%C3%A1%2C%20Patricia!%20Vim%20pelo%20Instagram%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20convites.` |
| Site | `https://SEU-SITE-AQUI` (preencher quando o site estiver no ar) |
| Instagram | `https://www.instagram.com/docesmomentosconvites/` |
| Threads | `https://www.threads.net/@docesmomentosconvites` |

Mensagem pré-preenchida do WhatsApp (decodificada):
> Olá, Patricia! Vim pelo Instagram e gostaria de solicitar um orçamento de convites.

### Textos prontos (opções)

**Título:** Doces Momentos
**Subtítulo:** Papelaria de casamento

**Frase de apoio (escolher uma):**
- Há 14 anos criando convites exclusivos. Enviamos para todo o Brasil.
- Convites feitos à mão para o dia mais especial da sua história.
- Cada detalhe pensado para contar a história de vocês.

**Botão 1:** Solicitar orçamento
**Botão 2:** Conheça nosso trabalho

**Rodapé:** Patricia Paião · Envio para todo o Brasil

---

## 4. Direção de design

- Mobile first (quase todo acesso vem do Instagram). Largura máxima do conteúdo ~420px, centralizado.
- Muito respiro: espaçamentos generosos, nada de poluição visual.
- Fundo offwhite com **textura de papel bem sutil** (noise leve via CSS ou SVG), lembrando o papel dos convites.
- Uma **linha fina dourada** ou um pequeno ornamento separando cabeçalho e botões.
- Botões com cantos levemente arredondados (8px a 12px) ou totalmente pill. Altura confortável (~54px).
- Botão do WhatsApp: fundo `#55697F`, texto offwhite, ícone do WhatsApp em traço fino.
- Botão do site: fundo transparente, borda 1px `#55697F`, texto `#55697F`.
- Hover/toque: leve elevação e escurecimento suave. Transições de 200ms a 300ms.
- Animação de entrada discreta: fade + sobe 8px, em sequência (logo, texto, botões). Respeitar `prefers-reduced-motion`.
- Detalhe que dá cara de marca: um pequeno **lacre de cera dourado em SVG** perto do logo ou no rodapé.
- Opcional: uma faixa com 3 fotos do portfólio (convites com lacre) entre o texto e os botões. Só se ficar leve; o foco é conversão.
- Ícones: Lucide ou SVG inline, traço fino (1.5px).
- Acessibilidade: contraste AA, botões com `aria-label`, links abrindo em nova aba com `rel="noopener"`.

### SEO / compartilhamento
- `<title>`: Doces Momentos Convites | Papelaria de Casamento
- `meta description`: Convites de casamento personalizados há 14 anos. Envio para todo o Brasil. Solicite seu orçamento.
- Open Graph com o logo ou uma foto de convite.
- Favicon com o selo do logo.

---

## 5. Prompt pronto para o Claude Code

```
Crie um biolink em um único arquivo index.html (HTML + CSS + JS inline, sem frameworks)
para a marca "Doces Momentos Convites", papelaria de casamento da Patricia Paião.

Siga o briefing do arquivo biolink-doces-momentos.md: paleta, tipografia
(Cormorant Garamond + Jost via Google Fonts), estrutura, textos e links.

Requisitos:
- Mobile first, conteúdo centralizado com largura máxima de 420px.
- Fundo offwhite #F6F2EC com textura de papel sutil.
- Logo circular no topo (usar ./logo.png; se não existir, recriar o selo em SVG:
  círculo #55697F, "DOCES MOMENTOS" e "CONVITES" em serifada caixa alta contornando,
  envelope em traço fino com uma flor no centro).
- Dois botões: WhatsApp (principal, cheio) e Site (secundário, contorno).
- Ícones pequenos de Instagram e Threads abaixo.
- Lacre de cera dourado em SVG como detalhe decorativo.
- Animação de entrada suave e escalonada, respeitando prefers-reduced-motion.
- Metatags de SEO e Open Graph.
- Visual elegante, delicado e minimalista, com muito espaço em branco.
```

---

## 6. Pendências com a cliente
- [ ] Arquivo do logo em alta (PNG transparente ou SVG)
- [ ] URL final do site
- [ ] Confirmar número do WhatsApp e texto da mensagem automática
- [ ] (Opcional) 3 fotos do portfólio em alta para a faixa de imagens
- [ ] Domínio do biolink (ex: link.docesmomentos.com.br)
