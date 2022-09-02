import React from "react";
import NewProduct from "../Component/NewProduct";
import { productType } from "../Data/ProductData";

const Admin: React.FC<{ updatedData: (obj:productType[]) => void }> = (props) => {

    return (
        <div className="container">
            <NewProduct onAddItem={props.updatedData} />
        </div>
    );
};

export default Admin;
