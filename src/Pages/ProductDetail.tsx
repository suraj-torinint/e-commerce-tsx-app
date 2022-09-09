import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Details from "../Component/Details";
import ProductContext from "../Context/product-data";

const ProductDetail = () => {
    const params = useParams<{ productId: string }>();
    const data = useContext(ProductContext)
    const product = data.bigdata.find((product) => product.id === Number(params.productId));
    // console.log(product);
    return (
        <>
            <div className="container my-5">
                <Details key={product?.id} title={product!.title} price={product!.price} image={product!.image} desc={product!.description} />
            </div>
        </>
    );
};

export default ProductDetail;
