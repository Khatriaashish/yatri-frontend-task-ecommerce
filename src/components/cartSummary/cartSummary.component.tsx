import Image from "next/image";
import { FC } from "react";

interface CartItems extends Api.IProduct {
  quantity: number;
}

export const CartSummary: FC<{ items: CartItems[] }> = ({ items }) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Order Summary
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-4"
          >
            <div className="relative w-20 h-20 mr-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                ${item.price.toFixed(2)} × {item.quantity}
              </p>
            </div>
            <div className="font-bold text-gray-800 dark:text-gray-200">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-6 text-lg font-bold text-gray-800 dark:text-gray-200">
        Total: <span className="text-yellow-600">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};
