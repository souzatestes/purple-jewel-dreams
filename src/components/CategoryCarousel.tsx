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
            <CarouselItem key={category.slug} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
              <button
                onClick={() => onCategoryClick(category.slug)}
                className={`group relative w-full aspect-square rounded-full flex flex-col items-center justify-center transition-all duration-500 cursor-pointer
                  ${activeCategory === category.slug 
                    ? "bg-primary border-2 border-primary shadow-glow" 
                    : "bg-gradient-to-b from-purple-light/20 to-primary/10 border-2 border-primary/30 hover:border-primary hover:shadow-glow"
                  }`}
              >
                <span className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
                  {category.icone}
                </span>
                <span className={`font-serif text-sm md:text-base transition-colors duration-300
                  ${activeCategory === category.slug 
                    ? "text-primary-foreground" 
                    : "text-foreground group-hover:text-primary"
                  }`}>
                  {category.nome}
                </span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 bg-card/80 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
        <CarouselNext className="hidden md:flex -right-12 bg-card/80 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
      </Carousel>
    </div>
  );
};

export { CategoryCarousel };
