import React from "react";

export const header =
    <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark mb-3">
            <a className="navbar-brand" href="#">Productopedia</a>
            <ul className="navbar-nav ml-auto">
                <a className="nav-item d-lg-none collapse collapseExample" type="button" data-toggle="collapse" data-target=".collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-arrow-up text-muted"></i>
                </a>
                <a className="nav-item d-lg-none collapse collapseExample show" type="button" data-toggle="collapse" data-target=".collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-arrow-down text-muted"></i>
                </a>
            </ul>
        </nav>
    </React.Fragment>;