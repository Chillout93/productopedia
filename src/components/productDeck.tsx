import * as React from "react";
import { productCard } from "./productCard";
import { Product } from "../code/models";

export const productDeck = (products: Product[]) =>
    <div className="card-deck">
        {products.map(x => productCard(x))}
    </div>;