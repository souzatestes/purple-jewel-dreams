import { getWhatsAppUrl } from "./WhatsAppButton";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  category?: string;
}

const ProductCard = ({ name, image, price, category }: ProductCardProps) => {
  const whatsappMessage = `Olá! Vi a peça "${name}" no site e gostaria de saber mais informações.`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-glow cursor-pointer block"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="p-6 text-center">
        {category && (
          <span className="text-primary/70 font-sans text-xs uppercase tracking-wider mb-1 block">
            {category}
          </span>
        )}
        <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-gold font-sans text-sm">{price}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-24">
        <span className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-sans text-sm transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          Consultar via WhatsApp
        </span>
      </div>
    </a>
  );
};

export { ProductCard };
