// Edit this constant to set/renew the offer deadline.
// ISO 8601 with timezone. Brazil is UTC-3.
export const OFFER_DEADLINE = "2026-05-01T23:59:00-03:00";

export const WHATSAPP_NUMBER = "5598986089744";
export const WHATSAPP_MESSAGE =
  "Olá! Aceito a oferta O Dev Ficou Maluco 🚀";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;