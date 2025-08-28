import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getProuctById } from "./product.service";
import { on } from "events";

export const getProdcutsAction = createAsyncThunk(
  "product/get",
  async (_, thunkAPI) => {
    try {
      const response = await getAllProducts();
      return response;
    } catch (except) {
      console.log("getProdcutsAction", except);
      return thunkAPI.rejectWithValue("Cannot fetch products right now!");
    }
  }
);

export const getProductByIdAction = createAsyncThunk(
  "product/getById",
  async (
    {
      id,
      onSuccess,
      onFailure,
    }: {
      id: number;
      onSuccess: (res: Api.IProduct) => void;
      onFailure?: (error: string) => void;
    },
    thunkAPI
  ) => {
    try {
      const response = await getProuctById(id);
      onSuccess?.(response);
      return response;
    } catch (except) {
      onFailure?.("Cannot fetch product right now!");
      console.log("getProductByIdAction", except);
      return thunkAPI.rejectWithValue("Cannot fetch product right now!");
    }
  }
);

interface IProductStates {
  products: Api.IProduct[];
  productsLoading: boolean;
  productsError?: string;
}

const initialState: IProductStates = {
  products: [],
  productsLoading: false,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProdcutsAction.pending, (state) => {
      state.productsLoading = true;
    });
    builder.addCase(getProdcutsAction.fulfilled, (state, action) => {
      state.productsLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProdcutsAction.rejected, (state) => {
      state.productsLoading = false;
      state.productsError = "Error fetching products right now!";
    });
  },
});

export default productSlice.reducer;
