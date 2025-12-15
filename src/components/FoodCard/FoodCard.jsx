// FoodCard.jsx
import Link from "next/link";
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

        <Link
          href={`/foods/${id}`}
          className="inline-block mt-3 text-sm bg-sky-600 text-white px-4 py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
