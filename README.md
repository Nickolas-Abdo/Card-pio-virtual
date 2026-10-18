# Cardápio Virtual — Brasa Burger (demonstração)

Cardápio digital mobile-first para hamburgueria. O cliente visualiza os produtos e pede ao garçom informando o **número do item**.

## Tecnologias
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion (painéis deslizantes)
- Lucide (ícones)

## Rodando
```bash
npm install
npm run dev
```
Acesse http://localhost:3000. Para testar no celular na mesma rede Wi-Fi, use `npm run dev -- -H 0.0.0.0` e abra `http://IP-DO-PC:3000`.

## Editando o cardápio
Tudo fica em `src/data/menu.ts`: nome da casa, horário, Wi-Fi, categorias, produtos, preços, fotos e selos.
