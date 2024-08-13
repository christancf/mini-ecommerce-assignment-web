import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  success: false,
  error: null,
  product: {
    sku: "",
    productName: "",
    price: 0.0,
    quantity: 0.0,
    description: "",
  },
  delete_product_modal: {
    show: false,
    sku: "",
    success: false,
    error: null,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
