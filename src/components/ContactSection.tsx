import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const INSTAGRAM_URL = "https://www.instagram.com/adagioielli/";
const EMAIL = "contato@adagioielli.com.br";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-8">
            Entre em <span className="text-gradient-purple">contato</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto mb-12">
            Estamos prontas para te ajudar a encontrar a joia perfeita. Escolha o canal que preferir!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?phone=5519971154949&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20conhecer%20mais%20sobre%20as%20joias"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-[#25D366]/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#25D366]/20 group-hover:bg-[#25D366]/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="font-serif text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground group-hover:text-[#25D366] font-sans text-sm transition-colors">
                (19) 97115-4949
              </p>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-glow hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/20 group-hover:bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-foreground mb-2">Instagram</h3>
              <p className="text-muted-foreground group-hover:text-primary font-sans text-sm transition-colors">
                @adagioielli
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-gold/50 transition-all duration-300 cursor-pointer hover:shadow-gold hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gold/20 group-hover:bg-gold/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-foreground mb-2">E-mail</h3>
              <p className="text-muted-foreground group-hover:text-gold font-sans text-sm transition-colors">
                {EMAIL}
              </p>
            </a>
          </div>

          {/* CTA WhatsApp */}
          <WhatsAppButton variant="cta">
            Quero conhecer as joias
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export { ContactSection, INSTAGRAM_URL };
