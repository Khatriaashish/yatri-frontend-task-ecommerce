"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface OrderFormProps {
  checkoutHandler: (data: OrderFormInputs) => void;
}

type OrderFormInputs = {
  fullName: string;
  email: string;
  address: string;
  payment: string;
};

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  address: yup.string().required("Shipping address is required"),
  payment: yup.string().required("Please select a payment method"),
});

export const OrderForm: FC<OrderFormProps> = ({ checkoutHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: OrderFormInputs) => {
    checkoutHandler(data);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-fit">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Customer Details
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName")}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <textarea
            placeholder="Shipping Address"
            rows={3}
            {...register("address")}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Payment */}
        <div>
          <select
            {...register("payment")}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
          >
            <option value="">Select Payment Method</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
          </select>
          {errors.payment && (
            <p className="text-red-500 text-sm mt-1">
              {errors.payment.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-slate-600 hover:bg-slate-700 text-white py-2 rounded-lg font-semibold transition cursor-pointer"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};
