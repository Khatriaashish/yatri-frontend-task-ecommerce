import { FC } from "react";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
  handleQuantityChange?: (newQuantity: number) => void;
}
export const QuantitySelector: FC<QuantitySelectorProps> = ({
  quantity,
  setQuantity,
  handleQuantityChange,
}) => {
  return (
    <div className="quantity-selector flex items-center gap-4 mt-6">
      <span className="font-medium text-lg">Quantity:</span>
      <button
        className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full  hover:bg-gray-900 text-xl font-bold transition"
        onClick={() => {
          if (handleQuantityChange) {
            handleQuantityChange(Math.max(1, quantity - 1));
          } else setQuantity?.((prev) => Math.max(1, prev - 1));
        }}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
        type="button"
      >
        -
      </button>
      <div
        className="px-4 py-2 rounded border text-lg font-semibold min-w-[4rem] text-center"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          const value = parseInt(e.currentTarget.textContent || "1", 10);
          if (handleQuantityChange) {
            handleQuantityChange(isNaN(value) || value < 1 ? 1 : value);
          } else {
            setQuantity?.(isNaN(value) || value < 1 ? 1 : value);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.currentTarget.blur();
            e.preventDefault();
          }
        }}
        aria-label="Edit quantity"
        role="spinbutton"
      >
        {quantity}
      </div>
      <button
        className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full  hover:bg-gray-900 text-xl font-bold transition"
        onClick={() => {
          if (handleQuantityChange) handleQuantityChange(quantity + 1);
          else setQuantity?.((prev) => prev + 1);
        }}
        aria-label="Increase quantity"
        type="button"
      >
        +
      </button>
    </div>
  );
};
