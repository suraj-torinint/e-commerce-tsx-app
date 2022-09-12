import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import StoreData from "../Data/service";

let itemArray: number[] = [];
const ProductCard: React.FC<{ removeBtnClicked: () => void; setCart: (cart: number) => void; id: number; image: string; title: string; desc: string; price: number; rating: { rate: number }; category: string }> = (props) => {
    const [btnDisabled, setBtnDisabled] = useState<string>("");
    const [cartIcon, setCartIcon] = useState(<i className="bi bi-cart"></i>);

    const handleCart: React.MouseEventHandler = () => {
        setBtnDisabled("disabled");
        let totalCount = itemArray.length + 1;
        // cart post method
        StoreData.postCart({ id: props.id });
        // let cartNum = totalCount;
        setCartIcon(<i className="bi bi-cart-check-fill"></i>);
        itemArray.push(props.id);
        localStorage.setItem("cart", JSON.stringify(itemArray));
        console.log(totalCount);
        props.setCart(totalCount);
    };

    // let width = props.width;
    // let height = props.height;

    return (
        <>
            <div className={"col g-5 px-5"}>
                <div className="card">
                    <div className="ps-3 pt-3">
                        <button onClick={props.removeBtnClicked} type="button" className="btn btn-secondary">
                            <i className="bi bi-x-lg"></i>
                            <span className="visually-hidden">Button</span>
                        </button>
                    </div>
                    <div className="card-img text-center">
                        <Link to={`/shop/${props.id}`}>
                            <img src={props.image} className=" img-fluid px-3" style={{ height: "250px" }} alt="..." />
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="px-1 row">
                            <h5 className="card-title  col">
                                <Link to={`/shop/${props.id}`} className={"text-decoration-none fw-bold text-dark"}>
                                    {props.title.substring(0, 15)}...
                                </Link>
                            </h5>

                            <h5 className="card-title col-lg-4 justify-content-end">
                                <Link to={`/shop/${props.id}`} className={"text-decoration-none text-dark"}>
                                    ₹ {props.price}
                                </Link>
                            </h5>
                        </div>
                        <div className="card-text ps-1">
                            <div>
                                {props.rating.rate} <i className="bi bi-star"></i>
                            </div>
                            <div className="mb-2">{props.category}</div>
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
                                                {props.title}
                                            </h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <span className="text-uppercase fw-bold fs-3">Details</span>
                                            <br />
                                            {props.desc}
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
