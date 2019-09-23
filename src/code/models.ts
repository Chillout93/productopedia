type Category = {
    id: number;
    name: string;
    children: Category[];
    products: Product[];
    isVisible: boolean;
};

type Product = {
    name: string;
    description: string;
};