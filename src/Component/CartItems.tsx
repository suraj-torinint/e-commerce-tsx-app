import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../Services/cart-reducer";

const CartItems: React.FC<{ title: string; price: number; quantity: number; image: string; id: number }> = (props) => {
    const dispatch = useDispatch();
    const handleIncrement: React.MouseEventHandler = () => {
        let cartItem = { id: props.id, title: props.title, price: props.price, image: props.image, quantityu: 1 };
        let newcart = { totalPrice: props.price, carts: [cartItem] };
        dispatch(cartAction.addToCart(newcart));
    };

    const handleDecrement: React.MouseEventHandler = () => {
        let cartItem = { id: props.id, title: props.title, price: props.price, image: props.image, quantity: 1 };
        let newcart = { totalPrice: props.price, carts: [cartItem] };
        props.quantity > 1 && dispatch(cartAction.decreaseCart(newcart));
    };
    
    const handleRemoveEvent: React.MouseEventHandler = () => {
        let cartItem = { id: props.id, title: props.title, price: props.price, image: props.image, quantity: 1 };
        let cartData = { totalPrice: props.price, carts: [cartItem] };
        dispatch(cartAction.removeCart(cartData))
    };

    return (
        <Fragment>
            <div className="card m-4">
                <div className="row align-items-center text-center">
                    <div className="col-sm-2 ">
                        <img src={props.image} className={`card-img-top m-3`} style={{ width: "100px", height: "100px" }} alt="..." />
                    </div>
                    <div className="col-sm-10">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-sm-3 text-center">
                                    <div className="card-title fs-4">{props.title}</div>
                                </div>
                                <div className="col-sm-4 text-center">
                                    <div className="fs-2">Cart Quantity</div>
                                    <div className="my-2">
                                        <button onClick={handleDecrement} title="increase" type="button" className="btn btn-outline-secondary">
                                            <span className="mx-1">-</span>
                                        </button>
                                        <span className="mx-4">{Number(props.quantity)}</span>
                                        <button onClick={handleIncrement} title="increase" type="button" className="btn btn-outline-secondary">
                                            <i className="bi bi-plus-lg"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-sm-3 text-center">
                                    <div className="card-text fs-4">₹ {props.price}</div>
                                </div>
                                <div className="col-sm-2 text-center">
                                    <button onClick={handleRemoveEvent} title="removeItem" type="button" className="btn btn-danger">
                                        <i className="bi bi-trash">{" Remove "}</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CartItems;
