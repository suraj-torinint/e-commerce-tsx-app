import React from "react";
import { storeDatatype } from "../Data/service";

const ProductContext = React.createContext({ bigdata: [] as storeDatatype[], cartData: 0, onRemoveHandler: (_id: number) => {}, updatedData: (obj: storeDatatype[]) => {}, setcart: (cartItems: number) => {} });

export default ProductContext;
