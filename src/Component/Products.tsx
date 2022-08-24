import React from "react";
import productData from "../Data/ProductData";
import ProductCard from "./ProductCard";

const Products = () => {
    return (
        <>
            {productData.map((item) => (
                <ProductCard key={item.id} id={item.id} image={item.image} title={item.title} desc={item.desc} price={item.price} width={item.width} height={item.height} />
            ))}
        </>
    );
};

export default Products;
