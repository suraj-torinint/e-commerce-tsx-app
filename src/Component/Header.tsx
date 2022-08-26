import { useEffect, useState } from "react";

const Header: React.FC<{ getCart: number }> = (props) => {
    const [cart, setcart] = useState(0);
    useEffect(() => {
        console.log("Mounted");
        let cartItem = Number(localStorage.getItem("cart"));
        setcart(cartItem);
        return () => {
            console.log("Unmounted");
        };
    }, [props.getCart]);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info ">
                <div className="container-fluid">
                    <a className="text-dark navbar-brand" href="/">
                        Z-Kart
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="text-dark nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="text-dark nav-link" href="/">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="text-dark nav-link" href="/">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="px-3">
                            Cart
                            {cart !== 0 ? <span className="ms-1 badge bg-danger">{cart}</span> : " "}
                        </span>
                        <span className="px-3">Wish List</span>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
