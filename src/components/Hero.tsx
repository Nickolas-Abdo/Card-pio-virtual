import { Clock, Wifi } from "lucide-react";
import { restaurant } from "@/data/menu";
import { SafeImage } from "./SafeImage";

export function Hero({ onWifiClick }: { onWifiClick: () => void }) {
  return (
    <header className="relative">
      <div className="relative h-56 w-full overflow-hidden">
        <SafeImage
          src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1200&q=70"
          alt="Hambúrguer na brasa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-ink" />
      </div>

      <div className="relative -mt-20 px-4">
        <div className="flex items-end gap-4">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand font-display text-4xl text-ink shadow-xl shadow-brand/30 ring-4 ring-ink">
            BB
          </div>
          <div className="pb-1">
            <h1 className="font-display text-4xl leading-none tracking-wide">{restaurant.name}</h1>
            <p className="mt-1 text-sm text-muted">{restaurant.slogan}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1.5 text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Aberto agora
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1.5 text-muted">
            <Clock size={14} /> {restaurant.hours}
          </span>
          <button
            onClick={onWifiClick}
            className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1.5 text-muted active:scale-95"
          >
            <Wifi size={14} /> Wi-Fi
          </button>
        </div>
      </div>
    </header>
  );
}
