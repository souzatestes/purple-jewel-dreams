import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselImage {
  src: string;
  alt: string;
  link?: string;
}

interface CategoryHighlightCarouselProps {
  images: CarouselImage[];
}

/**
 * Carrossel de Destaque para Categorias
 * Suporta até 10 imagens com navegação por setas e indicadores
 */
const CategoryHighlightCarousel = ({ images }: CategoryHighlightCarouselProps) => {
  if (images.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              {image.link ? (
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="aspect-square overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </a>
              ) : (
                <div className="aspect-square overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:-left-12 bg-card/80 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
        <CarouselNext className="right-2 md:-right-12 bg-card/80 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
      </Carousel>
      
      {/* Indicadores de paginação (pontos) */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-primary/30"
          />
        ))}
      </div>
    </div>
  );
};

export { CategoryHighlightCarousel };
