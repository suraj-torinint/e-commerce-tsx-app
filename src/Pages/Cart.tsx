import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "../Component/CartItems";
import ProductContext from "../Context/product-data";
import StoreData, { cartDataType, storeDatatype } from "../Data/service";

// localStorage.setItem("cart", JSON.stringify([]));
const Cart = () => {
    // let cartItems = JSON.parse(localStorage.getItem("cart")!);
    const [cart, setCart] = useState<cartDataType[]>([]);
    let cartItems: cartDataType[] = cart;
    const updatedData = useContext(ProductContext);
    const [totalQuantity, setTotalQuantity] = useState(0);
    let items: storeDatatype[] = [];
    let price = 0;
    const [totalPrice, setTotalPrice] = useState(price);

    useEffect(() => {
        StoreData.getCart().then((data) => setCart(data));
        StoreData.getCart().then((data) => setTotalQuantity(data.length));
        return () => {};
    }, []);

    for (const iterator of cartItems.entries()) {
        let element: storeDatatype[] = [updatedData.bigdata.find((product) => product.id === iterator[1].id)!];
        items = [...items, ...element];
    }

    price += items
        .map((product) => Number(product.price))
        .reduce((a, b) => {
            return a + b;
        }, 0);

    const handleIncrement = (quantity: number, price: number) => {
        setTotalQuantity((prevQuantity: number) => prevQuantity + 1);
        setTotalPrice((prevPrice) => prevPrice + price);
    };

    const handleDecrement = (quantity: number, price: number) => {
        setTotalQuantity((prevQuantity: number) => (prevQuantity !== cartItems.length && quantity > 1 ? prevQuantity - 1 : prevQuantity));
        setTotalPrice((prevPrice) => (quantity > 1 ? prevPrice - price : prevPrice));
    };

    const handleRemoveCart = (id: number) => {
        StoreData.deleteCart(id);
        items.map((product) => product.id !== id);
    };

    if (items.length === 0) {
        return (
            <>
                <div className="container m-5 text-center">
                    <p className="fs-1">No Items in Cart</p>
                    <Link className="btn btn-primary" to={"/shop"}>
                        Shop Now
                    </Link>
                </div>
            </>
        );
    }
    return (
        <div className="container">
            <div className="card my-3 text-center">
                <div className="card-title m-3 fs-3">Total Cart Items {totalQuantity}</div>
            </div>
            {items.map((product) => (
                <CartItems key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} setIncrementQuantity={handleIncrement} setDecermentQuantity={handleDecrement} onRemoveCart={handleRemoveCart} />
            ))}
            <div className="row">
                <div className="col"></div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">Total Price : ₹ {totalPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
