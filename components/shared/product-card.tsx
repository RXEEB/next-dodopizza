import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Plus } from "lucide-react";
import { Button } from "../ui";
import { cn } from "@/lib/utils";
import { Ingredient } from "@prisma/client";

interface Props {
  id: number;
  name: string;
  price: number;
  count?: number;
  ingredients: Ingredient[];
  imageUrl?: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  count,
  imageUrl,
  ingredients,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6  rounded-lg h-[260px]  ">
          <img
            className="w-[215px] h-215px relative transition hover:transform hover:translate-y-1"
            src={imageUrl}
            alt="card-image"
          />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold " />
        <p className="text-sm text-gray-400 flex-grow">
          {ingredients.map((ingredient) => ingredient.name).join(", ")}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>
          <Button variant="secondary">
            <Plus size={20} className=" mr-1" />
            Добавить
          </Button>
          {/* {count ? (
            <CountButton value={count} size="lg" />
          ) : (
 
          )} */}
        </div>
      </Link>
    </div>
  );
};
