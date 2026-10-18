import { Users } from "lucide-react";
import { formatPrice, tagLabels, type Product } from "@/data/menu";
import { SafeImage } from "./SafeImage";

export function ProductDetails({ product }: { product: Product }) {
  return (
    <div>
      <div className="relative mx-4 mt-1 aspect-[4/3] overflow-hidden rounded-2xl">
        <SafeImage src={product.image} alt={product.name} fill sizes="(max-width: 448px) 100vw, 448px" className="object-cover" />
      </div>

      <div className="px-5 pt-5 pb-6">
        {product.tags && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {product.tags.map((t) => (
              <span key={t} className={`rounded-md px-2 py-0.5 text-xs font-medium ${tagLabels[t].className}`}>
                {tagLabels[t].label}
              </span>
            ))}
          </div>
        )}

        <h2 className="font-display text-4xl leading-none tracking-wide">{product.name}</h2>
        <p className="mt-3 leading-relaxed text-muted">{product.description}</p>

        {product.serves && (
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
            <Users size={16} /> {product.serves}
          </p>
        )}

        {product.ingredients && (
          <div className="mt-5">
            <h3 className="text-xs font-semibold tracking-widest text-muted uppercase">Ingredientes</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {product.ingredients.map((i) => (
                <li key={i} className="rounded-full bg-surface-2 px-3 py-1 text-sm">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between rounded-2xl bg-surface-2 p-4">
          <div>
            <p className="text-xs text-muted">Para pedir, informe ao garçom</p>
            <p className="font-display text-3xl tracking-wide text-brand">Nº {product.code}</p>
          </div>
          <div className="text-right">
            {product.oldPrice && (
              <p className="text-xs text-muted line-through">{formatPrice(product.oldPrice)}</p>
            )}
            <p className="text-2xl font-bold">{formatPrice(product.price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
