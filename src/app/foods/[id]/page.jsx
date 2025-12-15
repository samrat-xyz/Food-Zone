import React, { Suspense } from "react";

const getFoodDetails = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();
  return data.details;
};

async function FoodDetailContent({ params }) {
  const { id } = await params;
  const food = await getFoodDetails(id);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-6">
        <div>
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full mb-3">
              {food.category}
            </span>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {food.title}
            </h1>

            <p className="text-gray-500 mb-4">
              Origin: <span className="font-medium">{food.area}</span>
            </p>

            <p className="text-2xl font-semibold text-green-600 mb-6">
              ৳ {food.price}
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href={food.video}
              target="_blank"
              className="px-5 py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
            >
              Watch Recipe
            </a>

            <button className="px-5 py-2 rounded-xl border border-gray-300 font-medium hover:bg-gray-100 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetailContent