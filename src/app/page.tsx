import Image from "next/image";

export default function Home() {
  return (
    <div className="home flex flex-col items-center gap-4 m-12">
      <div className="brand group w-fit text-5xl flex flex-col items-center gap-2 cursor-pointer">
        Yatri Stores{" "}
        <div className="w-[100px] h-[5px] bg-white rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></div>
      </div>
      <div className="search w-fit"></div>
      <div className="products w-fit"></div>
    </div>
  );
}
