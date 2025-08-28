"use client";

import { useDispatch, useSelector } from "@/store/hooks.store";
import { getProductByIdAction } from "@/store/redux/product/product.slice";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { ProductDetailSkeleton, QuantitySelector } from "..";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../button/button.component";
import { addProduct } from "@/store/redux/cart/cart.slice";
import toast from "react-hot-toast";
import { FiAlertCircle } from "react-icons/fi";

export const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productId = Number(params?.productId);

  const [activeProduct, setActiveProduct] = useState<{
    data: Api.IProduct;
    loading: boolean;
    error: string;
  }>({ data: {} as Api.IProduct, loading: true, error: "" });

  const [quantity, setQuantity] = useState(1);
  const { cartProducts } = useSelector((state) => state.cart);

  console.log("cartProducts", cartProducts);

  useEffect(() => {
    if (!productId) return;
    dispatch(
      getProductByIdAction({
        id: productId,
        onSuccess: (res) =>
          setActiveProduct({ data: res, loading: false, error: "" }),
        onFailure: (error) =>
          setActiveProduct({ data: {} as Api.IProduct, loading: false, error }),
      })
    );
  }, [productId, dispatch]);

  const handleAddToCart = () => {
    dispatch(addProduct({ ...activeProduct.data, quantity }));
    toast.success("Product added to cart. Checkout the cart page.");
  };

  const errorMessage = (
    <div className=" error col-span-full flex items-center justify-center gap-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg shadow-md mt-4">
      <FiAlertCircle className="w-6 h-6" />
      <span className="text-center font-medium">{activeProduct?.error}</span>
    </div>
  );

  return (
    <>
      {activeProduct?.loading ? (
        <ProductDetailSkeleton />
      ) : activeProduct?.error !== "" ? (
        errorMessage
      ) : (
        <div className="productDetail grid grid-cols-1 md:grid-cols-5 p-4 md:p-10 gap-6 md:gap-8 items-stretch">
          <div
            className="image md:col-span-2 flex items-center justify-center"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: 300,
            }}
          >
            <Image
              src={activeProduct?.data?.image || ""}
              alt="product image"
              fill
              objectFit="contain"
              sizes="(max-width: 600px) 100vw, 40vw"
              style={{ minHeight: 300 }}
            />
          </div>
          <div className="details md:col-span-3 flex flex-col justify-center mt-6 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">
              {activeProduct?.data?.title}
            </h2>
            <div className="mb-4 flex flex-wrap gap-2">
              {activeProduct?.data?.category && (
                <span
                  className="px-4 py-1 rounded-full bg-gray-800/30 backdrop-blur-md text-sm font-medium text-white-800 capitalize shadow-sm"
                  style={{
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    display: "inline-block",
                  }}
                >
                  {activeProduct.data.category}
                </span>
              )}
            </div>
            <p className="mb-4">{activeProduct?.data?.description}</p>
            <p className="text-2xl font-semibold text-yellow-600">
              {"$" + activeProduct?.data?.price}
            </p>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <Button
              icon={<FaShoppingCart size={22} />}
              title="Add to cart"
              handler={handleAddToCart}
            />
          </div>
        </div>
      )}
    </>
  );
};
