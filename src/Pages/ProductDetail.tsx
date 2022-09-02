import React from "react";
import { useParams } from "react-router-dom";
import { productType } from "../Data/ProductData";
import Details from "../Component/Details";

const ProductDetail: React.FC<{ newData: productType[] }> = (props) => {
    const params = useParams<{ productId: string }>();
    const product = props.newData.find((product) => product.id === Number(params.productId));
    // console.log(product);
    return (
        <>
            <div className="container my-5">
                <Details key={product?.id} title={product!.title} price={product!.price} image={product!.image} desc={product!.desc} />
            </div>
        </>
    );
};

export default ProductDetail;
