"use client";

import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "@/store/hooks.store";
import { OrderSuccess } from "@/components/orderSuccess/orderSuccess.component";
import { OrderForm } from "@/components";
import { CartSummary } from "@/components/cartSummary/cartSummary.component";
import toast from "react-hot-toast";
import { MdRemoveShoppingCart } from "react-icons/md";
import { clearCart } from "@/store/redux/cart/cart.slice";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { cartProducts } = useSelector((state) => state.cart);

  const handlePlaceOrder = () => {
    if (cartProducts?.length === 0) {
      toast.error("Please add products to cart first");
      return;
    }

    setOrderPlaced(true);
    dispatch(clearCart());
  };

  if (orderPlaced) {
    return <OrderSuccess />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 flex flex-col items-center gap-8">
      <h1 className="heading text-3xl font-bold mb-4 group w-fit text-5xl flex flex-col items-center gap-2 cursor-pointer">
        Checkout
        <div className="w-[100px] h-[5px] bg-white rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></div>
      </h1>
      {cartProducts?.length === 0 ? (
        <div className="flex flex-col items-center gap-2 text-gray-500 p-10">
          <span className="mb-2 text-gray-400">
            <MdRemoveShoppingCart size={64} />
          </span>
          <p className="text-lg">Your cart is empty</p>
          <span className="text-sm">Add something from the product page!</span>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side: Cart Summary */}
          <CartSummary items={cartProducts} />

          {/* Right side: Checkout Form */}
          <OrderForm checkoutHandler={handlePlaceOrder} />
        </div>
      )}
    </div>
  );
}
