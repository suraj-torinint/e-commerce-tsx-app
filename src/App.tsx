import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Component/Header";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import ProductDetail from "./Pages/ProductDetail";
import productData, { productType } from "./Data/ProductData";
import NOtFound from "./Pages/NOtFound";

const App = () => {
    const [cartItems, setCartItems] = useState(0);
    const setCart = (cartItems: number) => {
        setCartItems(cartItems);
    };

    const [getData, setGetData] = useState<productType[]>([...productData]);
    const setData = (obj: productType[]) => {
        let updatedData = [...getData, ...obj];
        console.log(typeof updatedData);
        console.log(updatedData);
        setGetData(updatedData);
    };

    const handleRemove = (id: number) => {
        setGetData((prevData) => {
            return prevData.filter((item) => item.id !== id);
        });
    };

    return (
        <div>
            <Header getCart={cartItems} />
            <Switch>
                <Route exact path="/">
                    <Home setCart={setCart} newData={getData} onRemove={handleRemove} />
                </Route>
                <Route exact path="/admin">
                    <Admin updatedData={setData} />
                </Route>
                <Route exact path="/shop">
                    <Shop setCart={setCart} newData={getData} onRemove={handleRemove} />
                </Route>

                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/wishlist">
                    <Wishlist />
                </Route>
                <Route exact path="/shop/:productId">
                    <ProductDetail newData={getData} />
                </Route>
                <Route exact path="*">
                    <NOtFound />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
