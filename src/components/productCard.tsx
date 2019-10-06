import { Product } from "../code/models";
import * as React from "react";

export const productCard = (product: Product) =>
    <div className={`card border-${product.level.level}`}>
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
            <p className="text-muted font-italic">Level {product.level.level} <span style={{ float: "right" }} className="text-right">£{product.level.price}</span></p>
            <p className="card-text">{product.summary}</p>
        </div>
        <ul className="list-group list-group-flush">
            {product.pros.map(x => <li className="list-group-item text-info">{x}</li>)}
            {product.cons.map(x => <li className="list-group-item text-danger">{x}</li>)}
            <li style={{ backgroundColor: "rgba(0,0,0,0.03)" }} className="list-group-item"><a href="">See Reviewed Alternatives</a></li>
            {product.affiliateLinks.map(x => <li style={{ backgroundColor: "rgba(0,0,0,0.03)", border: "0px solid rgba(0,0,0,0.03)" }} className="list-group-item"><a href="">Buy Now</a><span style={{ float: "right" }} className="text-muted text-right font-italic">{x.name} £{x.price}</span></li>)}
        </ul>
    </div>;