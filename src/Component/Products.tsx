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
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                    {newData.bigdata.map((item: { id: number; image: string; title: string; description: string; price: number; rating: {rate:number}; category: string }) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            desc={item.description}
                            price={item.price}
                            rating={item.rating}
                            category={item.category}
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
