import { Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

export const NerdBanner = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="glow-card p-6 sm:p-10 relative overflow-hidden">
            <Rocket className="absolute -right-6 -top-6 w-32 h-32 text-primary/10 rotate-12" />
            <Rocket className="w-10 h-10 text-primary mb-4" />
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              E eu posso fazer esse desconto gigante, manter a qualidade do
              projeto e ainda sim sair feliz por um motivo: não sou uma agência
              gigante, com vários colaboradores, um especialista em cada área...
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Sou um{" "}
              <span className="text-primary font-bold">
                nerd criativo e ousado
              </span>
              , com um computador e um escritório no meu próprio apartamento...
              mas que construo solução melhor do que muita gente grande por aí.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};