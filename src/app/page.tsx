"use client";

import { useDispatch, useSelector } from "@/store/hooks.store";
import { ProductList, SearchBar } from "../components";
import { useEffect, useState } from "react";
import { getProdcutsAction } from "@/store/redux/product/product.slice";
import { useDebounce } from "@/hooks/useDebounce.hook";
import { usePagination } from "@/hooks/usePagination.hook";
import { PaginationBar } from "@/components/paginationBar/paginationBar.component";

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const itemsPerPage = 6;
  const { currentPage, totalPages, paginatedData, goToPage } = usePagination({
    data: filteredProducts,
    itemsPerPage,
  });

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    dispatch(getProdcutsAction());
  }, [dispatch]);

  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setFilteredProducts(products);
      return;
    }

    try {
      const regex = new RegExp(debouncedSearchTerm.trim(), "i");
      const filtered = products.filter((product) => regex.test(product.title));
      setFilteredProducts(filtered);
    } catch (err) {
      console.error("Invalid regex pattern", err);
      setFilteredProducts(products);
    }
  }, [debouncedSearchTerm, products]);
  return (
    <div className="home flex flex-col items-center gap-4 p-12">
      <div className="brand group w-fit text-5xl flex flex-col items-center gap-2 cursor-pointer ">
        Yatri Store{" "}
        <div className="w-[100px] h-[5px] bg-white rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></div>
      </div>
      <div className="tagline w-fit text-lg text-center">
        Find Amazingly Amazing Product here
      </div>
      <div className="search w-fit">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="products w-fit">
        <ProductList products={paginatedData} />
      </div>

      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  );
}
