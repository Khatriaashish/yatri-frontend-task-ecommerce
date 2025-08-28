"use client";

import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

export const OrderSuccess = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md text-center">
        <FaCheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Thank you for your purchase. You will receive an email confirmation
          shortly.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};
