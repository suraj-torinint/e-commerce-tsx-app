import React from "react";
import { productType } from "../Data/ProductData";
import ProductCard from "./ProductCard";

const Products: React.FC<{ removeClicked: (id:number) => void; setCart: (cartNumber: number) => void; getData: productType[] }> = (props) => {
    const setCart = (value: number) => {
        props.setCart(value);
    };

    return (
        <>
            {props.getData.map((item) => (
                <ProductCard key={item.id} image={item.image} title={item.title} desc={item.desc} price={item.price} width={item.width} height={item.height} setCart={setCart} removeBtnClicked={props.removeClicked.bind(null, item.id)} />
            ))}
        </>
    );
};

export default Products;
