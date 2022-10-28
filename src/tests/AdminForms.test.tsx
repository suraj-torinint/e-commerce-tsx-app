import "@testing-library/jest-dom";
import { render as rtlRender, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NewProduct from "../Component/NewProduct";
import store from "../Services/store";

const render = async (component: JSX.Element) =>
    rtlRender(
        <BrowserRouter>
            <Provider store={store}>{component}</Provider>
        </BrowserRouter>,
    );

describe("testing Forms", () => {
    test("initial state of form is empty", async () => {
        await render(<NewProduct />);

        const title = screen.getByRole("textbox", { name: /title/i });
        const price = screen.getByRole("spinbutton", { name: /price/i });
        const description = screen.getByRole("textbox", { name: /desc/i });
        const image = screen.getByRole("textbox", { name: /image/i });
        const rating = screen.getByRole("spinbutton", { name: /rating/i });
        const category = screen.getByRole("textbox", { name: /category/i });
        const submit = screen.getByRole("button", { name: "Submit" });
        expect(title).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(rating).toBeInTheDocument();
        expect(category).toBeInTheDocument();
        expect(submit).toBeInTheDocument();
    });

    test("validating data entered in form", async () => {
        await render(<NewProduct />);
        // await waitFor(() => {
        const title = screen.getByRole("textbox", { name: /title/i });
        const price = screen.getByRole("spinbutton", { name: /price/i });
        const description = screen.getByRole("textbox", { name: /desc/i });
        const image = screen.getByRole("textbox", { name: /image/i });
        const rating = screen.getByRole("spinbutton", { name: /rating/i });
        const category = screen.getByRole("textbox", { name: /category/i });
        const submit = screen.getByRole("button", { name: "Submit" });
        userEvent.type(title, "iphone 15");
        userEvent.type(price, "1049.99");
        userEvent.type(description, "smartphone");
        userEvent.type(image, "https://images.macrumors.com/t/3H6O9z453_NmQvwVF1IlBf3_ivg=/1600x0/article-new/2022/05/Beyond-iPhone-13-Feature-2.jpg");
        userEvent.type(rating, "4.4");
        userEvent.type(category, "mobiles");
        userEvent.click(submit);

        expect(title).toHaveValue("");
        expect(price).toHaveValue(null);
        expect(description).toHaveValue("");
        expect(image).toHaveValue("");
        expect(rating).toHaveValue(null);
        expect(category).toHaveValue("");
        // });
    });
});
