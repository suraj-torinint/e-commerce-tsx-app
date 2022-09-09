import React from "react";

const Details: React.FC<{ title: string; price: number; desc: string; image: string }> = (props) => {
    return (
        <>
            <div className="container">
                <div className="card p-3">
                    <div className="row g-0">
                        <div className="col-sm-6 text-center">
                            <div className="">
                                <img src={props.image} alt="..." />
                            </div>
                            <ul className="list-group list-group-horizontal mt-3 justify-content-center">
                                <li className="list-group-item">
                                    <img src={props.image} alt="..." style={{ width: "50px", height: "50px" }} />
                                </li>
                                <li className="list-group-item">
                                    <img src={props.image} alt="..." style={{ width: "50px", height: "50px" }} />
                                </li>
                                <li className="list-group-item">
                                    <img src={props.image} alt="..." style={{ width: "50px", height: "50px" }} />
                                </li>
                                <li className="list-group-item">
                                    <img src={props.image} alt="..." style={{ width: "50px", height: "50px" }} />
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <div className="fs-2">{props.title}</div>
                            <div className="mt-1 mb-2">
                                <span className="fs-3 text-muted">Price: </span>
                                <span className="fs-4">₹{props.price}</span>
                            </div>
                            <div className="my-3">
                                <button className="btn btn-success">Buy Now</button>
                                <button className="btn btn-warning mx-3">Add to cart</button>
                                <button className="btn btn-danger">Wishlist</button>
                            </div>
                            <div>{props.desc}</div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nesciunt aperiam eaque suscipit culpa harum dolorum quibusdam nobis maxime, neque qui sint. Animi labore minus fugiat et sunt possimus corporis consectetur
                                officia cumque facere neque illo cupiditate delectus, necessitatibus molestias! Itaque aperiam culpa perspiciatis ab quis, quas quibusdam iure commodi eveniet, quidem provident debitis placeat omnis quos architecto
                                totam sequi illum eos ex molestiae voluptas! Maxime aperiam fuga maiores ad tenetur mollitia quia error, ipsa quasi placeat, dolor hic reiciendis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
