import React from "react";

const NewProduct = () => {
    return (
        <>
            <div className="container px-5 pb-5">
                <p className="mb-3 fs-2 text-center">Add a Product</p>
                <div className="p-4 card card-body">
                    <form className="row g-3">
                        <div className="col-md-2">
                            <label htmlFor="inputId" className="form-label">
                                Id
                            </label>
                            <input type="number" name="id" className="form-control" id="inputId" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">
                                Title
                            </label>
                            <input type="text" name="title" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputPassword4" className="form-label">
                                Price
                            </label>
                            <input type="text" name="price" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                Description
                            </label>
                            <textarea name="desc" className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                                Image
                            </label>
                            <input name="image" type="file" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputState" className="form-label">
                                Width
                            </label>
                            <input type="text" name="width" className="form-control" id="inputState" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputZip" className="form-label">
                                Height
                            </label>
                            <input type="text" name="height" className="form-control" id="inputZip" />
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
