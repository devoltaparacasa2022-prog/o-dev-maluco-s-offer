
# Landing Page — "O Dev Ficou Maluco"

Página única de proposta comercial, alta conversão, fiel ao mockup enviado: tema escuro com destaques laranja, layout em blocos com bordas glow, e cronômetro real de expiração.

## Estrutura da página (top → bottom)

1. **Hero**
   - Título gigante "O DEV FICOU MALUCO" (branco + laranja, tipografia condensada e impactante)
   - Selo circular "OFERTA POR TEMPO LIMITADO" no canto direito
   - Subtítulo: "Uma oferta realmente insana. Por um motivo muito especial. E atenção: essa oferta tem validade de 24 horas. Ao final do tempo, essa página e a oferta desaparecem."
   - Ilustração/elemento visual à esquerda (efeito de faíscas/glow laranja para evocar o personagem do mockup)

2. **Dois cards lado a lado**
   - **O Projeto**: explicação do cálculo (25 guias × R$ 497 = R$ 12.425), landing de R$ 997, total R$ 13 mil. Destaque visual no "R$ 13 MIL DE INVESTIMENTO TOTAL".
   - **Por que eu estou fazendo isso?**: lista numerada com os 3 motivos pessoais + frase de fechamento em laranja.

3. **Bloco "A OFERTA — O Dev Ficou Maluco"** (card grande com glow laranja mais intenso)
   - Coluna esquerda: "Cada guia: R$ 197" + "Landing page como BÔNUS"
   - Coluna central: **R$ 4.925,00** em destaque enorme + "5x sem juros" + **R$ 8.497,00 de desconto/economia**
   - Coluna direita: "Detalhe muito importante" (qualidade + exclusividade)

4. **Faixa do "nerd criativo e ousado"**
   - Card horizontal com ícone de foguete e o parágrafo sobre não ser uma agência gigante.

5. **Resumo da oferta — "O que você vai receber"**
   - Grid de cards com ícone + label para cada item: 25 Guias Digitais, Informações individuais, Check-in/out, Wi-Fi, Localização, Regras, Comodidades, Instruções importantes, Links de acesso, QR Codes, Organização e padronização visual, Estrutura para o hóspede, Landing Page.

6. **Cronômetro**
   - Título "⚡ A OFERTA TEM VALIDADE DE: ⚡"
   - 3 blocos grandes estilo flip (HORAS : MINUTOS : SEGUNDOS)
   - Texto manuscrito ao lado: "Ao final do tempo, essa página e a oferta desaparecem."

7. **CTA final**
   - Botão laranja gigante com ícone do WhatsApp: **"ACEITAR A OFERTA"**
   - Subtexto: "Te aguardo no WhatsApp!"
   - Link para `https://wa.me/5598986089744` com mensagem pré-preenchida ("Olá! Aceito a oferta O Dev Ficou Maluco 🚀")

## Estado de oferta expirada

Quando o cronômetro zerar, a página inteira é substituída por uma tela minimalista:
- Título "A oferta expirou"
- Mensagem curta explicando que a janela de 24h acabou
- Sem preços, sem botão de WhatsApp

## Cronômetro — comportamento

- Data fixa de expiração definida em uma constante no código (ex: `OFFER_DEADLINE = "2026-05-01T19:43:00-03:00"`)
- Você pode editar essa constante a qualquer momento para ajustar/renovar a oferta
- Tick a cada 1s, formatado com zero à esquerda
- Se `now >= deadline` → renderiza a tela de expirado

## Design system

- **Fundo**: preto profundo (`#0a0a0a` / quase preto)
- **Primária**: laranja vibrante (estilo `#FF6B1A`) com variantes para glow/borda
- **Texto**: branco e cinza claro; destaques em laranja
- **Tipografia**: fonte sans condensada e pesada para títulos (estilo "Anton" / "Bebas Neue"); Inter para corpo; uma fonte manuscrita leve para a anotação ao lado do cronômetro
- **Cards**: fundo cinza-escuro translúcido, borda 1px laranja com `box-shadow` glow externo suave
- **Animações sutis**: glow pulsante no botão CTA, leve fade-in nos blocos ao scroll

Tudo será definido como tokens semânticos no `index.css` + `tailwind.config.ts` (sem cores hardcoded nos componentes).

## Detalhes técnicos

- Página única em `src/pages/Index.tsx`, dividida em componentes: `Hero`, `ProjectCard`, `WhyCard`, `OfferBlock`, `NerdBanner`, `OfferSummary`, `Countdown`, `CTAButton`, `OfferExpired`.
- Hook `useCountdown(deadline)` retorna `{ hours, minutes, seconds, expired }`.
- Constante `OFFER_DEADLINE` exportada de `src/config/offer.ts` (fácil de editar).
- WhatsApp: `https://wa.me/5598986089744?text=...` abrindo em nova aba.
- Responsivo: layout em coluna única no mobile, 2 colunas em md, 3 colunas no bloco da oferta em lg.
- SEO: title e meta description voltados para a proposta; favicon mantido.

Pronto para implementar quando você aprovar.
