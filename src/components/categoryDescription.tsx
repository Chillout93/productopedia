import { CategoryDescription } from "../code/models";
import * as React from "react";
import { useCaseTabs } from "./useCaseTabs";
import { metrics } from "./metrics";

export const categoryDescription = (category: CategoryDescription) =>
    <React.Fragment>
        <div className="mb-5">
            <h1>{category.name}</h1>
            <p className="font-italic text-muted">Last updated {category.lastUpdated.toDateString()}</p>
        </div>

        <h2 className="mb-4">Which {category.name} to buy?</h2>

        {useCaseTabs(category.useCases, category.comparisonMetrics)}

        <h2 className="mt-4">What makes good {category.name}?</h2>
        <p dangerouslySetInnerHTML={{ __html: category.whatMakesItGood }}></p>

        {metrics(category.metrics)}
    </React.Fragment>;
