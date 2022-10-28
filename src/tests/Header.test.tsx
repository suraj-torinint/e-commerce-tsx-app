import "@testing-library/jest-dom";
import { render as rtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Component/Header";
import store from "../Services/store";

const render = (Component: JSX.Element) => {
    rtlRender(
        <BrowserRouter>
            <Provider store={store}>{Component}</Provider>
        </BrowserRouter>,
    );
};

describe("testing header component", () => {
    test("checking if brand name is present in component", async ()=>{
        render(<Header />)
        const brand = screen.getByText("Z-Kart", {exact:false})
        const shop = screen.getByText("shop", {exact:false})
        const admin = screen.getByText("admin", {exact:false})
        const cart = screen.getByText("cart", {exact:false})
        const wishlist = screen.getByText("wish list", {exact:false})
        expect(brand).toBeInTheDocument()
        expect(shop).toBeInTheDocument()
        expect(admin).toBeInTheDocument()
        expect(cart).toBeInTheDocument()
        expect(wishlist).toBeInTheDocument()
    })
});
