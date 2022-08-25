import React, { useState } from "react";
import Header from "./Component/Header";
import Products from "./Component/Products";
import NewProduct from "./Component/NewProduct";
import productData, { productType } from "./Data/ProductData";

const App = () => {
    const [cartItems, setCartItems] = useState(0);
    const setCart = (cartItems: number) => {
        setCartItems(cartItems);
    };

    // debugger
    const [getData, setGetData] = useState<productType[]>([...productData]);
    const handleFormData = (obj: productType[]) => {
        let updatedData = [...getData, ...obj];
        console.log(typeof updatedData);
        console.log(updatedData);
        setGetData(updatedData);
    };

    const removeHandler = (id: number) => {
        console.log(id);
        setGetData((prevData) => {
            return prevData.filter((item) => item.id !== id);
        });
    };

    return (
        <div>
            <Header getCart={cartItems} />
            <div className="container">
                <div className="row">
                    <Products setCart={setCart} getData={getData} removeClicked={removeHandler} />
                </div>
                <NewProduct onAddItem={handleFormData} />
            </div>
        </div>
    );
};

export default App;
