export const categories = [
  { name: "Пиццы" },
  { name: "Комбо" },
  { name: "Закуски" },
  { name: "Коктейли" },
  { name: "Кофе" },
  { name: "Напитки" },
  { name: "Десерты" },
];

export const ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl: "/pizzas/ingredients/2-1.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl: "/pizzas/ingredients/2-2.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl: "/pizzas/ingredients/2-3.png",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl: "/pizzas/ingredients/2-4.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl: "/pizzas/ingredients/2-5.png",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl: "/pizzas/ingredients/2-6.png",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl: "/pizzas/ingredients/2-7.png",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl: "/pizzas/ingredients/2-8.png",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl: "/pizzas/ingredients/2-9.png",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl: "/pizzas/ingredients/2-10.png",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl: "/pizzas/ingredients/2-11.png",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl: "/pizzas/ingredients/2-12.png",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl: "/pizzas/ingredients/2-13.png",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl: "/pizzas/ingredients/2-14.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl: "/pizzas/ingredients/2-15.png",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl: "/pizzas/ingredients/2-16.png",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl: "/pizzas/ingredients/2-17.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl: "/pizzas/products/3-1.webp",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    imageUrl: "/pizzas/products/3-2.webp",
    categoryId: 2,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/pizzas/products/3-3.webp",
    categoryId: 2,
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl: "/pizzas/products/3-4.webp",
    categoryId: 3,
  },
  {
    name: "Куриные наггетсы",
    imageUrl: "/pizzas/products/3-5.webp",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом 🌱",
    imageUrl: "/pizzas/products/3-6.webp",
    categoryId: 3,
  },
  {
    name: "Додстер",
    imageUrl: "/pizzas/products/3-7.webp",
    categoryId: 3,
  },
  {
    name: "Острый Додстер 🌶️🌶️",
    imageUrl: "/pizzas/products/3-8.webp",
    categoryId: 3,
  },
  {
    name: "Банановый молочный коктейль",
    imageUrl: "/pizzas/products/3-9.webp",
    categoryId: 4,
  },
  {
    name: "Карамельное яблоко молочный коктейль",
    imageUrl: "/pizzas/products/3-10.webp",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl: "/pizzas/products/3-11.webp",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль 👶",
    imageUrl: "/pizzas/products/3-12.webp",
    categoryId: 4,
  },
  {
    name: "Ирландский Капучино",
    imageUrl: "/pizzas/products/3-13.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl: "/pizzas/products/3-14.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl: "/pizzas/products/3-15.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl: "/pizzas/products/3-16.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/pizzas/products/3-17.webp",
    categoryId: 5,
  },
];
