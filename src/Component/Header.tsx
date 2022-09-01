import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
                    <NavLink className="text-dark navbar-brand" to="/">
                        Z-Kart
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="text-dark nav-link active" aria-current="page" to="/shop">
                                    Shop
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="text-dark nav-link" to="/admin">
                                    Admin
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <NavLink className="px-3 text-decoration-none text-dark" to="/cart">
                            Cart
                            {cart !== 0 ? <span className="ms-1 badge bg-danger">{cart}</span> : " "}
                        </NavLink>
                        <NavLink className="px-3 text-decoration-none text-dark" to="/wishlist">Wish List</NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
