import { FC } from "react";
import { QuantitySelector } from "../quantitySelector/quantitySelector.component";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "@/store/hooks.store";
import {
  removeProduct,
  updateQuantityById,
} from "@/store/redux/cart/cart.slice";

interface CartItems extends Api.IProduct {
  quantity: number;
}

interface CartItemProps {
  item: CartItems;
}
export const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const handleDeleteItem = (id: number) => {
    dispatch(removeProduct(id));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    dispatch(updateQuantityById({ id, quantity: newQuantity }));
  };
  return (
    <div
      key={item.id}
      className="flex flex-col sm:flex-row items-center mb-4 border border-gray-700 p-3 rounded-lg shadow-md bg-gray-900"
    >
      <div className="w-full sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
        <div className="relative w-full h-40 sm:w-20 sm:h-20">
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
            sizes="(max-width: 640px) 100vw, 80px"
          />
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className="font-semibold text-lg mb-1 text-gray-100">
          {item.title}
        </div>
        <div className="text-gray-400 mb-2">${item.price}</div>
        <QuantitySelector
          quantity={item.quantity}
          handleQuantityChange={(qty) => handleQuantityChange(item.id, qty)}
        />
      </div>
      <button
        onClick={() => handleDeleteItem(item.id)}
        className="w-full sm:w-auto mt-3 sm:mt-0 self-start sm:ml-4 cursor-pointer px-3 bg-gradient-to-r  text-white rounded transition shadow flex items-center justify-center gap-2"
      >
        <MdDelete
          size={25}
          className="inline-block hover:opacity-50"
          color="red"
        />
      </button>
    </div>
  );
};
