import { Dispatch } from "@reduxjs/toolkit";
import StoreData from "../Data/service";
import { productAction } from "./product-reducers";

export const GetProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await StoreData.getPosts();
      dispatch(productAction.getProducts(res));
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
};
