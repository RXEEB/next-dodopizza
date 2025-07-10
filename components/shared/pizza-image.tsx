import { cn } from "@/lib/utils";
import React from "react";

type SizeClasses = Record<20 | 30 | 40, string>;

interface Props {
  imageUrl: string;
  size: 20 | 30 | 40;
  className?: string;
}

export const PizzaImage: React.FC<Props> = ({ imageUrl, size, className }) => {
  const SIZE_CLASSES: SizeClasses = {
    20: "w-[300px] h-[300px]",
    30: "w-[400px] h-[400px]",
    40: "w-[500px] h-[500px]",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center flex-1 relative w-full ",
        className
      )}
    >
      <img
        src={imageUrl}
        alt="img"
        className={cn(
          "relative left-2 top-2 transition-all z-10 duration-300",
          SIZE_CLASSES[size]
        )}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]" />
    </div>
  );
};
