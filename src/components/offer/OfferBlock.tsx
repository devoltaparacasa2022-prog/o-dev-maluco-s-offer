import { Tag, Gift, ClipboardList, CreditCard, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export const OfferBlock = () => {
  return (
    <section className="container py-16 md:py-24">
      <Reveal>
        <SectionHeader
          step="Capítulo 3"
          icon={Tag}
          title="A Oferta"
          highlight="O Dev Ficou Maluco"
        />
      </Reveal>

      <div className="max-w-4xl mx-auto">
        <Reveal delay={100}>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
            Então vamos para a oferta:
          </p>
        </Reveal>

        {/* Itens da oferta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <Reveal delay={200} variant="left">
            <div className="glow-card p-6 h-full flex gap-4">
              <ClipboardList className="w-8 h-8 text-primary shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Cada guia sairá no valor fixo de
                </p>
                <p className="font-display text-4xl text-primary text-glow mt-1">
                  R$ 197
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} variant="right">
            <div className="glow-card p-6 h-full flex gap-4">
              <Gift className="w-8 h-8 text-primary shrink-0" />
              <p className="text-base text-muted-foreground leading-relaxed">
                Sua landing page (com o seu trabalho, ebook e etc) sairá como{" "}
                <span className="text-primary font-bold uppercase">Bônus</span>{" "}
                pelo aceite dessa oferta. Não haverá custos.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Preço total */}
        <Reveal delay={400} variant="scale">
          <div className="glow-card-strong p-8 sm:p-12 text-center animate-pulse-glow">
            <p className="text-sm sm:text-base uppercase tracking-widest text-muted-foreground">
              Valor total do projeto
            </p>
            <p className="font-display text-6xl sm:text-7xl md:text-8xl text-primary text-glow my-3">
              R$ 4.925,00
            </p>
            <p className="flex items-center justify-center gap-2 text-sm sm:text-base text-muted-foreground">
              <CreditCard className="w-5 h-5" />
              Em até 5x sem juros no cartão. Ou acima disso, com o juros da
              maquininha.
            </p>
          </div>
        </Reveal>

        {/* Desconto */}
        <Reveal delay={500} variant="scale">
          <div className="mt-6 rounded-2xl border-2 border-dashed border-primary bg-primary/5 p-6 sm:p-8 text-center">
            <p className="flex items-center justify-center gap-2 text-sm uppercase tracking-widest text-primary mb-2">
              <Sparkles className="w-4 h-4" /> Sua economia <Sparkles className="w-4 h-4" />
            </p>
            <p className="font-display text-5xl sm:text-6xl text-primary text-glow">
              R$ 8.497,00
            </p>
            <p className="text-sm sm:text-base text-foreground/90 mt-3 max-w-xl mx-auto">
              É o valor de desconto e a economia se a oferta for aceita dentro
              das <span className="text-primary font-semibold">próximas 24 horas.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};