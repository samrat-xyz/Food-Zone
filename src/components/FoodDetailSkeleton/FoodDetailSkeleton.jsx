function FoodDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 animate-pulse">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-6">
        
        {/* Image Skeleton */}
        <div className="w-full h-72 md:h-full bg-gray-300" />

        {/* Content Skeleton */}
        <div className="p-6 space-y-4">
          <div className="w-24 h-6 bg-gray-300 rounded-full" />
          <div className="w-3/4 h-8 bg-gray-300 rounded" />
          <div className="w-1/2 h-5 bg-gray-300 rounded" />
          <div className="w-32 h-7 bg-gray-300 rounded" />

          <div className="flex gap-4 mt-6">
            <div className="w-32 h-10 bg-gray-300 rounded-xl" />
            <div className="w-32 h-10 bg-gray-300 rounded-xl" />
          </div>
        </div>

      </div>
    </div>
  );
}
export default FoodDetailSkeleton