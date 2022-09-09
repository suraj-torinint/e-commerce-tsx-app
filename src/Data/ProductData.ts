export interface productType {
    // id: number;
    // image: string;
    // title: string;
    // description: string;
    // price: string;
    // brand: string;
    // category: string;
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    brand: string;
    category: string;
}

const productData: productType[] = [
    {
        id: 1,
        image: "https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/u/z/t/iphone-11-256-c-mwmd2hn-a-apple-0-original-imafkg24wszdhzy3.jpeg?q=70",
        title: "iPhone 11",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 41999,
        brand: "150px",
        category: "200px",
    },
    {
        id: 2,
        image: "https://rukminim1.flixcart.com/image/312/312/l3khsi80/mobile/f/s/y/galaxy-s22-ultra-5g-sm-s08edrginu-sm-s908e-ds-samsung-original-imagenuuky3dbc2d.jpeg?q=70",
        title: "Samsung s22",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 72999,
        brand: "100px",
        category: "200px",
    },
    {
        id: 3,
        image: "https://rukminim1.flixcart.com/image/312/312/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70",
        title: "Nothing Phone 1",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 31999,
        brand: "200px",
        category: "200px",
    },
    {
        id: 4,
        image: "https://rukminim1.flixcart.com/image/312/312/l2qhjm80/mobile/d/v/o/10r-5g-le2608-oneplus-original-imageypzw8gumvyz.jpeg?q=70",
        title: "OnePlus 10R",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 35999,
        brand: "100px",
        category: "200px",
    },
    {
        id: 5,
        image: "https://rukminim1.flixcart.com/image/312/312/km2clu80/mobile/8/r/x/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hufbu4eg5.jpeg?q=70",
        title: "Asus ROG Phone 5",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 49999,
        brand: "100px",
        category: "200px",
    },
];

export default productData;
