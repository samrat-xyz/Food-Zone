import Link from "next/link";
import CartBtn from "../Buttons/CartBtn";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img
        src={foodImg}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />
      <div className="mt-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">Category: {category}</p>
        <p className="font-bold mt-1">৳ {price}</p>

        <div className="flex gap-2 mt-3">
          <Link
            href={`/foods/${id}`}
            className="inline-block text-sm bg-sky-600 text-white px-4 py-2 rounded"
          >
            View Details
          </Link>

          <CartBtn food={food}></CartBtn>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
