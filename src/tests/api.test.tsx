import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import { rest } from "msw";
import { setupServer } from "msw/lib/node";
import Products from "../Component/Products";

export const handlers = [
    rest.get("/shop", (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    id: 1,
                    title: "Google Pixel 6a",
                    description: "asdasd",
                    image: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/g/g/3/-original-imaggbrccwsnygar.jpeg?q=70",
                    price: 43999,
                    rating: {
                        rate: 4.5,
                    },
                    category: "Mobiles",
                },
                {
                    title: "nothing Phone (1)",
                    description: "smart Phone",
                    image: "https://rukminim1.flixcart.com/image/312/312/l5h2xe80/mobile/4/7/l/-original-imagg4y3grhaxckf.jpeg?q=70",
                    price: 27999,
                    rating: {
                        rate: 4.5,
                    },
                    category: "Mobiles",
                    id: 2,
                },
            ]),
            ctx.delay(150),
        );
    }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("testing mocked api calls", () => {
    test("should render all the elements when an url is fired", async () => {

        renderWithProviders(<Products />);

        expect(screen.findByText(/google pixel 6a/i)).toBeInTheDocument()

    });
});
