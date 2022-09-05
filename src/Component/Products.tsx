import React, { useContext } from "react";
import ProductContext from "../Context/product-data";
import ProductCard from "./ProductCard";

const Products = () => {
    // const setCart = (value: number) => {
    //     props.setCart(value);
    // };

    const newData = useContext(ProductContext);

    return (
        <>
            <div className="container">
                <div className="row">
                    {newData.data.map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            width={item.width}
                            height={item.height}
                            setCart={newData.setcart}
                            removeBtnClicked={newData.onRemoveHandler.bind(null, item.id)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
