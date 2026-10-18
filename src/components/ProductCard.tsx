import { formatPrice, tagLabels, type Product } from "@/data/menu";
import { SafeImage } from "./SafeImage";

export function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="flex w-full gap-3 rounded-2xl bg-surface p-3 text-left ring-1 ring-line transition active:scale-[0.98]"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-surface-2 px-1.5 py-0.5 font-mono text-[11px] text-muted">
            Nº {product.code}
          </span>
          {product.tags?.[0] && (
            <span
              className={`rounded-md px-1.5 py-0.5 text-[11px] font-medium ${tagLabels[product.tags[0]].className}`}
            >
              {tagLabels[product.tags[0]].label}
            </span>
          )}
        </div>
        <h3 className="mt-1.5 font-semibold leading-tight">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted">{product.description}</p>
        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="font-semibold text-brand">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
      </div>
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>
    </button>
  );
}
