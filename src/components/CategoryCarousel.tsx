import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CATEGORIAS } from "@/config/siteConfig";

interface CategoryCarouselProps {
  onCategoryClick: (slug: string) => void;
  activeCategory: string | null;
}

const CategoryCarousel = ({ onCategoryClick, activeCategory }: CategoryCarouselProps) => {
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
          {CATEGORIAS.map((category) => (
            <CarouselItem key={category.slug} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <button
                onClick={() => onCategoryClick(category.slug)}
                className={`group relative w-full py-4 px-6 flex items-center justify-center transition-all duration-300 cursor-pointer border-b-2
                  ${activeCategory === category.slug 
                    ? "border-primary bg-primary/5" 
                    : "border-transparent hover:border-primary/50 hover:bg-primary/5"
                  }`}
              >
                <span className={`font-serif text-sm md:text-base tracking-wide transition-colors duration-300
                  ${activeCategory === category.slug 
                    ? "text-primary" 
                    : "text-foreground/70 group-hover:text-primary"
                  }`}>
                  {category.nome}
                </span>
              </button>
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
