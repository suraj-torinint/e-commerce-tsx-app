import React from "react";
import Header from "./Component/Header";
import Products from "./Component/Products";
import NewProduct from "./Component/NewProduct";

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <Products />
                </div>
                <NewProduct />
            </div>
        </div>
    );
};

export default App;
