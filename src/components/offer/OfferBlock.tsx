import { Tag, Gift, ClipboardList, Crown } from "lucide-react";

export const OfferBlock = () => {
  return (
    <section className="container">
      <div className="glow-card-strong p-6 sm:p-8 lg:p-10 animate-pulse-glow">
        <header className="flex items-center gap-3 mb-6">
          <Tag className="w-8 h-8 text-primary" />
          <div>
            <p className="font-display text-lg sm:text-xl uppercase text-muted-foreground">
              A Oferta
            </p>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-primary text-glow">
              O Dev Ficou Maluco
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: items */}
          <div className="space-y-4">
            <div className="rounded-xl border border-primary/40 bg-secondary/40 p-4 flex gap-3">
              <ClipboardList className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Cada guia sairá no valor fixo de
                </p>
                <p className="font-display text-2xl text-primary">R$ 197</p>
              </div>
            </div>
            <div className="rounded-xl border border-primary/40 bg-secondary/40 p-4 flex gap-3">
              <Gift className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sua landing page (com o seu trabalho, ebook e etc) sairá como{" "}
                <span className="text-primary font-semibold">BÔNUS</span> pelo
                aceite dessa oferta. Não haverá custos.
              </p>
            </div>
          </div>

          {/* Center: prices */}
          <div className="text-center lg:px-4">
            <p className="text-muted-foreground">Valor total do projeto:</p>
            <p className="font-display text-5xl sm:text-6xl text-primary text-glow my-2">
              R$ 4.925,00
            </p>
            <p className="text-sm text-muted-foreground">
              Que poderá ser dividido em até 5x sem juros no cartão.
              <br />
              Ou acima disso, com o juros da maquininha.
            </p>

            <div className="mt-5 rounded-xl border-2 border-primary bg-primary/10 px-4 py-4">
              <p className="font-display text-3xl sm:text-4xl text-primary">
                R$ 8.497,00
              </p>
              <p className="text-xs sm:text-sm text-foreground/80 mt-1">
                É O VALOR DE DESCONTO E A ECONOMIA SE A OFERTA FOR ACEITA
                DENTRO DAS PRÓXIMAS 24 HORAS.
              </p>
            </div>
          </div>

          {/* Right: detail */}
          <div className="rounded-xl border border-primary/40 bg-secondary/40 p-5">
            <Crown className="w-7 h-7 text-primary mb-3" />
            <h3 className="font-display text-lg uppercase mb-2">
              Detalhe muito importante:
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              A qualidade não cairá nem um pouco. Pelo contrário: você terá
              total exclusividade minha no seu projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};