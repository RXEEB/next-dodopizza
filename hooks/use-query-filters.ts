import React from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    };
    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });
    router.push(`?${query}`, { scroll: false });
  }, []);
};

// export const useQueryFilters = (filters: Filters) => {
//   const router = useRouter();
//   const prevQueryRef = React.useRef("");

//   React.useEffect(() => {
//     const params = {
//       ...filters.prices,
//       pizzaTypes: Array.from(filters.pizzaTypes),
//       sizes: Array.from(filters.sizes),
//       ingredients: Array.from(filters.selectedIngredients),
//     };
//     const query = qs.stringify(params, { arrayFormat: "comma" });

//     if (prevQueryRef.current !== query) {
//       router.push(`?${query}`, { scroll: false });
//       prevQueryRef.current = query;
//     }
//   }, [
//     filters.prices.minPrice,
//     filters.prices.maxPrice,
//     filters.pizzaTypes.size,
//     filters.sizes.size,
//     filters.selectedIngredients.size,
//   ]);
// };
