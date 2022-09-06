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
import ProductContext from "./Context/product-data";
import ErrorBoundary from "./Component/ErrorBoundary";

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
        <ProductContext.Provider value={{ data: getData, cartData: cartItems, onRemoveHandler: handleRemove, updatedData: setData, setcart: setCart }}>
            <ErrorBoundary>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
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
                    <Route exact path="/shop/:productId">
                        <ProductDetail />
                    </Route>
                    <Route exact path="*">
                        <NOtFound />
                    </Route>
                </Switch>
            </ErrorBoundary>
        </ProductContext.Provider>
    );
};

export default App;
