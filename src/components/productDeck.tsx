import * as React from "react";
import { productCard } from "./productCard";
import { Product } from "../code/models";

export const productDeck = (products: Product[]) =>
    <div className="row">
        {products.map(x => <div className="col-xl-3 col-sm-4 col-xs-12 mb-4">{productCard(x)}</div>)}
    </div>;