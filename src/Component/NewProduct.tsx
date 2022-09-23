import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import StoreData, { storeDatatype } from "../Data/service";
import { productAction } from "../Services/product-reducers";

interface initialDataType {
    title: string;
    description: string;
    price: number;
    image: string;
    rating: {
        rate: number;
    };
    category: string;
    idTouched: boolean;
    titleTouched: boolean;
    descriptionTouched: boolean;
    priceTouched: boolean;
    imageTouched: boolean;
    ratingTouched: boolean;
    categoryTouched: boolean;
}

let initialData: initialDataType = {
    title: "",
    description: "",
    price: parseFloat(""),
    image: "",
    rating: { rate: parseFloat("") },
    category: "",
    idTouched: false,
    titleTouched: false,
    descriptionTouched: false,
    priceTouched: false,
    imageTouched: false,
    ratingTouched: false,
    categoryTouched: false,
};

interface actionType {
    type: string;
    payload: any;
}

const reducer = (state: initialDataType, action: actionType) => {
    switch (action.type) {
        case "id":
            return { ...state, id: action.payload };
        case "title":
            return { ...state, title: action.payload };
        case "description":
            return { ...state, description: action.payload };
        case "price":
            return { ...state, price: action.payload };
        case "image":
            return { ...state, image: action.payload };
        case "rating":
            return { ...state, rating: { rate: action.payload } };
        case "category":
            return { ...state, category: action.payload };
        case "idTouched":
            return { ...state, idTouched: action.payload };
        case "titleTouched":
            return { ...state, titleTouched: action.payload };
        case "descriptionTouched":
            return { ...state, descriptionTouched: action.payload };
        case "priceTouched":
            return { ...state, priceTouched: action.payload };
        case "imageTouched":
            return { ...state, imageTouched: action.payload };
        case "ratingTouched":
            return { ...state, ratingTouched: action.payload };
        case "categoryTouched":
            return { ...state, categoryTouched: action.payload };
        default:
            throw new Error();
    }
};

const NewProduct = () => {
    const productDispatch = useDispatch();
    const [state, dispatch] = useReducer(reducer, initialData);

    const handleId = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "id", payload: event.target.value });
        dispatch({ type: "idTouched", payload: true });
    };
    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "title", payload: event.target.value });
        dispatch({ type: "titleTouched", payload: true });
    };
    const handleDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({ type: "description", payload: event.target.value });
        dispatch({ type: "descriptionTouched", payload: true });
    };
    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "image", payload: event.target.value });
        dispatch({ type: "imageTouched", payload: true });
    };
    const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "price", payload: event.target.value });
        dispatch({ type: "priceTouched", payload: true });
    };
    const handleRating = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "rating", payload: event.target.value });
        dispatch({ type: "ratingTouched", payload: true });
    };
    const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "category", payload: event.target.value });
        dispatch({ type: "categoryTouched", payload: true });
    };

    // valid
    const validTitle = state.title.trim() !== "";
    const validDesc = state.description.trim() !== "";
    const validPrice = state.price !== ("" || 0);
    const validImage = state.image.trim() !== "";
    const validRating = state.rating.rate !== ("" || 0);
    const validCategory = state.category.trim() !== "";

    // Invalid
    const invalidTitle = !validTitle && state.titleTouched;
    const invalidDesc = !validDesc && state.descriptionTouched;
    const invalidImage = !validImage && state.imageTouched;
    const invalidPrice = !validPrice && state.priceTouched;
    const invalidRating = !validRating && state.ratingTouched;
    const invalidCategory = !validCategory && state.categoryTouched;

    const handleForm = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch({ type: "idTouched", payload: true });
        dispatch({ type: "titleTouched", payload: true });
        dispatch({ type: "descriptionTouched", payload: true });
        dispatch({ type: "imageTouched", payload: true });
        dispatch({ type: "priceTouched", payload: true });
        dispatch({ type: "ratingTouched", payload: true });
        dispatch({ type: "categoryTouched", payload: true });
        if (!validTitle || !validDesc || !validPrice || !validImage || !validRating || !validCategory) {
            return;
        }

        const newItem: storeDatatype = {
            title: state.title,
            description: state.description,
            image: state.image,
            price: parseFloat(state.price),
            rating: { rate: parseFloat(state.rating.rate) },
            category: state.category,
        };

        StoreData.createPost(newItem).then(() => productDispatch(productAction.cerateProduct([newItem])));
        clearForm();

        dispatch({ type: "idTouched", payload: false });
        dispatch({ type: "titleTouched", payload: false });
        dispatch({ type: "descriptionTouched", payload: false });
        dispatch({ type: "imageTouched", payload: false });
        dispatch({ type: "priceTouched", payload: false });
        dispatch({ type: "ratingTouched", payload: false });
        dispatch({ type: "categoryTouched", payload: false });
    };

    const clearForm = (event?: React.MouseEvent) => {
        event?.preventDefault();
        dispatch({ type: "id", payload: "" });
        dispatch({ type: "title", payload: "" });
        dispatch({ type: "description", payload: "" });
        dispatch({ type: "image", payload: "" });
        dispatch({ type: "price", payload: "" });
        dispatch({ type: "rating", payload: "" });
        dispatch({ type: "category", payload: "" });
    };

    return (
        <>
            <div className="container px-5 pb-5">
                <p className="mb-3 fs-2 text-center">Add a Product</p>
                <div className="p-4 card card-body">
                    <form className="row g-3" onSubmit={handleForm}>
                        <div className="col">
                            <label htmlFor="inputEmail4" className="form-label">
                                Title
                            </label>
                            <input value={state.title} onBlur={handleTitle} onChange={handleTitle} type="text" name="title" className="form-control" id="inputEmail4" />
                            {invalidTitle && <p className="text-danger">title required</p>}
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputPassword4" className="form-label">
                                Price
                            </label>
                            <input value={state.price} onBlur={handlePrice} onChange={handlePrice} type="number" name="price" className="form-control" id="inputPassword4" />
                            {invalidPrice && <p className="text-danger">Price required</p>}
                        </div>
                        <div className="">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                Description
                            </label>
                            <textarea value={state.description} onBlur={handleDesc} onChange={handleDesc} name="desc" className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                            {invalidDesc && <p className="text-danger">Add some Descriptin</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                                Image
                            </label>
                            <input value={state.image} onBlur={handleImage} onChange={handleImage} placeholder="Enter Image link" name="image" type="text" className="form-control" id="inputCity" />
                            {invalidImage && <p className="text-danger">Image link is required</p>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputState" className="form-label">
                                Rating
                            </label>
                            <input value={state.rating.rate} onBlur={handleRating} onChange={handleRating} type="number" name="rating" className="form-control" id="inputState" />
                            {invalidRating && <p className="text-danger">Rating is required</p>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputZip" className="form-label">
                                Category
                            </label>
                            <input value={state.category} onBlur={handleCategory} onChange={handleCategory} type="text" name="category" className="form-control" id="inputZip" />
                            {invalidCategory && <p className="text-danger">Category is required</p>}
                        </div>
                        <div className="d-none">
                            <input type="text" value="React Test" disabled />
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
