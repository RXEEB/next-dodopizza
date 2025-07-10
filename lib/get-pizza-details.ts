import { Ingredient, ProductItem } from "@prisma/client";
import { calctotalPizzaPrice } from "./calc-total-pizza-price";
import {
  mapPizzaSize,
  mapPizzaType,
  PizzaSize,
  PizzaType,
} from "@/constants/pizza";

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calctotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const textDetaills = `${mapPizzaSize[size]} ${size} см, ${mapPizzaType[type]} пицца  `;

  return { totalPrice, textDetaills };
};
