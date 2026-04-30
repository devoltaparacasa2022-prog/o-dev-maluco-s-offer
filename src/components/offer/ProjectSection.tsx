import { FileText } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export const ProjectSection = () => {
  return (
    <section className="container py-16 md:py-24">
      <Reveal>
        <SectionHeader step="Capítulo 1" icon={FileText} title="O Projeto" />
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-6">
        <Reveal delay={100}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Um ecossistema próprio, com{" "}
            <span className="text-foreground font-semibold">25 guias</span> (um
            para cada hospedagem diferente) te custaria caro...
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Como os valores que te passei: hoje eu cobro{" "}
            <span className="text-primary font-bold">R$ 497</span> para criar
            um guia de uma hospedagem com uma única unidade.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vamos supor que a gente feche cada um dos guias nesse valor mínimo...
          </p>
        </Reveal>

        <Reveal delay={400} variant="scale">
          <div className="glow-card p-6 sm:p-8 text-center">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Estamos falando de
            </p>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl uppercase">
              25 × R$ 497 ={" "}
              <span className="text-primary text-glow">R$ 12.425,00</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            E ainda temos uma{" "}
            <span className="text-foreground font-semibold">
              landing page de R$ 997
            </span>{" "}
            futuramente.
          </p>
        </Reveal>

        <Reveal delay={600} variant="scale">
          <div className="glow-card-strong p-6 sm:p-8 text-center">
            <p className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-primary text-glow">
              R$ 13 mil
            </p>
            <p className="font-display text-xl sm:text-2xl uppercase mt-1">
              de investimento total
            </p>
          </div>
        </Reveal>

        <Reveal delay={700}>
          <p className="text-lg text-muted-foreground leading-relaxed text-center italic">
            E, sendo sincero: pelo impacto que isso pode ter na sua operação, é
            um investimento que faz muito sentido.
          </p>
        </Reveal>
      </div>
    </section>
  );
};