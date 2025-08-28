"use client";

import { useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { MdRefresh } from "react-icons/md";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Caught:", error);
  }, [error]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 max-w-md w-full text-center flex flex-col items-center space-y-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Icon */}
      <FiAlertTriangle className="text-red-500 text-6xl animate-pulse" />

      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Oops! Something went wrong.
      </h2>

      {/* Error message */}
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        We encountered an unexpected error. Please try again or refresh the
        page.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => reset()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white shadow-md transition"
        >
          <MdRefresh className="text-lg" />
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white shadow-md transition"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}
