import { FC } from "react";
import { CartItem } from "../cartItem/cartItem.component";
import { FiTrash2 } from "react-icons/fi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useDispatch } from "@/store/hooks.store";
import { clearCart } from "@/store/redux/cart/cart.slice";
import { useRouter } from "next/navigation";

interface CartItems extends Api.IProduct {
  quantity: number;
}

interface CartListProps {
  items: CartItems[];
}
export const CartList: FC<CartListProps> = ({ items }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleProceed = () => {
    router.push("/checkout");
  };
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      {/* Cart List */}
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Total Price */}
      <div className="total-price text-right mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Total: <span className="text-yellow-600">${totalPrice.toFixed(2)}</span>
      </div>

      {/* Action Buttons */}
      <div className="actions flex gap-2">
        <button
          onClick={handleProceed}
          className="mt-6 bg-slate-500 hover:bg-slate-600 dark:bg-slate-700 dark:hover:bg-slate-800 cursor-pointer text-white py-2 px-4 rounded transition-colors duration-200 w-full font-semibold flex items-center justify-center gap-2"
        >
          <span>Proceed</span>
          <FaRegArrowAltCircleRight className="w-5 h-5" />
        </button>
        <button
          onClick={handleClearCart}
          className="mt-6 bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 text-white cursor-pointer py-2 px-4 rounded transition-colors duration-200 w-full font-semibold flex items-center justify-center gap-2"
        >
          <span>Clear Cart</span>
          <FiTrash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
