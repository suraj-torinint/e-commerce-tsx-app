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

const App = () => {
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
