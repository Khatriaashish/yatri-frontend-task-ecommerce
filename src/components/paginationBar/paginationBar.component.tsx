import { FC } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationBar: FC<PaginationBarProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex gap-2 mt-6 items-center">
      {/* Prev button */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex items-center justify-center px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded-sm disabled:opacity-50 hover:bg-slate-500 transition"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 font-semibold transition rounded-sm ${
            currentPage === page
              ? "bg-slate-600 text-white"
              : "bg-gray-300 dark:bg-gray-700 hover:bg-slate-500"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex items-center justify-center rounded-sm px-3 py-1 bg-gray-300 dark:bg-gray-700  disabled:opacity-50 hover:bg-slate-500 transition"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
