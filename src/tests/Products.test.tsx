import { render as rtlRender, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../Component/ProductCard";
import store from "../Services/store";

const render = (component: JSX.Element) =>
    rtlRender(
        <MemoryRouter>
            <Provider store={store}>{component}</Provider>
        </MemoryRouter>,
    );

let item = store.getState().productReducer.map((data) => data)[0];

describe("Testing products", () => {
    test("testing if product is being rendered correctly", async () => {
        render(<ProductCard {...item} />);
        await waitFor(() => {
            let card = screen.getByTestId("product", { exact: false });
            expect(card).toBeInTheDocument();
        });
    });
});
