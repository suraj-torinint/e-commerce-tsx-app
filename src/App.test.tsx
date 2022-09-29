import * as ReactDom from "react-dom";
import Products from "./Component/Products";

describe("testing products component", () => {
    beforeEach(() => {
        let container = document.createElement("div");
        document.body.appendChild(container);
        ReactDom.render(<Products />, container);
    });
});
