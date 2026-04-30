import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/config/offer";

export const CTAButton = () => {
  return (
    <section className="container">
      <div className="flex justify-center">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex flex-col items-center justify-center w-full max-w-2xl rounded-2xl bg-primary px-8 py-5 text-center transition-transform hover:scale-[1.02] animate-pulse-glow"
        >
          <span className="flex items-center gap-3 font-display text-2xl sm:text-3xl md:text-4xl uppercase text-primary-foreground">
            <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9 fill-primary-foreground text-primary" />
            Aceitar a oferta
          </span>
          <span className="mt-1 text-sm sm:text-base text-primary-foreground/90">
            Te aguardo no WhatsApp!
          </span>
        </a>
      </div>
    </section>
  );
};