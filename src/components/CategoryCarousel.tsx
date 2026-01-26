import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CATEGORIAS } from "@/config/siteConfig";

interface CategoryCarouselProps {
  onCategoryClick?: (slug: string) => void;
  activeCategory?: string | null;
}

const CategoryCarousel = ({ onCategoryClick, activeCategory }: CategoryCarouselProps) => {
  // Filtra a categoria "sobre" que não deve aparecer como categoria de produtos
  const productCategories = CATEGORIAS.filter(c => c.slug !== "sobre");

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {productCategories.map((category) => (
            <CarouselItem key={category.slug} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <Link
                to={`/categoria/${category.slug}`}
                onClick={() => onCategoryClick?.(category.slug)}
                className={`group relative w-full py-5 px-6 flex items-center justify-center transition-all duration-300 cursor-pointer rounded-xl border
                  ${activeCategory === category.slug 
                    ? "border-gold bg-gold/10 shadow-gold" 
                    : "border-border/50 hover:border-gold hover:bg-gold/5 hover:shadow-gold"
                  }`}
              >
                {/* Decorative sparkle */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className={`font-serif text-sm md:text-base tracking-wide transition-colors duration-300
                  ${activeCategory === category.slug 
                    ? "text-gold" 
                    : "text-foreground/70 group-hover:text-gold"
                  }`}>
                  {category.nome}
                </span>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
        <CarouselNext className="hidden md:flex -right-12 bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
      </Carousel>
    </div>
  );
};

export { CategoryCarousel };
