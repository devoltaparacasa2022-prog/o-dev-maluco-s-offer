import { Crown } from "lucide-react";
import { Reveal } from "./Reveal";

export const QualitySection = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <Reveal variant="scale">
          <div className="glow-card p-6 sm:p-8 text-center">
            <Crown className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-sm uppercase tracking-widest text-primary mb-2">
              Ah, detalhe muito importante
            </p>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              A qualidade{" "}
              <span className="text-primary font-bold">não cairá nem um pouco</span>.
              Pelo contrário: você terá{" "}
              <span className="text-primary font-bold">total exclusividade minha</span>{" "}
              no seu projeto.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};