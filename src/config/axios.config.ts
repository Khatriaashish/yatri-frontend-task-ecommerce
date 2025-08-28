import { getParsedUrl } from "@/helpers/getParsedUrl.helpers";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true,
  },
  timeout: 2 * 60 * 1000,
});

// MARK: - interceptor
instance.interceptors.request.use(async (request) => {
  // not required for now
  const token = undefined;
  if (token && request.headers) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

const api =
  <ApiResponse>(
    method: "get" | "delete" | "head" | "options" | "post" | "put" | "patch",
    bodyType: "form-data" | "json" = "json"
  ) =>
  (
    url: string,
    params?: { [key: string]: number | string },
    data?: unknown,
    config?: Omit<
      AxiosRequestConfig<unknown>,
      "baseURL" | "url" | "method" | "data"
    >
  ): Promise<AxiosResponse<ApiResponse>> => {
    const customConfig =
      bodyType === "form-data"
        ? {
            ...config,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        : config;

    return instance({
      url: getParsedUrl(url, params),
      method,
      data,
      ...customConfig,
    });
  };

export { instance, api };
