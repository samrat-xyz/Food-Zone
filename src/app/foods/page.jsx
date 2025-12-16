import CartItems from "@/components/CartItems/CartItems";
import FoodCard from "@/components/FoodCard/FoodCard";
import SearchInput from "@/components/SearchInput/SearchInput";
import React from "react";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
  );
  const data = await res.json();
  return data.foods || [];
};

async function Foods({ searchParams }) {
  const { search="" } = await searchParams;
  const foods = await getFoods(search);

  return (
    <div className="">
      <div className="flex items-center justify-between my-8 container mx-auto px-8 flex-wrap gap-2">
        <h2 className="text-4xl font-semibold">
          Total {foods.length} Food Found
        </h2>
        <div className="">
          <SearchInput></SearchInput>
        </div>
      </div>

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
