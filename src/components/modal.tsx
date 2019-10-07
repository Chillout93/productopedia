import * as React from "react";
import { Product } from "../code/models";
import { productCard } from "./productCard";

export const modal = (product: Product) =>
    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-xl-3 col-sm-4 col-xs-12 mb-4">{productDescription(product)}</div>
                        <div className="col-xl-3 col-sm-4 col-xs-12 mb-4">{productDescription(product)}</div>
                        <div className="col-xl-3 col-sm-4 col-xs-12 mb-4">{productDescription(product)}</div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>;

const productDescription = (product: Product) =>
    <div className={`card border-${product.level.level}`} >
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
            <li style={{ backgroundColor: "rgba(0,0,0,0.03)" }} className="list-group-item"><a data-toggle="modal" data-target="#exampleModal" href="">See Reviewed Alternatives</a></li>
            {product.affiliateLinks.map(x => <li style={{ backgroundColor: "rgba(0,0,0,0.03)", border: "0px solid rgba(0,0,0,0.03)" }} className="list-group-item"><a href="">Buy Now</a><span style={{ float: "right" }} className="text-muted text-right font-italic">{x.name} £{x.price}</span></li>)}
        </ul>
    </div>;