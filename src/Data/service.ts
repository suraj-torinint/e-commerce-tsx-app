import axios, { AxiosResponse } from "axios";

export interface storeDatatype {
    id?: number;
    title: string;
    description: string;
    price: number;
    image: string;
    rating: { rate: number };
    category: string;
}

export interface cartDataType {
    id: number;
    price: number;
}

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    // put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
};

const StoreData = {
    getPosts: (): Promise<storeDatatype[]> => requests.get("products"),
    getAPost: (id: number): Promise<storeDatatype> => requests.get(`products/${id}`),
    createPost: (post: storeDatatype): Promise<storeDatatype> => requests.post("products", post),
    // updatePost: (post: storeDatatype, id: number): Promise<storeDatatype> => requests.put(`product/${id}`, post),
    // deletePost: (id: number): Promise<void> => requests.delete(`product/${id}`),
    getCart: (): Promise<cartDataType[]> => requests.get("cart"),
    postCart: (cart: cartDataType): Promise<cartDataType[]> => requests.post("cart", cart),
    deleteCart: (id: number): Promise<void> => requests.delete(`cart/${id}`),
};

export default StoreData;
