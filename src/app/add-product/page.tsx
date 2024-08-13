"use client";
import { useFormik } from "formik";
import HeaderTitle from "../components/atoms/HeaderTitle";
import { Button } from "../components/atoms/buttons/Button";
import { FormEventHandler, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setProduct } from "@/lib/redux/features/productSlice";
interface AddProductFormData {
  sku: string;
  productName: string;
  price: number;
  quantity: number;
  description: string;
}

export default function AddProduct() {
  const dispatch = useAppDispatch();

  const initialValues: AddProductFormData = {
    sku: "",
    productName: "",
    price: 0.0,
    quantity: 0.0,
    description: "",
  };
  // TODO: Reset form after submission
  // TODO: Add form validation
  const onSubmit = (values: AddProductFormData) => {
    console.log(values);
    dispatch(setProduct(values));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnChange: false,
    validate: () => {},
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <>
      <HeaderTitle title="Products" subtitle="Add new product" />
      {/* add product form */}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="sku">SKU</label>
        <input
          type="text"
          id="sku"
          name="sku"
          value={values.sku}
          onChange={handleChange}
          className="w-[400px] h-11 rounded-md bg-gray-250"
        />

        <Button type="submit">Add Product</Button>
      </form>
    </>
  );
}
