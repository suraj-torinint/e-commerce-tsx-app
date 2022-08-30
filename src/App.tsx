import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Component/Header";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

const App = () => {
    const [cartItems, setCartItems] = useState(0);
    const setCart = (cartItems: number) => {
        setCartItems(cartItems);
    };

    return (
        <div>
            <Header getCart={cartItems} />
            <Route exact path="/">
                <Home setCart={setCart} />
            </Route>
            <Route exact path="/admin">
                <Admin />
            </Route>
            <Route exact path="/shop">
                <Shop />
            </Route>

            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route exact path="/wishlist">
                <Wishlist />
            </Route>
        </div>
    );
};

export default App;
