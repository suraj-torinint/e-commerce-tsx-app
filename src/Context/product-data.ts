import React from "react";
import productData, { productType } from "../Data/ProductData";

const ProductContext = React.createContext({ data: productData, cartData: 0, onRemoveHandler: (_id: number) => {}, updatedData: (obj: productType[]) => {}, setcart: (cartItems: number) => {} });

export default ProductContext;
