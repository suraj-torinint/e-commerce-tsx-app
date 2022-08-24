import React from "react";

const ProductCard: React.FC<{ id: number; image: string; title: string; desc: string; price: string; width: string; height: string }> = (props) => {
    let width = props.width;
    let height = props.height;
    return (
        <>
            <div className="col-sm-4 p-5">
                <div className="card">
                    <div className="p-3">
                        <button type="button" className="btn btn-secondary">
                            <i className="bi bi-x-lg"></i>
                            <span className="visually-hidden">Button</span>
                        </button>
                    </div>
                    <div className="text-center">
                        <img src={props.image} className="card-img-top img-thumbnail" style={{ width: width, height: height }} alt="..." />
                    </div>
                    <div className="card-body">
                        <div className="px-1 row">
                            <h5 className="card-title fw-bold col">{props.title}</h5>
                            <h5 className="card-title col-lg-4 justify-content-end">₹ {props.price}</h5>
                        </div>
                        <p className="card-text ps-1">
                            Assured Product <br /> Ready to Deliver
                        </p>
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
                            <button className="col-sm-2 btn btn-default mx-3">
                                <i className="bi bi-cart"></i>
                            </button>
                            <button className="col-sm-2 btn btn-default">
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
