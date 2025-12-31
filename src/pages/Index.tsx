import { Instagram, MapPin, Phone, Mail, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";
import adaLogo from "@/assets/ada-logo.png";
import necklaceImg from "@/assets/jewelry-necklace.jpg";
import earringsImg from "@/assets/jewelry-earrings.jpg";
import ringImg from "@/assets/jewelry-ring.jpg";
import braceletImg from "@/assets/jewelry-bracelet.jpg";

const Index = () => {
  const categories = [
    { name: "Colares", icon: "✨" },
    { name: "Brincos", icon: "💎" },
    { name: "Anéis", icon: "💍" },
    { name: "Pulseiras", icon: "⭐" },
    { name: "Infantil", icon: "🌸" },
    { name: "Religiosas", icon: "🙏" },
  ];

  const featuredProducts = [
    { name: "Colar Ametista", image: necklaceImg, price: "Sob consulta" },
    { name: "Brincos Royale", image: earringsImg, price: "Sob consulta" },
    { name: "Anel Majestade", image: ringImg, price: "Sob consulta" },
    { name: "Pulseira Delicata", image: braceletImg, price: "Sob consulta" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src={adaLogo} alt="Ada Gioielli" className="h-12 md:h-16 object-contain" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide">Início</a>
            <a href="#sobre" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide">Quem Somos</a>
            <a href="#joias" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide">Joias</a>
            <a href="#contato" className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-wide">Contato</a>
          </div>
          <a 
            href="https://instagram.com/adagioielli" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-full transition-all duration-300 font-sans text-sm"
          >
            <Instagram className="w-4 h-4" />
            <span className="hidden sm:inline">@adagioielli</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Joia em ouro com ametista" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="animate-fade-in">
            <img 
              src={adaLogo} 
              alt="Ada Gioielli" 
              className="h-32 md:h-48 mx-auto mb-8 animate-float"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 animate-fade-in-delay-1">
            <span className="text-gradient-gold">Transformando</span>{" "}
            <span className="text-foreground">amor em</span>{" "}
            <span className="text-gradient-purple">joias</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-sans font-light animate-fade-in-delay-2">
            Joalheria artesanal com peças exclusivas em ouro 18k e gemas preciosas. 
            Cada joia conta uma história única de elegância e sofisticação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <a 
              href="#joias"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:shadow-glow"
            >
              <Sparkles className="w-5 h-5" />
              Ver Coleção
            </a>
            <a 
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 border border-gold/50 hover:border-gold text-gold-light hover:text-gold px-8 py-4 rounded-full font-sans font-medium transition-all duration-300"
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

      {/* About Section */}
      <section id="sobre" className="py-24 bg-gradient-card relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Quem Somos</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-8">
              Uma história de <span className="text-gradient-purple">amor</span> e <span className="text-gradient-gold">arte</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-serif text-foreground mb-4">Nossa Essência</h3>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">
                  A Ada Gioielli nasceu do sonho de transformar sentimentos em peças únicas. 
                  Cada joia é cuidadosamente elaborada para eternizar momentos especiais, 
                  combinando tradição artesanal com design contemporâneo.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-gold/50 transition-all duration-500 hover:shadow-gold">
                <Sparkles className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-serif text-foreground mb-4">Qualidade Premium</h3>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">
                  Trabalhamos exclusivamente com ouro 18k e gemas preciosas selecionadas. 
                  Oferecemos peças prontas e sob encomenda, garantindo que cada cliente 
                  encontre a joia perfeita para sua história.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-serif text-gradient-gold">18k</div>
                <div className="text-muted-foreground font-sans text-sm mt-2">Ouro Puro</div>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-serif text-gradient-purple">100%</div>
                <div className="text-muted-foreground font-sans text-sm mt-2">Artesanal</div>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-serif text-foreground">Brasil</div>
                <div className="text-muted-foreground font-sans text-sm mt-2">Envio Nacional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Categorias</span>
            <h2 className="text-3xl md:text-5xl font-serif">
              Encontre a <span className="text-gradient-purple">joia perfeita</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category, index) => (
              <button
                key={category.name}
                className="group relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-b from-purple-light/20 to-primary/10 border-2 border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-500 flex flex-col items-center justify-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl mb-2">{category.icon}</span>
                <span className="text-foreground font-serif text-sm md:text-base group-hover:text-primary transition-colors">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="joias" className="py-24 bg-gradient-card relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Destaques</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">
              Peças <span className="text-gradient-gold">exclusivas</span>
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              Descubra nossa seleção de joias artesanais, criadas com os mais nobres materiais
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <article
                key={product.name}
                className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-lg text-foreground mb-2">{product.name}</h3>
                  <p className="text-gold font-sans text-sm">{product.price}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-24">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-sans text-sm transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    Consultar
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://instagram.com/adagioielli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary hover:bg-primary hover:text-primary-foreground text-primary px-8 py-4 rounded-full font-sans transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              Ver mais no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Contato</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-8">
              Fale <span className="text-gradient-purple">conosco</span>
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto mb-12">
              Estamos prontos para ajudar você a encontrar a joia perfeita ou criar uma peça exclusiva sob encomenda
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-foreground mb-2">Instagram</h3>
                <a href="https://instagram.com/adagioielli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                  @adagioielli
                </a>
              </div>

              <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-gold/50 transition-all duration-300">
                <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-foreground mb-2">Localização</h3>
                <p className="text-muted-foreground font-sans text-sm">São Paulo, Brasil</p>
              </div>

              <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground font-sans text-sm">Mensagem via Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={adaLogo} alt="Ada Gioielli" className="h-12" />
            <p className="text-muted-foreground font-sans text-sm text-center">
              © 2024 Ada Gioielli. Todos os direitos reservados. Transformando amor em joias.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/adagioielli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
