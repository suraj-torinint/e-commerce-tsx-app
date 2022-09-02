import React from "react";
import HeroImage from "../Component/HeroImage";
import Products from "../Component/Products";
import { productType } from "../Data/ProductData";

const Home: React.FC<{ setCart: (value: number) => void; newData: productType[]; onRemove: (id: number) => void }> = (props) => {
    const removeHandler = (id: number) => {
        console.log(id);
        props.onRemove(id);
    };

    const setCart = (value: number) => {
        props.setCart(value);
    };

    return (
        <>
            <HeroImage />
            <Products setCart={setCart} getData={props.newData} removeClicked={removeHandler} />
        </>
    );
};

export default Home;
