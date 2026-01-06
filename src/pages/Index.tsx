import { useState } from "react";
import { Instagram, Heart, Sparkles, Menu, X } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";
import necklaceImg from "@/assets/jewelry-necklace.jpg";
import earringsImg from "@/assets/jewelry-earrings.jpg";
import ringImg from "@/assets/jewelry-ring.jpg";
import braceletImg from "@/assets/jewelry-bracelet.jpg";
import { CategoryCarousel, categories } from "@/components/CategoryCarousel";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactSection, INSTAGRAM_URL } from "@/components/ContactSection";
import { ProductCard } from "@/components/ProductCard";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allProducts = [
    { name: "Colar Delicato", image: necklaceImg, price: "Sob consulta", category: "colares" },
    { name: "Brincos Grace", image: earringsImg, price: "Sob consulta", category: "brincos" },
    { name: "Anel Amore", image: ringImg, price: "Sob consulta", category: "aneis" },
    { name: "Pulseira Bella", image: braceletImg, price: "Sob consulta", category: "pulseiras" },
    { name: "Colar Bambina", image: necklaceImg, price: "Sob consulta", category: "infantil" },
    { name: "Pingente Fé", image: earringsImg, price: "Sob consulta", category: "religiosas" },
  ];

  const filteredProducts = activeCategory 
    ? allProducts.filter(p => p.category === activeCategory)
    : allProducts;

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(activeCategory === slug ? null : slug);
  };

  const getCategoryName = (slug: string) => {
    return categories.find(c => c.slug === slug)?.name || slug;
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#inicio" className="flex flex-col items-center group cursor-pointer">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-gradient-gold font-medium group-hover:opacity-80 transition-opacity">ADA</span>
            <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] text-muted-foreground uppercase -mt-1">Gioielli</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full">Início</a>
            <a href="#sobre" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full">Quem Somos</a>
            <a href="#categorias" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full">Categorias</a>
            <a href="#joias" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full">Joias</a>
            <a href="#contato" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full">Contato</a>
          </div>

          <a 
            href={INSTAGRAM_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-full transition-all duration-300 font-sans text-sm hover:scale-105"
          >
            <Instagram className="w-4 h-4" />
            <span>@adagioielli</span>
          </a>

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
              <a href="#joias" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-sans text-base py-2">Joias</a>
              <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-sans text-base py-2">Contato</a>
              <a 
                href={INSTAGRAM_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-sans text-base py-2"
              >
                <Instagram className="w-5 h-5" />
                @adagioielli
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Joias Ada Gioielli - Semijoias femininas e delicadas" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="animate-fade-in mb-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-6" />
              <span className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] text-gradient-gold font-medium animate-shimmer">ADA</span>
              <span className="font-sans text-sm md:text-base tracking-[0.5em] text-muted-foreground uppercase mt-2">Gioielli</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-6" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 animate-fade-in-delay-1">
            <span className="text-gradient-gold">Sua</span>{" "}
            <span className="text-foreground">feminilidade em</span>{" "}
            <span className="text-gradient-purple">joias</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-sans font-light animate-fade-in-delay-2">
            Semijoias delicadas que celebram sua coragem de ser quem você é. 
            Cada peça é um lembrete diário de sua força e feminilidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <WhatsAppButton variant="cta">
              <Sparkles className="w-5 h-5" />
              Quero conhecer as joias
            </WhatsAppButton>
            <a 
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 border border-gold/50 hover:border-gold text-gold-light hover:text-gold px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105"
            >
              Conheça Nossa História
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section - Manifesto */}
      <section id="sobre" className="py-24 bg-gradient-card relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Quem Somos</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-12">
              <span className="text-gradient-gold">ADA</span>{" "}
              <span className="text-gradient-purple">GIOIELLI</span>
            </h2>
            
            {/* Manifesto */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 mb-12 hover:border-primary/30 transition-all duration-500">
              <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
              <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8">
                "Acreditamos que o amor e o zelo têm o poder de transformar e melhorar as vidas das pessoas."
              </p>
              <p className="text-lg text-muted-foreground font-sans font-light leading-relaxed">
                Queremos te encorajar a abraçar e mostrar a sua <span className="text-primary font-medium">feminilidade</span> e <span className="text-gold font-medium">delicadeza</span> sem medo. 
                Nossas joias serão o seu lembrete diário de <span className="text-primary font-medium">coragem</span> para buscar as transformações 
                que você busca na sua vida, sem abrir mão da sua feminilidade e delicadeza.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-serif text-gradient-gold">♥</div>
                <div className="text-muted-foreground font-sans text-sm mt-2">Amor</div>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-serif text-gradient-purple">✨</div>
                <div className="text-muted-foreground font-sans text-sm mt-2">Delicadeza</div>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-serif text-foreground">💪</div>
                <div className="text-muted-foreground font-sans text-sm mt-2">Coragem</div>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-serif text-gradient-gold">🌸</div>
                <div className="text-muted-foreground font-sans text-sm mt-2">Feminilidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section with Carousel */}
      <section id="categorias" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Categorias</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">
              Encontre a <span className="text-gradient-purple">joia perfeita</span>
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              Clique em uma categoria para filtrar as joias
            </p>
          </div>

          <CategoryCarousel 
            onCategoryClick={handleCategoryClick}
            activeCategory={activeCategory}
          />

          {activeCategory && (
            <div className="text-center mt-8">
              <button
                onClick={() => setActiveCategory(null)}
                className="text-muted-foreground hover:text-primary font-sans text-sm underline transition-colors"
              >
                Ver todas as categorias
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section id="joias" className="py-24 bg-gradient-card relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
              {activeCategory ? getCategoryName(activeCategory) : "Destaques"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">
              Peças <span className="text-gradient-gold">exclusivas</span>
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              Clique em qualquer peça para consultar via WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                image={product.image}
                price={product.price}
                category={getCategoryName(product.category)}
              />
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary hover:bg-primary hover:text-primary-foreground text-primary px-8 py-4 rounded-full font-sans transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              Ver mais no Instagram
            </a>
            <WhatsAppButton variant="cta" className="bg-primary hover:bg-primary/90">
              Falar com especialista
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#inicio" className="flex flex-col items-center group cursor-pointer">
              <span className="font-serif text-xl tracking-[0.15em] text-gradient-gold font-medium group-hover:opacity-80 transition-opacity">ADA</span>
              <span className="font-sans text-[8px] tracking-[0.4em] text-muted-foreground uppercase -mt-0.5">Gioielli</span>
            </a>
            <p className="text-muted-foreground font-sans text-sm text-center">
              © 2024 Ada Gioielli. Todos os direitos reservados. Transformando amor em joias.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={INSTAGRAM_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5519971154949&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20conhecer%20mais%20sobre%20as%20joias"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366]/20 hover:bg-[#25D366]/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
