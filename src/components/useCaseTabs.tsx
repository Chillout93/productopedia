import { UseCase, ComparisonMetric } from "../code/models";
import * as React from "react";
import { productDeck } from "./productDeck";

export const useCaseTabs = (tabs: UseCase[], comparisonMetrics: ComparisonMetric[]) =>
    <React.Fragment>
        <nav className="mb-4">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                {tabs.map((x, i) => <a className={`nav-item nav-link ${i === 0 ? "active" : ""}`} id={`nav-${x.id}-tab`} data-toggle="tab" href={`#nav-${x.id}`} role="tab" aria-controls={`nav-${x.id}`} aria-selected="false">{x.name}</a>)}
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            {tabs.map((x, i) => <div className={`tab-pane fade show ${i === 0 ? "active" : ""}`} id={`nav-${x.id}`} role="tabpanel" aria-labelledby={`nav-${x.id}-tab`}>{productDeck(x.products, comparisonMetrics)}</div>)}
        </div>
    </React.Fragment>;