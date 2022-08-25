import React, { useRef } from "react";
import { productType } from "../Data/ProductData";

const NewProduct: React.FC<{ onAddItem: (obj: productType[]) => void }> = (props) => {
    const handleId = useRef<HTMLInputElement>(null);
    const handleTitle = useRef<HTMLInputElement>(null);
    const handleImage = useRef<HTMLInputElement>(null);
    const handlePrice = useRef<HTMLInputElement>(null);
    const handleDesc = useRef<HTMLTextAreaElement>(null);
    const handleWidth = useRef<HTMLInputElement>(null);
    const handleHeight = useRef<HTMLInputElement>(null);
    const handleForm = (event: React.FormEvent) => {
        event.preventDefault();
        const newItem = {
            id: Number(handleId.current?.value),
            title: handleTitle.current!.value,
            desc: handleDesc.current!.value,
            price: handlePrice.current!.value,
            image: handleImage.current!.value,
            width: handleWidth.current!.value,
            height: handleHeight.current!.value,
        };
        props.onAddItem([newItem]);
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
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">
                                Title
                            </label>
                            <input ref={handleTitle} type="text" name="title" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputPassword4" className="form-label">
                                Price
                            </label>
                            <input ref={handlePrice} type="text" name="price" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                Description
                            </label>
                            <textarea ref={handleDesc} name="desc" className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                                Image
                            </label>
                            <input ref={handleImage} name="image" type="file" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputState" className="form-label">
                                Width
                            </label>
                            <input ref={handleWidth} type="text" name="width" className="form-control" id="inputState" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputZip" className="form-label">
                                Height
                            </label>
                            <input ref={handleHeight} type="text" name="height" className="form-control" id="inputZip" />
                        </div>

                        <div className="col-12">
                            <button type="submit" /*onClick={submitForm}*/ className="btn btn-primary me-4">
                                Submit
                            </button>
                            <button type="submit" /*onClick={clearForm}*/ className="btn btn-primary">
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
