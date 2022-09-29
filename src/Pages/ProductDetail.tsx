import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Details from "../Component/Details";
import Spinner from "../Component/Spinner";
import ProductContext from "../Context/product-data";
import StoreData, { storeDatatype } from "../Data/service";
import { productAction } from "../Services/product-reducers";
import { productState } from "../Services/store";

const ProductDetail = () => {
    const params = useParams<{ productId: string }>();
    const [loading, setLoading] = useState(true);
    const data = useSelector(productState);
    const dispatch = useDispatch();
    const product: storeDatatype = data.find((product) => product.id === Number(params.productId)) as storeDatatype;
    console.log(product);

    useEffect(() => {
        const getData = async () =>
            StoreData.getPosts().then((data) => {
                dispatch(productAction.getProducts(data));
                setLoading(false);
            });

        try {
            getData();
        } catch (error) {
            setLoading(true);
            throw new Error("Failed to get the data");
        }
    }, [dispatch]);
    return (
        <>
            <div className="container my-5">{loading ? <Spinner /> : <Details key={product.id} title={product!.title} price={product!.price} image={product!.image} desc={product!.description} />}</div>
        </>
    );
};

export default ProductDetail;
