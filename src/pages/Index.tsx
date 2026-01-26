// Atualizado: usando config centralizada
import { useState } from "react";
import { Instagram, Heart, Sparkles, Menu, X } from "lucide-react";

// 🎨 IMAGENS - Adicione suas imagens aqui
import heroImage from "@/assets/hero-jewelry.jpg";
import adaVideo from "@/assets/apresentacao-ada.mp4";
import adaFoto from "@/assets/ada-foto.jpg";

// 📦 COMPONENTES
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactSection } from "@/components/ContactSection";
import { AboutVideoSection } from "@/components/AboutVideoSection";
import { TypingText } from "@/components/TypingText";
import { ThemeToggle } from "@/components/ThemeToggle";

// ⚙️ CONFIGURAÇÃO - Edite o arquivo siteConfig.ts para alterar textos e produtos
import { CONTATOS } from "@/config/siteConfig";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 group cursor-pointer">
            <span className="font-serif text-lg md:text-xl font-normal tracking-tight text-foreground group-hover:opacity-70 transition-opacity">
              <TypingText text="Ada Gioielli" speed={120} delay={300} />
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#inicio" className="text-foreground/60 hover:text-foreground transition-colors font-sans text-xs tracking-[0.15em] uppercase">Início</a>
            <a href="#sobre" className="text-foreground/60 hover:text-foreground transition-colors font-sans text-xs tracking-[0.15em] uppercase">Sobre</a>
            <a href="#categorias" className="text-foreground/60 hover:text-foreground transition-colors font-sans text-xs tracking-[0.15em] uppercase">Coleções</a>
            <a href="#joias" className="text-foreground/60 hover:text-foreground transition-colors font-sans text-xs tracking-[0.15em] uppercase">Joias</a>
            <a href="#contato" className="text-foreground/60 hover:text-foreground transition-colors font-sans text-xs tracking-[0.15em] uppercase">Contato</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href={CONTATOS.instagram.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-sans text-base py-2">Início</a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-sans text-base py-2">Quem Somos</a>
              <a href="#categorias" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-sans text-base py-2">Categorias</a>
              <a href="/categoria/colecao-sim" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-sans text-base py-2">Coleção Sim</a>
              <a href="#joias" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-sans text-base py-2">Joias</a>
              <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-sans text-base py-2">Contato</a>
              <a 
                href={CONTATOS.instagram.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-sans text-base py-2"
              >
                <Instagram className="w-5 h-5" />
                @{CONTATOS.instagram.usuario}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/5 blur-3xl animate-float" />
          <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-gold/5 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-light/10 blur-2xl" />
        </div>
        
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Joias Ada Gioielli - Semijoias femininas e delicadas" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans">Semijoias Exclusivas</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal mb-8 animate-fade-in-delay-1 tracking-tight">
            <span className="text-foreground">Sua feminilidade</span>
            <br />
            <span className="text-gradient-gold">em joias</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-12 font-sans font-light animate-fade-in-delay-2 leading-relaxed">
            Peças delicadas que celebram sua essência. 
            Cada joia conta uma história única.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <WhatsAppButton variant="cta" className="bg-gold hover:bg-gold-light text-white shadow-gold">
              <Sparkles className="w-4 h-4" />
              Explorar Coleção
            </WhatsAppButton>
            <a 
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 border border-gold/30 hover:border-gold hover:bg-gold/5 text-foreground px-8 py-4 rounded-full font-sans text-sm transition-all duration-300"
            >
              Nossa História
            </a>
          </div>
        </div>

        {/* Scroll indicator with gold accent */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border border-gold/40 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-gold/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section - Quem Somos com Vídeo */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans mb-6 block">Nossa História</span>
            <h2 className="text-3xl md:text-5xl font-serif font-normal mb-4 tracking-tight">
              Ada Gioielli
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mb-12" />
            
            {/* Vídeo de Apresentação */}
            <div className="mb-16">
              <AboutVideoSection 
                videoSrc={adaVideo}
                posterImage={adaFoto}
                creatorImage={adaFoto}
                creatorName="Ada"
              />
            </div>
            
            {/* Manifesto */}
            <div className="max-w-2xl mx-auto mb-16">
              <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8 italic">
                "Acreditamos que o amor e o zelo têm o poder de transformar vidas."
              </p>
              <p className="text-base text-muted-foreground font-sans font-light leading-relaxed">
                Queremos te encorajar a abraçar sua <span className="text-accent font-medium">feminilidade</span> e <span className="text-accent font-medium">delicadeza</span> sem medo. 
                Nossas joias são lembretes diários de coragem para buscar as transformações que você deseja.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 md:gap-16">
              <div className="text-center group cursor-pointer">
                <div className="w-8 h-8 rounded-full border border-gold/30 mx-auto mb-3 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <Heart className="w-3 h-3 text-gold/60 group-hover:text-gold transition-colors" />
                </div>
                <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans group-hover:text-gold transition-colors duration-300">Amor</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-8 h-8 rounded-full border border-gold/30 mx-auto mb-3 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <Sparkles className="w-3 h-3 text-gold/60 group-hover:text-gold transition-colors" />
                </div>
                <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans group-hover:text-gold transition-colors duration-300">Delicadeza</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-8 h-8 rounded-full border border-gold/30 mx-auto mb-3 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-gold/60 group-hover:bg-gold transition-colors" />
                </div>
                <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans group-hover:text-gold transition-colors duration-300">Exclusividade</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-8 h-8 rounded-full border border-gold/30 mx-auto mb-3 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <div className="w-3 h-3 border border-gold/60 rounded-full group-hover:border-gold transition-colors" />
                </div>
                <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans group-hover:text-gold transition-colors duration-300">Feminilidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section with Carousel */}
      <section id="categorias" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans mb-6 block">Coleções</span>
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-4 tracking-tight">
              Explore nossas categorias
            </h2>
            <div className="w-12 h-px bg-accent mx-auto" />
          </div>

          <CategoryCarousel />
        </div>
      </section>

      {/* CTA Joias - Redireciona para Categorias */}
      <section id="joias" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans mb-6 block">Curadoria</span>
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-4 tracking-tight">
              Descubra nossas joias
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto mb-10">
              Explore todas as nossas categorias e encontre a joia perfeita para você
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#categorias"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-sans text-sm transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                Ver Todas as Categorias
              </a>
              <WhatsAppButton variant="cta" className="border border-foreground/20 hover:border-foreground/40 bg-transparent text-foreground px-8 py-4">
                <Heart className="w-4 h-4" />
                Falar com especialista
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <a href="#inicio" className="flex items-center group cursor-pointer">
              <span className="font-serif text-xl font-normal tracking-tight text-foreground group-hover:opacity-70 transition-opacity">
                Ada Gioielli
              </span>
            </a>
            <div className="flex items-center gap-6">
              <a 
                href={CONTATOS.instagram.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-foreground/20 hover:border-foreground/40 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-foreground/60" />
              </a>
              <WhatsAppButton variant="inline" />
            </div>
            <p className="text-muted-foreground font-sans text-xs tracking-wide text-center">
              © 2024 Ada Gioielli. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
