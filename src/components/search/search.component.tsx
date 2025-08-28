"use client";

import { FC, useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  placeholder?: string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  placeholder = "Search...",
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="w-full sm:max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md px-3 sm:px-4 py-2 focus-within:ring-2 focus-within:ring-slate-400 transition flex items-center">
      <FiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2 sm:mr-3" />

      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
      />
    </div>
  );
};
