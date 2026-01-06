import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5519971154949";
const WHATSAPP_MESSAGE = "Olá, vim pelo site e quero conhecer mais sobre as joias";

const getWhatsAppUrl = (customMessage?: string) => {
  const message = encodeURIComponent(customMessage || WHATSAPP_MESSAGE);
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${message}`;
};

interface WhatsAppButtonProps {
  variant?: "floating" | "inline" | "cta";
  customMessage?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ variant = "floating", customMessage, className = "", children }: WhatsAppButtonProps) => {
  const url = getWhatsAppUrl(customMessage);

  if (variant === "floating") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${className}`}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    );
  }

  if (variant === "cta") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 ${className}`}
      >
        <MessageCircle className="w-5 h-5" />
        {children || "Falar pelo WhatsApp"}
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-muted-foreground hover:text-[#25D366] transition-colors duration-300 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children || "WhatsApp"}
    </a>
  );
};

export { WhatsAppButton, getWhatsAppUrl, WHATSAPP_NUMBER };
