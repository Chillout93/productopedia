type Category = {
    name: string;
    children: Category[];
    products: Product[];
};

type Product = {
    name: string;
    description: string;
};