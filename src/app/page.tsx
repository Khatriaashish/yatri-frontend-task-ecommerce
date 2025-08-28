"use client";

import { ProductList } from "../components";

export default function Home() {
  return (
    <div className="home flex flex-col items-center gap-4 p-12">
      <div className="brand group w-fit text-5xl flex flex-col items-center gap-2 cursor-pointer ">
        Yatri Store{" "}
        <div className="w-[100px] h-[5px] bg-white rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></div>
      </div>
      <div className="tagline w-fit text-lg text-center">
        Find Amazingly Amazing Product here
      </div>
      <div className="search w-fit"></div>
      <div className="products w-fit">
        <ProductList />
      </div>
    </div>
  );
}
