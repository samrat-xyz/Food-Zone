import CartItems from "@/components/CartItems/CartItems";
import FoodCard from "@/components/FoodCard/FoodCard";
import Title from "@/components/Title/Title";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  return data.foods || [];
};

async function Foods() {
  const foods = await getFoods();

  return (
    <div>
      <Title>Total {foods.length} Food Found</Title>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-4 p-3 container mx-auto">
        
        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {foods.map((food) => (
            <FoodCard food={food} key={food.id} />
          ))}
        </div>

        {/* Cart Sidebar */}
        <div className="w-full lg:w-[280px] border rounded-lg p-4 h-fit sticky top-4">
          <h2 className="text-lg font-semibold mb-2">Cart Items</h2>
          <hr className="mb-3" />
          <CartItems />
        </div>

      </div>
    </div>
  );
}

export default Foods;
