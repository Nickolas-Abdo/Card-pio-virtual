export type Tag = "novo" | "popular" | "picante" | "vegetariano" | "chef";

export interface Product {
  id: string;
  code: number;
  name: string;
  description: string;
  ingredients?: string[];
  price: number;
  oldPrice?: number;
  image: string;
  tags?: Tag[];
  serves?: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  products: Product[];
}

export const restaurant = {
  name: "Brasa Burger",
  slogan: "Hambúrguer artesanal na brasa",
  hours: "Ter a Dom · 18h às 23h30",
  wifi: { network: "BrasaBurger_Clientes", password: "brasa2026" },
  instagram: "@brasaburger",
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=75`;

export const categories: Category[] = [
  {
    id: "destaques",
    name: "Destaques",
    emoji: "🔥",
    products: [
      {
        id: "brasa-supreme",
        code: 1,
        name: "Brasa Supreme",
        description:
          "Dois smashs de 90g, cheddar inglês duplo, bacon crocante, cebola caramelizada e molho da casa no pão brioche.",
        ingredients: ["Pão brioche", "2x blend 90g", "Cheddar inglês", "Bacon", "Cebola caramelizada", "Molho Brasa"],
        price: 42.9,
        image: img("photo-1568901346375-23c9450c58cd"),
        tags: ["chef", "popular"],
      },
      {
        id: "combo-casal",
        code: 2,
        name: "Combo Casal",
        description: "2 burgers clássicos, 1 batata rústica grande e 2 refrigerantes lata.",
        price: 89.9,
        oldPrice: 104.6,
        image: img("photo-1550547660-d9450f859349"),
        tags: ["popular"],
        serves: "Serve 2 pessoas",
      },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    emoji: "🍔",
    products: [
      {
        id: "classico",
        code: 10,
        name: "Clássico",
        description: "Blend bovino 160g, queijo prato, alface, tomate, picles e maionese verde.",
        ingredients: ["Pão australiano", "Blend 160g", "Queijo prato", "Alface", "Tomate", "Picles", "Maionese verde"],
        price: 32.9,
        image: img("photo-1571091718767-18b5b1457add"),
      },
      {
        id: "bacon-lovers",
        code: 11,
        name: "Bacon Lovers",
        description: "Blend 160g, muito bacon, cheddar cremoso e geleia de bacon no pão brioche.",
        ingredients: ["Pão brioche", "Blend 160g", "Bacon em tiras", "Cheddar cremoso", "Geleia de bacon"],
        price: 38.9,
        image: img("photo-1553979459-d2229ba7433b"),
        tags: ["popular"],
      },
      {
        id: "chipotle",
        code: 12,
        name: "Chipotle Fire",
        description: "Blend 160g, pepper jack, jalapeños, onion rings e maionese de chipotle.",
        ingredients: ["Pão brioche", "Blend 160g", "Pepper jack", "Jalapeños", "Onion rings", "Maionese chipotle"],
        price: 39.9,
        image: img("photo-1594212699903-ec8a3eca50f5"),
        tags: ["picante", "novo"],
      },
      {
        id: "truffle",
        code: 13,
        name: "Trufado",
        description: "Blend de costela 180g, queijo brie, rúcula e maionese trufada.",
        ingredients: ["Pão de fermentação natural", "Blend costela 180g", "Brie", "Rúcula", "Maionese trufada"],
        price: 46.9,
        image: img("photo-1586190848861-99aa4a171e90"),
        tags: ["chef"],
      },
      {
        id: "veggie",
        code: 14,
        name: "Veggie da Horta",
        description: "Burger de grão-de-bico e cogumelos, queijo coalho, tomate confit e pesto.",
        ingredients: ["Pão integral", "Burger de grão-de-bico", "Queijo coalho", "Tomate confit", "Pesto"],
        price: 34.9,
        image: img("photo-1520072959219-c595dc870360"),
        tags: ["vegetariano"],
      },
    ],
  },
  {
    id: "porcoes",
    name: "Porções",
    emoji: "🍟",
    products: [
      {
        id: "batata-rustica",
        code: 20,
        name: "Batata Rústica",
        description: "Batatas com casca, alecrim e flor de sal. Acompanha maionese da casa.",
        price: 22.9,
        image: img("photo-1573080496219-bb080dd4f877"),
        serves: "Serve 2 pessoas",
        tags: ["vegetariano"],
      },
      {
        id: "batata-cheddar",
        code: 21,
        name: "Batata Cheddar & Bacon",
        description: "Batata frita coberta com cheddar cremoso e farofa de bacon.",
        price: 29.9,
        image: img("photo-1585109649139-366815a0d713"),
        serves: "Serve 2 pessoas",
        tags: ["popular"],
      },
      {
        id: "onion-rings",
        code: 22,
        name: "Onion Rings",
        description: "Anéis de cebola empanados na cerveja com molho barbecue.",
        price: 24.9,
        image: img("photo-1639024471283-03518883512d"),
        tags: ["vegetariano"],
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    emoji: "🥤",
    products: [
      {
        id: "refri",
        code: 30,
        name: "Refrigerante Lata",
        description: "Coca-Cola, Coca Zero, Guaraná ou Sprite. 350ml.",
        price: 7.9,
        image: img("photo-1554866585-cd94860890b7"),
      },
      {
        id: "suco",
        code: 31,
        name: "Suco Natural",
        description: "Laranja, limão, maracujá ou abacaxi com hortelã. 500ml.",
        price: 12.9,
        image: img("photo-1600271886742-f049cd451bba"),
      },
      {
        id: "chopp",
        code: 32,
        name: "Chopp Pilsen",
        description: "Chopp gelado na caneca congelada. 400ml. Proibido para menores de 18.",
        price: 14.9,
        image: img("photo-1608270586620-248524c67de9"),
      },
    ],
  },
  {
    id: "sobremesas",
    name: "Sobremesas",
    emoji: "🍦",
    products: [
      {
        id: "milkshake",
        code: 40,
        name: "Milkshake",
        description: "Chocolate belga, morango ou Ovomaltine. 400ml com chantilly.",
        price: 21.9,
        image: img("photo-1572490122747-3968b75cc699"),
        tags: ["popular"],
      },
      {
        id: "brownie",
        code: 41,
        name: "Brownie com Sorvete",
        description: "Brownie quentinho, sorvete de creme e calda de chocolate.",
        price: 19.9,
        image: img("photo-1606313564200-e75d5e30476c"),
      },
    ],
  },
];

export const tagLabels: Record<Tag, { label: string; className: string }> = {
  novo: { label: "Novo", className: "bg-emerald-500/15 text-emerald-400" },
  popular: { label: "Mais pedido", className: "bg-amber-500/15 text-amber-400" },
  picante: { label: "Picante", className: "bg-red-500/15 text-red-400" },
  vegetariano: { label: "Vegetariano", className: "bg-lime-500/15 text-lime-400" },
  chef: { label: "Escolha do chef", className: "bg-orange-500/15 text-orange-400" },
};

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
