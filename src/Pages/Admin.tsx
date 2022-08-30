import React, { useState } from "react";
import NewProduct from "../Component/NewProduct";
import productData, { productType } from "../Data/ProductData";

const Admin = () => {
    // debugger
    const [getData, setGetData] = useState<productType[]>([...productData]);
    const handleFormData = (obj: productType[]) => {
        let updatedData = [...getData, ...obj];
        console.log(typeof updatedData);
        console.log(updatedData);
        setGetData(updatedData);
    };

    return (
        <div className="container">
            <NewProduct onAddItem={handleFormData} />
        </div>
    );
};

export default Admin;
