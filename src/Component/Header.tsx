import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import StoreData from "../Data/service";
import { cartAction } from "../Services/cart-reducer";
import { cartState } from "../Services/store";

const Header = () => {
    const dispatch = useDispatch();
    const cart = useSelector(cartState);
    let totalCartItems = cart.carts.length
    useEffect(() => {
        StoreData.getCart().then((data) => dispatch(cartAction.getCart(data)));
        return () => {
        };
    }, [dispatch]);

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
                            {totalCartItems > 0 ? <span className="ms-1 badge bg-danger">{totalCartItems}</span> : " "}
                        </NavLink>
                        <NavLink className="px-3 text-decoration-none text-dark" to="/wishlist">
                            Wish List
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
