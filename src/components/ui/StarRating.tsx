
"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  starClassName?: string;
}

export const StarRating = ({
  rating,
  maxRating = 5,
  className,
  starClassName
}: StarRatingProps) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-5 w-5",
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30",
            starClassName
          )}
        />
      ))}
    </div>
  );
};
