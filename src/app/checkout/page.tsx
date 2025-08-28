"use client";

import { useState } from "react";
import Image from "next/image";
import { useSelector } from "@/store/hooks.store";
import { OrderSuccess } from "@/components/orderSuccess/orderSuccess.component";
import { OrderForm } from "@/components";
import { CartSummary } from "@/components/cartSummary/cartSummary.component";

export default function CheckoutPage() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { cartProducts } = useSelector((state) => state.cart);

  const handlePlaceOrder = () => {
    // could trigger API call here
    setOrderPlaced(true);
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side: Cart Summary */}
        <CartSummary items={cartProducts} />

        {/* Right side: Checkout Form */}
        <OrderForm checkoutHandler={handlePlaceOrder} />
      </div>
    </div>
  );
}
