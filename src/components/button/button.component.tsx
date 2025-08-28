import { FC } from "react";

interface IButtonProps {
  icon?: React.ReactNode;
  title: string;
  handler?: () => void;
}

export const Button: FC<IButtonProps> = ({ icon, title, handler }) => {
  return (
    <button
      className="mt-6 flex items-center justify-center cursor-pointer gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-lg transition-all duration-200 text-lg w-full md:w-auto"
      style={{ alignSelf: "flex-start" }}
      onClick={handler}
    >
      {icon && icon}
      {title}
    </button>
  );
};
