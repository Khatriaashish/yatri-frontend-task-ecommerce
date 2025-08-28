export const ProductSkeleton = () => {
  return (
    <div className="relative bg-black/20 backdrop-blur-2xl rounded-lg shadow-xl animate-pulse w-full overflow-hidden min-w-[200px]">
      {/* Image Skeleton */}
      <div
        className="w-full bg-gray-700 rounded-md"
        style={{
          height: "200px", // default mobile height
        }}
      ></div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <div className="h-6 bg-gray-600 rounded w-3/4"></div>
        {/* Description */}
        <div className="h-4 bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-600 rounded w-5/6"></div>
        {/* Price */}
        <div className="h-6 bg-yellow-600 rounded w-1/3 ml-auto mt-2"></div>
      </div>

      {/* Add to Cart Button Skeleton */}
      <div className="absolute top-2 right-2 w-10 h-10 bg-gray-600 rounded-full"></div>
    </div>
  );
};
