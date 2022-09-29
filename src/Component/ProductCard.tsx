import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { storeDatatype } from "../Data/service";
import { AddToCartAction } from "../Services/actions";
import { initialStateType } from "../Services/cart-reducer";

const ProductCard = (props: storeDatatype) => {
    const dispatch = useDispatch();
    let { id, image, title, description, price, rating, category } = props;
    const [btnDisabled, setBtnDisabled] = useState<string>("");
    const [cartIcon, setCartIcon] = useState(<i className="bi bi-cart"></i>);

    const handleCart = () => {
        setBtnDisabled("disabled");
        setCartIcon(<i className="bi bi-cart-check-fill"></i>);
        let cartItem = { id: id, title: title, price: price, image: image, quantity: 1 };
        let newcart = { totalQuantity: 1, totalPrice: price, carts: [cartItem] as initialStateType["carts"] };
        dispatch(AddToCartAction(newcart) as any);
    };

    const removeBtnClicked = () => {};

    return (
        <>
            <div className={"col g-5 px-5"}>
                <div className="card">
                    <div className="ps-3 pt-3">
                        <button onClick={removeBtnClicked} type="button" className="btn btn-secondary">
                            <i className="bi bi-x-lg"></i>
                            <span className="visually-hidden">Button</span>
                        </button>
                    </div>
                    <div className="card-img text-center">
                        <Link to={`/shop/${id}`}>
                            <img src={image} className=" img-fluid px-3" style={{ height: "250px" }} alt="..." />
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="px-1 row">
                            <h5 className="card-title  col">
                                <Link to={`/shop/${id}`} className={"text-decoration-none fw-bold text-dark"}>
                                    {title.substring(0, 15)}...
                                </Link>
                            </h5>

                            <h5 className="card-title col-lg-4 justify-content-end">
                                <Link to={`/shop/${id}`} className={"text-decoration-none text-dark"}>
                                    ₹ {price}
                                </Link>
                            </h5>
                        </div>
                        <div className="card-text ps-1">
                            <div>
                                {rating.rate} <i className="bi bi-star"></i>
                            </div>
                            <div className="mb-2">{category}</div>
                        </div>
                        <div className="row ps-3">
                            <button className="col-sm-5 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Show more
                            </button>
                            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">
                                                {title}
                                            </h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <span className="text-uppercase fw-bold fs-3">Details</span>
                                            <br />
                                            {description}
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi accusamus explicabo sit? Delectus natus deserunt voluptatum qui? Accusantium, dolores nostrum corporis magnam dicta doloribus, ex
                                            debitis quibusdam vitae reprehenderit neque! Labore deserunt minima corrupti dolore obcaecati harum expedita doloremque ratione aut aspernatur? Blanditiis commodi sunt labore amet aliquid delectus.
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleCart} className={`col-sm-2 btn btn-success mx-3 ${btnDisabled}`}>
                                {cartIcon}
                            </button>
                            <button type="button" title="wishlist" className="col-sm-2 btn btn-default">
                                <i className="bi bi-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
