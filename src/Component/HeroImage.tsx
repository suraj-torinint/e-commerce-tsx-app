import React from "react";
import { Link } from "react-router-dom";

const HeroImage = () => {
    return (
        // <div className="container mx-5 mt-3">
        //     <img className="" alt="..." src={process.env.PUBLIC_URL + "/images/pixel6a.webp"} />
        //     <Link className={`btn btn-success`} to={"/admin"}>
        //         Add Product
        //     </Link>
        // </div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={process.env.PUBLIC_URL + "/images/pixel6a.webp"} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <Link className="btn btn-primary" to={"/admin"}>Add Product</Link>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={process.env.PUBLIC_URL + "/images/nothing.webp"} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <Link className="btn btn-primary" to={"/admin"}>Add Product</Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + "/images/escape.webp"} style={{height:"236.367px"}} className=" fill d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <Link className="btn btn-primary" to={"/admin"}>Add Product</Link>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeroImage;
