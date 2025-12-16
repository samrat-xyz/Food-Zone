function ReviewCardSkeleton() {
  return (
    <div className=" my-8 ">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 md:p-8 animate-pulse">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gray-200" />

              {/* User name */}
              <div className="space-y-2">
                <div className="h-5 w-32 bg-gray-200 rounded" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded bg-gray-200"
                />
              ))}
              <div className="ml-2 h-5 w-10 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Review text */}
          <div className="space-y-3 mb-6">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-4 w-40 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCardSkeleton;
