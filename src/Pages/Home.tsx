import React, { useState } from "react";
import HeroImage from "../Component/HeroImage";
import Products from "../Component/Products";
import productData, { productType } from "../Data/ProductData";

const Home: React.FC<{ setCart: (value: number) => void }> = (props) => {
    const [getData, setGetData] = useState<productType[]>([...productData]);
    const setCart = (value: number) => {
        props.setCart(value);
    };

    const removeHandler = (id: number) => {
        console.log(id);
        setGetData((prevData) => {
            return prevData.filter((item) => item.id !== id);
        });
    };
    return (
        <>
            <HeroImage />
            <Products setCart={setCart} getData={getData} removeClicked={removeHandler} />
        </>
    );
};

export default Home;
