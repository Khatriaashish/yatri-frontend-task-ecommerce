"use client";

import { useDispatch } from "@/store/hooks.store";
import { addProduct } from "@/store/redux/cart/cart.slice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import toast from "react-hot-toast";
import { AiOutlineShopping } from "react-icons/ai";

export const Product: FC<Comp.IProductComponent> = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleProductClick = () => {
    router.push(`/product/${product.id}`);
  };
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addProduct({ ...product, quantity: 1 }));
    toast.success("Product added to cart. Checkout the cart page.");
  };
  return (
    <div
      className="eachProduct bg-black/20 backdrop-blur-2xl rounded-lg shadow-xl hover:scale-110 cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-500 pt-4 md:max-w-[260px]"
      style={{
        background:
          "radial-gradient(circle at top right, #1e293b 0%, #000000 60%, #000 100%)",
      }}
      onClick={handleProductClick}
    >
      <button
        onClick={handleAddToCart}
        className="addToCart-btn absolute top-2 right-2 z-10 bg-yellow-600 text-black p-2 rounded-full transition-colors duration-300 hover:bg-yellow-800 hover:cursor-pointer hover:text-white"
      >
        <AiOutlineShopping size={30} />
      </button>
      <div className="w-full relative aspect-[2/1] ">
        <Image
          src={product.image}
          alt={product.title || "Product image"}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
      <div className="p-4">
        <h3
          className="text-lg font-semibold text-ellipsis overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            whiteSpace: "normal",
          }}
        >
          {product?.title}
        </h3>
        <p
          className="description text-gray-600 text-ellipsis overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            whiteSpace: "normal",
          }}
        >
          {product.description}
        </p>
        <p className="price text-shadow-amber-500 text-xl text-yellow-600 text-right">
          {"$" + product.price}
        </p>
      </div>
    </div>
  );
};
