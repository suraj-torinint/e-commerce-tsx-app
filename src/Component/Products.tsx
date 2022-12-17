import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Services/custom-hooks";
import { GetProducts } from "../Services/product-actions";
import { productState } from "../Services/store";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

const Products = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        try {
            dispatch(GetProducts())
        } catch (error) {
            throw new Error("Failed to get the data");
        }
    }, [dispatch]);
    const newData = useAppSelector(productState);
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                    {!newData ? (
                        <Spinner />
                    ) : (
                        newData.map((item, index) => (
                            <ProductCard key={index} {...item} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Products;
