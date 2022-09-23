import React, { useContext } from "react";
import { useSelector } from "react-redux";
import ProductContext from "../Context/product-data";
import { productState } from "../Services/store";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

const Products = () => {
    // const setCart = (value: number) => {
    //     props.setCart(value);
    // };

    const newData = useSelector(productState);

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                    {!newData ? (
                        <Spinner />
                    ) : (
                        newData.map((item: { id?: number | any; image: string; title: string; description: string; price: number; rating: { rate: number }; category: string }, index) => (
                            <ProductCard
                                key={index}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                desc={item.description}
                                price={item.price}
                                rating={item.rating}
                                category={item.category}
                                // setCart={newData.setcart}
                                // removeBtnClicked={newData.onRemoveHandler.bind(null, item.id)}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Products;
