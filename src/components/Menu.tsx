"use client";

import { Instagram, Search, Wifi, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { categories, restaurant, type Product } from "@/data/menu";
import { BottomSheet } from "./BottomSheet";
import { CategoryNav } from "./CategoryNav";
import { Hero } from "./Hero";
import { ProductCard } from "./ProductCard";
import { ProductDetails } from "./ProductDetails";

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function Menu() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(categories[0].id);
  const [selected, setSelected] = useState<Product | null>(null);
  const [wifiOpen, setWifiOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return categories;
    return categories
      .map((c) => ({
        ...c,
        products: c.products.filter(
          (p) =>
            normalize(`${p.name} ${p.description} ${p.ingredients?.join(" ") ?? ""}`).includes(q) ||
            String(p.code) === q,
        ),
      }))
      .filter((c) => c.products.length > 0);
  }, [query]);

  // Destaca a categoria que está visível na tela
  useEffect(() => {
    const onScroll = () => {
      const offset = (document.getElementById("menu-sticky")?.offsetHeight ?? 0) + 24;
      const sections = document.querySelectorAll<HTMLElement>("section[data-category]");
      let current = sections[0]?.dataset.category;
      sections.forEach((s) => {
        if (s.getBoundingClientRect().top <= offset) current = s.dataset.category;
      });
      // No fim da página a última seção pode não alcançar o topo
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom && sections.length) current = sections[sections.length - 1].dataset.category;
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [filtered]);

  const goTo = (id: string) => {
    setActive(id);
    const section = document.getElementById(`cat-${id}`);
    const header = document.getElementById("menu-sticky");
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight ?? 0) - 12;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const closeProduct = useCallback(() => setSelected(null), []);
  const closeWifi = useCallback(() => setWifiOpen(false), []);

  return (
    <div className="mx-auto min-h-dvh max-w-md bg-ink">
      <Hero onWifiClick={() => setWifiOpen(true)} />

      <div id="menu-sticky" className="sticky top-0 z-30 mt-5 border-b border-line/60 bg-ink/90 backdrop-blur-md">
        <div className="px-4 pt-3">
          <label className="flex items-center gap-2 rounded-xl bg-surface-2 px-3 py-2.5 ring-1 ring-line focus-within:ring-brand">
            <Search size={18} className="text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar no cardápio..."
              className="w-full bg-transparent text-[16px] outline-none placeholder:text-muted"
              type="text"
              enterKeyHint="search"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Limpar busca" className="text-muted">
                <X size={18} />
              </button>
            )}
          </label>
        </div>
        <CategoryNav categories={filtered} active={active} onSelect={goTo} />
      </div>

      <main className="space-y-8 px-4 pt-5 pb-10">
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-4xl">🤔</p>
            <p className="mt-3 font-medium">Nada encontrado para “{query}”</p>
            <p className="mt-1 text-sm text-muted">Tente outro termo ou peça ajuda ao garçom.</p>
          </div>
        )}

        {filtered.map((category) => (
          <section key={category.id} id={`cat-${category.id}`} data-category={category.id}>
            <h2 className="mb-3 font-display text-3xl tracking-wide">
              {category.emoji} {category.name}
            </h2>
            <div className="space-y-3">
              {category.products.map((p) => (
                <ProductCard key={p.id} product={p} onOpen={() => setSelected(p)} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-line px-4 py-8 text-center text-sm text-muted">
        <p className="mx-auto max-w-xs">
          Escolheu? Chame o garçom e informe o <span className="font-semibold text-brand">número</span> do item. 🙋
        </p>
        <p className="mt-4 inline-flex items-center gap-1.5">
          <Instagram size={16} /> {restaurant.instagram}
        </p>
        <p className="mt-4 text-xs opacity-60">Preços sujeitos a alteração · Imagens ilustrativas</p>
      </footer>

      <BottomSheet open={!!selected} onClose={closeProduct} label={selected?.name ?? "Produto"}>
        {selected && <ProductDetails product={selected} />}
      </BottomSheet>

      <BottomSheet open={wifiOpen} onClose={closeWifi} label="Wi-Fi">
        <div className="px-5 pt-4 pb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
            <Wifi />
          </div>
          <h2 className="mt-4 font-display text-3xl tracking-wide">Wi-Fi para clientes</h2>
          <dl className="mt-4 space-y-3">
            <div className="rounded-xl bg-surface-2 p-3">
              <dt className="text-xs text-muted">Rede</dt>
              <dd className="font-mono">{restaurant.wifi.network}</dd>
            </div>
            <div className="rounded-xl bg-surface-2 p-3">
              <dt className="text-xs text-muted">Senha</dt>
              <dd className="font-mono">{restaurant.wifi.password}</dd>
            </div>
          </dl>
        </div>
      </BottomSheet>
    </div>
  );
}
