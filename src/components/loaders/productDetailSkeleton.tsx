export const ProductDetailSkeleton = () => {
  return (
    <div className="productDetail grid grid-cols-1 md:grid-cols-5 p-4 md:p-10 gap-6 md:gap-8 items-stretch animate-pulse">
      {/* Image Skeleton */}
      <div className="image md:col-span-2 w-full h-80 md:h-[400px] bg-gray-700 rounded-lg min-w-[300px]"></div>

      {/* Details Skeleton */}
      <div className="details md:col-span-3 flex flex-col justify-center space-y-4 mt-6 md:mt-0">
        {/* Title */}
        <div className="h-10 bg-gray-600 rounded w-3/4"></div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-24 bg-gray-500 rounded-full"></div>
          <div className="h-6 w-20 bg-gray-500 rounded-full"></div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-500 rounded w-full"></div>
          <div className="h-4 bg-gray-500 rounded w-5/6"></div>
          <div className="h-4 bg-gray-500 rounded w-4/6"></div>
        </div>

        {/* Price */}
        <div className="h-8 w-1/4 bg-yellow-600 rounded mt-2"></div>

        {/* Quantity Selector */}
        <div className="h-10 w-32 bg-gray-600 rounded mt-2"></div>

        {/* Add to Cart Button */}
        <div className="h-12 w-40 bg-slate-600 rounded mt-4"></div>
      </div>
    </div>
  );
};
