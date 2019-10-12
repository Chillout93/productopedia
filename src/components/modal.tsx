import * as React from "react";
import { Product, ComparisonMetric } from "../code/models";

const modalBody = (product: Product, comparisonMetrics: ComparisonMetric[]) =>
    <div className="row">
        <div className="col">
            <table className="table table-striped table-responsive">
                <thead className="thead-dark">
                    <tr>
                        <th></th>
                        <th>{product.name}</th>
                        {product.alternatives.map(x => <th>{x.name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td><img width={150} src={product.images[0]}></img></td>
                        {product.alternatives.map(x => <td><img width={150} src={x.image}></img></td>)}
                    </tr>
                    <tr>
                        <td><strong>Price</strong></td>
                        <td>{product.affiliateLinks[0].price}</td>
                        {product.alternatives.map(x => <td>{x.price}</td>)}
                    </tr>
                    <tr>
                        <td><strong>Comparison</strong></td>
                        <td></td>
                        {product.alternatives.map(x => <td>{x.summary}</td>)}
                    </tr>
                    {comparisonMetrics.map(x => {
                        const productMetric = product.comparisonAttributes.filter(y => y.comparisonCode === x.code)[0];
                        return <tr>
                            <td><strong>{x.name}</strong></td>
                            <td>{productMetric === undefined ? "" : productMetric.value}</td>
                            {product.alternatives.map(y => {
                                const productMetric = y.comparisonAttributes.filter(y => y.comparisonCode === x.code)[0];
                                return <td>{productMetric === undefined ? "" : productMetric.value}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>;


export const modal = (product: Product, comparisonMetrics: ComparisonMetric[]) =>
    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{product.name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {modalBody(product, comparisonMetrics)}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>;

