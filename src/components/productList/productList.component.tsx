"use client";

import { useDispatch, useSelector } from "@/store/hooks.store";
import { getProdcutsAction } from "@/store/redux/product/product.slice";
import { useEffect } from "react";
import { Product } from "../";

export const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProdcutsAction());
  }, []);

  return (
    <>
      <div className="container mx-auto p-4 w-screen mx-w-[375px] md:mx-w-auto md:w-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
