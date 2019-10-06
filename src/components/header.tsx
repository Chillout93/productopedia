import * as React from "react";

export const header = (isNavExpanded: boolean, handleNavOnClick: Function, isSmallDisplay: boolean) =>
    <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark mb-3">
            <div className="navbar-brand">
                {isSmallDisplay ? <span style={{ cursor: "pointer" }} className="nav-item mr-3" onClick={() => handleNavOnClick(!isNavExpanded)}>
                    <i className={`fa fa-arrow-${isNavExpanded ? "left" : "right"}`}></i>
                </span> : null}
                ProductPedia
            </div>
        </nav>
    </React.Fragment>;
