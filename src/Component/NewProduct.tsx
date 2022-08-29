import React, { useRef, useState } from "react";
import { productType } from "../Data/ProductData";

const NewProduct: React.FC<{ onAddItem: (obj: productType[]) => void }> = (props) => {
    const handleId = useRef<HTMLInputElement>(null);
    const handleTitle = useRef<HTMLInputElement>(null);
    const handleImage = useRef<HTMLInputElement>(null);
    const handlePrice = useRef<HTMLInputElement>(null);
    const handleDesc = useRef<HTMLTextAreaElement>(null);
    const handleWidth = useRef<HTMLInputElement>(null);
    const handleHeight = useRef<HTMLInputElement>(null);
    const disabledRef = useRef<HTMLInputElement>(null);
    const [isvalid, setIsValid] = useState(true);

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

    const handleForm = (event: React.FormEvent) => {
        event.preventDefault();
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
            setIsValid(false);
        } else {
            setIsValid(true);
            const newItem = {
                id: Number(handleId.current?.value),
                title: handleTitle.current!.value,
                desc: handleDesc.current!.value,
                price: handlePrice.current!.value,
                image: handleImage.current!.value,
                width: handleWidth.current!.value + "px",
                height: handleHeight.current!.value + "px",
            };
            props.onAddItem([newItem]);
        }
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
                            <input ref={handleId} type="number" name="id" className="form-control" id="inputId" />
                            {!isvalid && <p className="text-danger">ID required</p>}
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">
                                Title
                            </label>
                            <input ref={handleTitle} type="text" name="title" className="form-control" id="inputEmail4" />
                            {!isvalid && <p className="text-danger">title required</p>}
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputPassword4" className="form-label">
                                Price
                            </label>
                            <input ref={handlePrice} type="text" name="price" className="form-control" id="inputPassword4" />
                            {!isvalid && <p className="text-danger">Price required</p>}
                        </div>
                        <div className="">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                Description
                            </label>
                            <textarea ref={handleDesc} name="desc" className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                            {!isvalid && <p className="text-danger">Add some Descriptin</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                                Image
                            </label>
                            <input ref={handleImage} placeholder="Enter Image link" name="image" type="text" className="form-control" id="inputCity" />
                            {!isvalid && <p className="text-danger">Image link is required</p>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputState" className="form-label">
                                Width
                            </label>
                            <input ref={handleWidth} type="text" name="width" className="form-control" id="inputState" />
                            {!isvalid && <p className="text-danger">Image Width is required</p>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputZip" className="form-label">
                                Height
                            </label>
                            <input ref={handleHeight} type="text" name="height" className="form-control" id="inputZip" />
                            {!isvalid && <p className="text-danger">Image height is required</p>}
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
