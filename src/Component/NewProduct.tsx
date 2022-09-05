import React, { useContext, useRef, useState } from "react";
import ProductContext from "../Context/product-data";

const NewProduct = () => {
    const handleId = useRef<HTMLInputElement>(null);
    const handleTitle = useRef<HTMLInputElement>(null);
    const handleImage = useRef<HTMLInputElement>(null);
    const handlePrice = useRef<HTMLInputElement>(null);
    const handleDesc = useRef<HTMLTextAreaElement>(null);
    const handleWidth = useRef<HTMLInputElement>(null);
    const handleHeight = useRef<HTMLInputElement>(null);
    const disabledRef = useRef<HTMLInputElement>(null);
    // const [isvalid, setIsValid] = useState(false);
    const [touched, setTouched] = useState(false);

    // valid
    const validID = handleId.current?.value.length !== 0;
    const validTitle = handleTitle.current?.value.length !== 0;
    const validDesc = handleDesc.current?.value.length !== 0;
    const validPrice = handlePrice.current?.value.length !== 0;
    const validImage = handleImage.current?.value.length !== 0;
    const validWidth = handleWidth.current?.value.length !== 0;
    const validHeight = handleHeight.current?.value.length !== 0;

    // Invalid
    const invalidID = !validID && touched;
    const invalidTitle = !validTitle && touched;
    const invalidDesc = !validDesc && touched;
    const invalidImage = !validImage && touched;
    const invalidPrice = !validPrice && touched;
    const invalidWidth = !validWidth && touched;
    const invalidheight = !validHeight && touched;

    const clearForm = (event: React.FormEvent) => {
        event.preventDefault();
        handleId.current!.value = "";
        handleTitle.current!.value = "";
        handleImage.current!.value = "";
        handleDesc.current!.value = "";
        handlePrice.current!.value = "";
        handleWidth.current!.value = "";
        handleHeight.current!.value = "";
    };

    const handleInputID = () => {
        setTouched(true);
        if (handleId.current?.value.length === 0) {
            return invalidID;
        }
    };
    const handleInputTitle = () => {
        setTouched(true);
        if (handleTitle.current?.value.length === 0) {
            return invalidTitle;
        }
    };
    const handleInputDesc = () => {
        setTouched(true);
        if (handleDesc.current?.value.length === 0) {
            return invalidDesc;
        }
    };
    const handleInputImage = () => {
        setTouched(true);
        if (handleImage.current?.value.length === 0) {
            return invalidImage;
        }
    };
    const handleInputPrice = () => {
        setTouched(true);
        if (handlePrice.current?.value.length === 0) {
            return invalidPrice;
        }
    };
    const handleInputWidth = () => {
        setTouched(true);
        if (handleWidth.current?.value.length === 0) {
            return invalidWidth;
        }
    };
    const handleInputHeight = () => {
        setTouched(true);
        if (handleHeight.current?.value.length === 0) {
            return invalidheight;
        }
    };

    const updatedData = useContext(ProductContext);

    const handleForm = (event: React.FormEvent) => {
        event.preventDefault();
        setTouched(true);
        if (
            handleId.current?.value.trim().length === 0 ||
            handleTitle.current?.value.trim().length === 0 ||
            handleImage.current?.value.trim().length === 0 ||
            handlePrice.current?.value.trim().length === 0 ||
            handleDesc.current?.value.trim().length === 0 ||
            handleWidth.current?.value.trim().length === 0 ||
            handleHeight.current?.value.trim().length === 0 ||
            disabledRef.current?.value.length === 0
        ) {
            return [invalidID, invalidDesc, invalidImage, invalidPrice, invalidWidth, invalidTitle, invalidheight];
        }

        const newItem = {
            id: Number(handleId.current?.value),
            title: handleTitle.current!.value,
            desc: handleDesc.current!.value,
            price: handlePrice.current!.value,
            image: handleImage.current!.value,
            width: handleWidth.current!.value + "px",
            height: handleHeight.current!.value + "px",
        };
        updatedData.updatedData([newItem]);
        handleId.current!.value = "";
        handleTitle.current!.value = "";
        handleImage.current!.value = "";
        handleDesc.current!.value = "";
        handlePrice.current!.value = "";
        handleWidth.current!.value = "";
        handleHeight.current!.value = "";

        setTouched(false);
    };

    return (
        <>
            <div className="container px-5 pb-5">
                <p className="mb-3 fs-2 text-center">Add a Product</p>
                <div className="p-4 card card-body">
                    <form className="row g-3" onSubmit={handleForm}>
                        <div className="col-md-2">
                            <label htmlFor="inputId" className="form-label">
                                Id
                            </label>
                            <input onBlur={handleInputID} ref={handleId} type="number" name="id" className="form-control" id="inputId" />
                            {invalidID && <p className="text-danger">ID required</p>}
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">
                                Title
                            </label>
                            <input onBlur={handleInputTitle} ref={handleTitle} type="text" name="title" className="form-control" id="inputEmail4" />
                            {invalidTitle && <p className="text-danger">title required</p>}
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputPassword4" className="form-label">
                                Price
                            </label>
                            <input onBlur={handleInputPrice} ref={handlePrice} type="text" name="price" className="form-control" id="inputPassword4" />
                            {invalidPrice && <p className="text-danger">Price required</p>}
                        </div>
                        <div className="">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                Description
                            </label>
                            <textarea onBlur={handleInputDesc} ref={handleDesc} name="desc" className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                            {invalidDesc && <p className="text-danger">Add some Descriptin</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                                Image
                            </label>
                            <input onBlur={handleInputImage} ref={handleImage} placeholder="Enter Image link" name="image" type="text" className="form-control" id="inputCity" />
                            {invalidImage && <p className="text-danger">Image link is required</p>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputState" className="form-label">
                                Width
                            </label>
                            <input onBlur={handleInputWidth} ref={handleWidth} type="text" name="width" className="form-control" id="inputState" />
                            {invalidWidth && <p className="text-danger">Image Width is required</p>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputZip" className="form-label">
                                Height
                            </label>
                            <input onBlur={handleInputHeight} ref={handleHeight} type="text" name="height" className="form-control" id="inputZip" />
                            {invalidheight && <p className="text-danger">Image height is required</p>}
                        </div>
                        <div className="d-none">
                            <input type="text" value="React Test" ref={disabledRef} disabled />
                        </div>

                        <div className="col-12">
                            <button type="submit" /*onClick={submitForm}*/ className="btn btn-primary me-4">
                                Submit
                            </button>
                            <button onClick={clearForm} className="btn btn-primary">
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewProduct;
