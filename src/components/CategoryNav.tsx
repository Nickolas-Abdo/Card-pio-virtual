"use client";

import { useEffect, useRef } from "react";
import type { Category } from "@/data/menu";

interface Props {
  categories: Category[];
  active: string;
  onSelect: (id: string) => void;
}

export function CategoryNav({ categories, active, onSelect }: Props) {
  const navRef = useRef<HTMLDivElement>(null);

  // Mantém a categoria ativa visível na barra horizontal
  useEffect(() => {
    const nav = navRef.current;
    const chip = nav?.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    if (!nav || !chip) return;
    // Rola só a barra (scrollIntoView também moveria a página e cancelaria a rolagem dela)
    nav.scrollTo({
      left: chip.offsetLeft - nav.clientWidth / 2 + chip.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div
      ref={navRef}
      className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-3"
      role="tablist"
      aria-label="Categorias"
    >
      {categories.map((c) => {
        const isActive = c.id === active;
        return (
          <button
            key={c.id}
            data-chip={c.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(c.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive ? "bg-brand text-ink" : "bg-surface-2 text-muted active:bg-line"
            }`}
          >
            <span className="mr-1">{c.emoji}</span>
            {c.name}
          </button>
        );
      })}
    </div>
  );
}
