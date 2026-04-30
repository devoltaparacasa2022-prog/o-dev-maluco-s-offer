import { Rocket } from "lucide-react";

export const NerdBanner = () => {
  return (
    <section className="container">
      <div className="glow-card p-6 sm:p-8 flex gap-4 items-start">
        <Rocket className="w-8 h-8 text-primary shrink-0 mt-1" />
        <p className="text-muted-foreground leading-relaxed">
          E eu posso fazer esse desconto gigante, manter a qualidade do
          projeto e ainda sim sair feliz por um motivo: não sou uma agência
          gigante, com vários colaboradores, um especialista em cada área...
          sou um{" "}
          <span className="text-primary font-semibold">
            nerd criativo e ousado
          </span>
          , com um computador e um escritório no meu próprio apartamento... mas
          que construo solução melhor do que muita gente grande por aí.
        </p>
      </div>
    </section>
  );
};