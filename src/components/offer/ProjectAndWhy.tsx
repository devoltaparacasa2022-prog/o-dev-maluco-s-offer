import { FileText, User } from "lucide-react";

export const ProjectAndWhy = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* O Projeto */}
        <article className="glow-card p-6 sm:p-8 animate-fade-in-up">
          <header className="flex items-center gap-3 mb-4">
            <FileText className="w-7 h-7 text-primary" />
            <h2 className="font-display text-2xl sm:text-3xl uppercase">O Projeto</h2>
          </header>

          <p className="text-muted-foreground leading-relaxed">
            Um ecossistema próprio, com 25 guias (um para cada hospedagem
            diferente) te custaria caro... Como os valores que te passei: hoje
            eu cobro{" "}
            <span className="text-primary font-semibold">R$ 497</span> para
            criar um guia de uma hospedagem com uma única unidade.
          </p>

          <div className="mt-5 rounded-xl border border-primary/40 bg-secondary/40 px-4 py-3">
            <p className="font-display text-lg sm:text-xl uppercase tracking-wide">
              25 guias × R$ 497 ={" "}
              <span className="text-primary">R$ 12.425,00</span>
            </p>
          </div>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            E ainda temos uma landing page de R$ 997 futuramente.
          </p>

          <p className="mt-3 font-display text-xl sm:text-2xl uppercase text-primary">
            R$ 13 mil de investimento total.
          </p>

          <p className="mt-3 text-muted-foreground leading-relaxed">
            E, sendo sincero: pelo impacto que isso pode ter na sua operação, é
            um investimento que faz muito sentido.
          </p>
        </article>

        {/* Por que */}
        <article className="glow-card p-6 sm:p-8 animate-fade-in-up">
          <header className="flex items-center gap-3 mb-4">
            <User className="w-7 h-7 text-primary" />
            <h2 className="font-display text-2xl sm:text-3xl uppercase">
              Por que eu estou fazendo isso?
            </h2>
          </header>

          <ol className="space-y-4">
            {[
              "Meu custo com cada projeto é basicamente o meu tempo. Tenho margem para negociar e ainda fazer sentido para mim.",
              "Fechar um projeto desse porte me permite reservar uma janela exclusiva de produção, sem dividir minha atenção entre vários projetos menores.",
              "O seu projeto para mim é um baita case no meu portfólio e você é uma cliente muito estratégica.",
            ].map((text, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-display text-primary text-xl leading-none mt-1">
                  {i + 1}.
                </span>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-primary font-semibold leading-relaxed">
            Por tudo isso, eu posso fazer uma oferta que é realmente maluca,
            mas que faz sentido para nós dois.
          </p>
        </article>
      </div>
    </section>
  );
};