import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    slug: string;
    description: string;
    image?: any;
    price: number;
    category?: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="relative aspect-square overflow-hidden block">
        {product.image ? (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No image available</span>
          </div>
        )}
        {product.category && (
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 text-xs font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground rounded-md shadow-sm">
              {product.category}
            </span>
          </div>
        )}
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
            <h3 className="text-xl font-bold">
              {product.name}
            </h3>
          </Link>
          <span className="font-bold text-primary">
            ${product.price}
          </span>
        </div>
        
        <p className="text-muted-foreground mb-6 line-clamp-2 text-sm flex-grow">
          {product.description}
        </p>
        
        <button className="w-full mt-auto flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
