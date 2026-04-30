import { Clock } from "lucide-react";

export const OfferExpired = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="glow-card p-10 max-w-lg text-center">
        <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
        <h1 className="font-display text-4xl sm:text-5xl uppercase mb-4">
          A oferta <span className="text-primary">expirou</span>
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          A janela de 24 horas da oferta "O Dev Ficou Maluco" foi encerrada.
          <br />
          Obrigado pelo interesse!
        </p>
      </div>
    </main>
  );
};