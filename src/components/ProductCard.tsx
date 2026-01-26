import { getWhatsAppUrl } from "@/config/siteConfig";

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
      className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-gold hover:shadow-gold transition-all duration-500 cursor-pointer block"
    >
      {/* Decorative gold corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rotate-45" />
      </div>
      
      <div className="aspect-square overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* Gold shimmer overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6 text-center relative">
        {category && (
          <span className="text-gold/80 font-sans text-xs uppercase tracking-wider mb-1 block">
            {category}
          </span>
        )}
        <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gold font-sans text-sm font-medium">{price}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-24">
        <span className="bg-gold hover:bg-gold-light text-white px-6 py-2 rounded-full font-sans text-sm transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-gold">
          Consultar via WhatsApp
        </span>
      </div>
    </a>
  );
};

export { ProductCard };
