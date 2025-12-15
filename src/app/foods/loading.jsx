import FoodCardSkeleton from "@/components/FoodCardSkeleton/FoodCardSkeleton";
import React from "react";

function loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-4">
      {[...Array(12)].map((_, index) => (
        <FoodCardSkeleton key={index}></FoodCardSkeleton>
      ))}
    </div>
  );
}

export default loading;
