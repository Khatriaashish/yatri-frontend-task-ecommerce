"use client";

import { CartList } from "@/components/cartList/cartList.component";
import { useSelector } from "@/store/hooks.store";
import { MdRemoveShoppingCart } from "react-icons/md";

export default function CartPage() {
  const { cartProducts } = useSelector((state) => state.cart);
  return (
    <div className="cartPage flex flex-col items-center gap-4 p-2 md:p-12 ">
      <h1 className="heading text-3xl font-bold mb-4 group w-fit text-5xl flex flex-col items-center gap-2 cursor-pointer">
        Your Cart
        <div className="w-[100px] h-[5px] bg-white rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></div>
      </h1>

      {cartProducts.length === 0 ? (
        <div className="flex flex-col items-center gap-2 text-gray-500 p-10">
          <span className="mb-2 text-gray-400">
            <MdRemoveShoppingCart size={64} />
          </span>
          <p className="text-lg">Your cart is empty</p>
          <span className="text-sm">Add something from the product page!</span>
        </div>
      ) : (
        <CartList items={cartProducts} />
      )}
    </div>
  );
}
