export type Category = {
    id: number;
    name: string;
    children: Category[];
    products: Product[];
    isVisible: boolean;
};

export type CategoryDescription = {
    id: number;
    name: string;
    lastUpdated: Date;
    useCases: UseCase[];
    whatMakesItGood: string;
    metrics: Metric[];
};

export type Metric = {
    name: string;
    description: string;
};

export type UseCase = {
    id: number;
    name: string;
    products: Product[]
};

export type Product = {
    id: number;
    name: string;
    summary: string;
    level: ProductLevel;
    pros: string[];
    cons: string[];
    affiliateLinks: AffiliateLink[];
    images: string[];
    alternatives: any[];
};

type AffiliateLink = {
    url: string;
    name: string;
    price: number;
}

type ProductLevel = {
    level: number;
    price: string;
};

type Level = "Beginner" | "Intermediate" | "Advanced";

export type TabContent = {
    name: string;
    content: any;
    id: string;
};

// Hardware > Heating, Ventilation & Air Conditioning > Vents & Flues
// Health & Beauty > Personal Care > Cosmetics > Bath & Body > Adult Hygienic Wipes
// Home & Garden > Kitchen & Dining > Kitchen Tools & Utensils > Pizza Cutters
// Sporting Goods > Outdoor Recreation > Cycling > Bicycle Parts > Bicycle Handlebars
// Vehicles & Parts > Vehicle Parts & Accessories > Vehicle Maintenance, Care & Decor > Vehicle Covers > Vehicle Storage Covers > Boat Storage Covers

// bestreviews.com
// What's good about it?
// 
// what's bad about it?
// 

// 

const laptops = {
    id: 1,
    name: "Laptops",
    lastUpdated: new Date(),
    useCases: [
        {
            id: 1,
            name: "For Browsing The Internet",
            products: [
                {
                    id: 1,
                    name: "Lenovo Ideapad 120S",
                    level: {
                        name: "beginner",
                        price: "200-400",
                    },
                    summary: "Ideal for kids or grandparents who just want to occasionally browse the internet, and do some light word editing. All you are looking for here is best bang for buck, if you are using this everyday we suggest going up a level.",
                    pros: [
                        "Good design",
                        "Display hinge goes 180 degrees, means less prone to failure",
                        "USB-C ports",
                        "Long battery life and good specs for the money"
                    ],
                    cons: [
                        "Poor webcam",
                        "Not the greatest screen"
                    ],
                    alternativesTested: [
                        {
                            name: "CHUWI LapBook 14.1",
                            summary: "Almost identical to the ",
                            pros: [
                                ""
                            ],
                            cons: [
                                ""
                            ]
                        }
                    ],

                    affiliateLinks: {
                        price: 500,
                        link: ""
                    },
                    images: [
                        ""
                    ]
                }
            ]
        }
    ],
    summary: "",
    metrics: [
        { name: "Build Quality & Feature Set", description: "" },
        { name: "Performance", description: "" },
        { name: "Portability", description: "" },
        { name: "", description: "" }
    ]
};