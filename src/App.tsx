import React, { useState } from "react";
import Header from "./Component/Header";
import Products from "./Component/Products";
import NewProduct from "./Component/NewProduct";

const App = () => {
    const [cartItems, setCartItems] = useState(0);
    const setCart = (cartItems: number) => {
        setCartItems(cartItems);
    };
    return (
        <div>
            <Header getCart={cartItems} />
            <div className="container">
                <div className="row">
                    <Products setCart={setCart} />
                </div>
                <NewProduct />
            </div>
        </div>
    );
};

export default App;
