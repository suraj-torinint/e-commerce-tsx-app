import React from "react";
import Products from "../Component/Products";
import { productType } from "../Data/ProductData";

const Shop: React.FC<{ setCart: (value: number) => void; newData: productType[]; onRemove: (id: number) => void }> = (props) => {
    const setCart = (value: number) => {
        props.setCart(value);
    };

    const removeHandler = (id: number) => {
        console.log(id);
        props.onRemove(id);
    };
    return (
        <>
            <Products setCart={setCart} getData={props.newData} removeClicked={removeHandler} />
        </>
    );
};

export default Shop;
