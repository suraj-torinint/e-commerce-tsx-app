import React from "react";
import HeroImage from "../Component/HeroImage";
import Products from "../Component/Products";

const Home = () => {
    // const setCart = (value: number) => {
    //     props.setCart(value);
    // };

    return (
        <>
            <HeroImage />
            <Products />
        </>
    );
};

export default Home;
