import { api } from "@/config/axios.config";

export const getAllProducts = async () => {
  const response = await api<Api.IProduct[]>("get")("/products");
  return response.data;
};

export const getProuctById = async (id: number) => {
  const response = await api<Api.IProduct>(`get`)(`/products/${id}`);
  return response.data;
};
