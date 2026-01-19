// Atualizado: usando config centralizada
import { useState } from "react";
import { Instagram, Heart, Sparkles, Menu, X } from "lucide-react";

// 🎨 IMAGENS - Adicione suas imagens aqui
import heroImage from "@/assets/hero-jewelry.jpg";
import necklaceImg from "@/assets/jewelry-necklace.jpg";
import earringsImg from "@/assets/jewelry-earrings.jpg";
import ringImg from "@/assets/jewelry-ring.jpg";
import braceletImg from "@/assets/jewelry-bracelet.jpg";
import adaVideo from "@/assets/apresentacao-ada.mp4";
import adaFoto from "@/assets/ada-foto.jpg";

// 📦 COMPONENTES
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactSection } from "@/components/ContactSection";
import { ProductCard } from "@/components/ProductCard";
import { AboutVideoSection } from "@/components/AboutVideoSection";
import { TypingText } from "@/components/TypingText";

// ⚙️ CONFIGURAÇÃO - Edite o arquivo siteConfig.ts para alterar textos e produtos
import { 
  CATEGORIAS, 
  PRODUTOS, 
  CONTATOS,
  DESTAQUES_CATEGORIA,
  getCategoryBySlug 
} from "@/config/siteConfig";
import { CategoryHighlightCarousel } from "@/components/CategoryHighlightCarousel";

// Mapeamento de imagens (adicione novas imagens aqui)
const IMAGENS: Record<string, string> = {
  "jewelry-necklace.jpg": necklaceImg,
  "jewelry-earrings.jpg": earringsImg,
  "jewelry-ring.jpg": ringImg,
  "jewelry-bracelet.jpg": braceletImg,
  "hero-jewelry.jpg": heroImage,
};

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mapeia produtos com imagens reais
  const allProducts = PRODUTOS.map(p => ({
    name: p.nome,
    image: IMAGENS[p.imagem] || necklaceImg,
    price: p.preco,
    category: p.categoria,
  }));

  const filteredProducts = activeCategory 
    ? allProducts.filter(p => p.category === activeCategory)
    : allProducts;

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(activeCategory === slug ? null : slug);
  };

  const getCategoryName = (slug: string) => {
    return getCategoryBySlug(slug)?.nome || slug;
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 group cursor-pointer">
            <span className="font-serif text-xl md:text-2xl font-medium text-gradient-gold group-hover:opacity-80 transition-opacity">
              <TypingText text="Ada Gioielli" speed={120} delay={300} />
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full">Início</a>
            <a href="#sobre" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full">Quem Somos</a>
            <a href="#categorias" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full">Categorias</a>
            <button onClick={() => handleCategoryClick("colecao-sim")} className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full">Coleção Sim</button>
            <a href="#joias" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full">Joias</a>
            <a href="#contato" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full">Contato</a>
          </div>

          <a 
            href={CONTATOS.instagram.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-full transition-all duration-300 font-sans text-sm hover:scale-105"
          >
            <Instagram className="w-4 h-4" />
            <span>@{CONTATOS.instagram.usuario}</span>
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
              <button onClick={() => { handleCategoryClick("colecao-sim"); setMobileMenuOpen(false); }} className="text-foreground/80 hover:text-primary transition-colors font-sans text-base py-2 text-left">Coleção Sim</button>
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

      {/* About Section - Quem Somos com Vídeo */}
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
            
            {/* Vídeo de Apresentação */}
            <div className="mb-12">
              <AboutVideoSection 
                videoSrc={adaVideo}
                posterImage={adaFoto}
                creatorImage={adaFoto}
                creatorName="Ada"
              />
            </div>
            
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

          {/* Carrossel de Destaque por Categoria */}
          {activeCategory && DESTAQUES_CATEGORIA[activeCategory] && DESTAQUES_CATEGORIA[activeCategory].length > 0 && (
            <div className="mb-16">
              <CategoryHighlightCarousel 
                images={DESTAQUES_CATEGORIA[activeCategory].map(img => ({
                  ...img,
                  src: IMAGENS[img.src] || img.src
                }))}
              />
            </div>
          )}

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
              href={CONTATOS.instagram.url}
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
            <a href="#inicio" className="flex items-center group cursor-pointer">
              <span className="font-serif text-lg font-medium text-gradient-gold group-hover:opacity-80 transition-opacity">
                Ada Gioielli
              </span>
            </a>
            <p className="text-muted-foreground font-sans text-sm text-center">
              © 2024 Ada Gioielli. Todos os direitos reservados. Transformando amor em joias.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={CONTATOS.instagram.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <WhatsAppButton variant="inline" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
