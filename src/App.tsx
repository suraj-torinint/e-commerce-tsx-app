import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Component/Header";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import ProductDetail from "./Pages/ProductDetail";
import NOtFound from "./Pages/NOtFound";
import ErrorBoundary from "./Component/ErrorBoundary";
import StoreData, { storeDatatype } from "./Data/service";
import { useDispatch } from "react-redux";
import { productAction } from "./Services/product-reducers";

const App = () => {
    const [itemData, setItemData] = useState<storeDatatype[]>([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () =>
            StoreData.getPosts().then((data) => {
                dispatch(productAction.getProducts(data));
                setLoading(false);
                // console.log(data)
            });

        try {
            getData();
        } catch (error) {
            setLoading(true);
            throw new Error("Failed to get the data");
        }
    }, [dispatch]);

    const [cartItems, setCartItems] = useState(0);
    const setCart = (cartItems: number) => {
        setCartItems(cartItems);
    };

    const [getData, setGetData] = useState<storeDatatype[]>([...itemData]);
    const setData = (obj: storeDatatype[]) => {
        let updatedData = [...getData, ...obj];
        setGetData(updatedData);
    }; // not required while posting the data since we are getting data from api

    const handleRemove = (id: number) => {
        setItemData((prevData) => {
            return prevData.filter((item) => item.id !== id);
        });
    };

    return (
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
    );
};

export default App;
