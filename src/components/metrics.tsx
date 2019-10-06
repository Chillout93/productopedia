import { Metric } from "../code/models";
import * as React from "react";

export const metrics = (metrics: Metric[]) =>
    <React.Fragment>
        <h3 className="mt-5">Metrics</h3>
        {metrics.map(x => {
            return <React.Fragment>
                <h4 className="mt-4">{x.name}</h4>
                <p dangerouslySetInnerHTML={{ __html: x.description }}></p>
            </React.Fragment>
        })}
    </React.Fragment>