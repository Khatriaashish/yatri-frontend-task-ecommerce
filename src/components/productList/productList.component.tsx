"use client";

import { useSelector } from "@/store/hooks.store";
import { FC } from "react";
import { Product, ProductSkeleton } from "../";
import { FiAlertCircle } from "react-icons/fi";

export const ProductList: FC<{ products: Api.IProduct[] }> = ({ products }) => {
  const { productsLoading, productsError } = useSelector(
    (state) => state.product
  );
  const skeletons = Array.from({ length: 6 }, (_, i) => (
    <ProductSkeleton key={i} />
  ));

  const errorMessage = (
    <div className=" error col-span-full flex items-center justify-center gap-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg shadow-md mt-4">
      <FiAlertCircle className="w-6 h-6" />
      <span className="text-center font-medium">{productsError}</span>
    </div>
  );
  return (
    <>
      <div className="container mx-auto p-4 w-screen mx-w-[375px] md:mx-w-auto md:w-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {productsLoading
            ? skeletons
            : productsError
            ? errorMessage
            : products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </div>
      </div>
    </>
  );
};
