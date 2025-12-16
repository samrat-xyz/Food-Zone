import Image from "next/image";
import { Star, ThumbsUp } from "lucide-react";

function ReviewCard({ review }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="p-6 md:p-8">
          {/* Header: User info + Rating */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src={review.photo || "/avatar.png"}
                  alt={review.user || "User"}
                  width={64}
                  height={64}
                  className="rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {review.user}
                </h3>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-lg font-medium text-gray-700">
                {review.rating}.0
              </span>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-800 leading-relaxed text-base md:text-lg">
            {review.review.slice(0, 120)}
            {review.review.length > 120 && "..."}
          </p>

          {/* Footer: Likes */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ThumbsUp className="w-5 h-5" />
                <span className="text-sm font-medium">Helpful</span>
              </button>
              <span className="text-sm text-gray-500">
                {review.likes.length}{" "}
                {review.likes.length === 1 ? "person" : "people"} found this
                helpful
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReviewCard;
