import { Product } from "../code/models";
import * as React from "react";

export const productCard = (product: Product) =>
    <div className={`card border-${product.level.level}`}>
        <div className="card-header">
            <h4 className="ml-auto">{product.level.level} <span className="text-muted text-right text-italic">{product.level.price}</span></h4>
        </div>
        <div className="card-img-top p-2 carousel slide" id={`carousel-${product.id}`} data-ride="carousel">
            <ol className="carousel-indicators">
                {product.images.map((x, i) => <li style={{ backgroundColor: "grey" }} data-target={`#carousel-${product.id}`} data-slide-to={i} className={i === 0 ? "active" : ""}></li>)}
            </ol>
            <div className="carousel-inner">
                {product.images.map((x, i) =>
                    <div className={`carousel-item ${i === 0 ? "active" : ""}`}>
                        <img className="d-block w-100" src={x} />
                    </div>)
                }
            </div>
        </div>
        <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.summary}</p>
        </div>
    </div>;