import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Instagram } from "lucide-react";

// 🎨 IMAGENS
import necklaceImg from "@/assets/jewelry-necklace.jpg";
import earringsImg from "@/assets/jewelry-earrings.jpg";
import ringImg from "@/assets/jewelry-ring.jpg";
import braceletImg from "@/assets/jewelry-bracelet.jpg";

// 📦 COMPONENTES
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CategoryHighlightCarousel } from "@/components/CategoryHighlightCarousel";

// ⚙️ CONFIGURAÇÃO
import { 
  CATEGORIAS, 
  PRODUTOS, 
  CONTATOS,
  DESTAQUES_CATEGORIA,
  getCategoryBySlug 
} from "@/config/siteConfig";

// Mapeamento de imagens
const IMAGENS: Record<string, string> = {
  "jewelry-necklace.jpg": necklaceImg,
  "jewelry-earrings.jpg": earringsImg,
  "jewelry-ring.jpg": ringImg,
  "jewelry-bracelet.jpg": braceletImg,
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = getCategoryBySlug(slug || "");
  
  // Filtra produtos pela categoria
  const categoryProducts = PRODUTOS
    .filter(p => {
      // Mapeia os slugs de categoria para os valores de categoria nos produtos
      const categoryMap: Record<string, string[]> = {
        "anel": ["aneis", "anel"],
        "brinco": ["brincos", "brinco"],
        "colar": ["colares", "colar"],
        "colecao-sim": ["colecao-sim"],
        "especial-crianca": ["infantil", "especial-crianca"],
        "pingente": ["pingentes", "pingente"],
        "pulseira": ["pulseiras", "pulseira"],
        "religioso": ["religiosas", "religioso"],
      };
      
      const matchCategories = categoryMap[slug || ""] || [slug];
      return matchCategories.includes(p.categoria);
    })
    .map(p => ({
      name: p.nome,
      image: IMAGENS[p.imagem] || necklaceImg,
      price: p.preco,
      category: p.categoria,
    }));

  // Imagens de destaque da categoria
  const highlightImages = DESTAQUES_CATEGORIA[slug || ""]?.map(img => ({
    ...img,
    src: IMAGENS[img.src] || img.src
  })) || [];

  if (!category) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Categoria não encontrada</h1>
          <Link 
            to="/" 
            className="text-primary hover:underline font-sans"
          >
            Voltar para o início
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <span className="font-serif text-lg md:text-xl font-normal tracking-tight text-foreground group-hover:opacity-70 transition-opacity">
              Ada Gioielli
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors font-sans text-xs tracking-[0.15em] uppercase">Início</Link>
            <Link to="/#sobre" className="text-foreground/60 hover:text-foreground transition-colors font-sans text-xs tracking-[0.15em] uppercase">Sobre</Link>
            <Link to="/#categorias" className="text-foreground/60 hover:text-foreground transition-colors font-sans text-xs tracking-[0.15em] uppercase">Coleções</Link>
            <Link to="/#contato" className="text-foreground/60 hover:text-foreground transition-colors font-sans text-xs tracking-[0.15em] uppercase">Contato</Link>
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

          {/* Mobile back button */}
          <Link 
            to="/"
            className="md:hidden flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </nav>

      {/* Category Header */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link 
              to="/#categorias" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-sans text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar às categorias
            </Link>
            <h1 className="text-3xl md:text-5xl font-serif font-normal mb-4 tracking-tight">
              {category.nome}
            </h1>
            <div className="w-12 h-px bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto">
              {categoryProducts.length} {categoryProducts.length === 1 ? 'peça disponível' : 'peças disponíveis'}
            </p>
          </div>
        </div>
      </section>

      {/* Category Highlights Carousel */}
      {highlightImages.length > 0 && (
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-4">
            <CategoryHighlightCarousel images={highlightImages} />
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  category={category.nome}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-sans mb-6">
                Ainda não há produtos cadastrados nesta categoria.
              </p>
              <WhatsAppButton variant="cta" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Consultar disponibilidade
              </WhatsAppButton>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={CONTATOS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 hover:border-foreground/40 text-foreground px-8 py-3 font-sans text-sm transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              Ver mais no Instagram
            </a>
            <WhatsAppButton variant="cta" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Falar com especialista
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-normal mb-4">Outras categorias</h2>
            <div className="w-12 h-px bg-accent mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIAS.filter(c => c.slug !== slug && c.slug !== "sobre").map((cat) => (
              <Link
                key={cat.slug}
                to={`/categoria/${cat.slug}`}
                className="px-6 py-3 border border-border hover:border-primary hover:bg-primary/5 text-foreground/70 hover:text-primary font-sans text-sm transition-all duration-300 rounded-full"
              >
                {cat.nome}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <Link to="/" className="flex items-center group cursor-pointer">
              <span className="font-serif text-xl font-normal tracking-tight text-foreground group-hover:opacity-70 transition-opacity">
                Ada Gioielli
              </span>
            </Link>
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

export default CategoryPage;
