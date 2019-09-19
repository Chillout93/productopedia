import * as React from "react";
import { categories, categoryTest } from "./components/categoryDropdown";

export default class App extends React.Component<{}, {}> {
    state = {
        currentCategory: { name: "Nick" } as Category
    }

    render() {
        const { currentCategory } = this.state;

        return (
            <React.Fragment>
                {header}

                <div className="container-fluid">
                    <div className="row">
                        {fullScreenDisplay(currentCategory)}
                        {mobileDisplay(currentCategory)}
                    </div>
                </div>
            </React.Fragment>
        )
    }

    handleCategoryOnClick = (category: Category) => {
        this.setState({ category });
    }
}

const categoryDescription = (category: Category) =>
    <React.Fragment>
        <div className="mb-4">
            <h1>Laptops</h1>
            <p className="text-italic text-muted">Last updated 3 days ago.</p>
        </div>

        <h2 className="mb-4">Which laptop to buy?</h2>

        {tabs([
            { name: "Browsing The Internet", content: productCardDeck, id: "browsingTheInternet" },
            { name: "Home Business", content: productCardDeck, id: "homeBusiness" },
            { name: "Portable Business", content: productCardDeck, id: "portableBusiness" },
            { name: "Gaming", content: productCardDeck, id: "gaming" }
        ])}

        <h2 className="mb-4 mt-4">What makes a good laptop?</h2>
        <p>Much like cars a laptop will depreciate in value quite quickly, for the best value for money consider buying second hand. Description of what makes a good laptop; build quality, portability, battery life, weight, performance, cpu, ram, storage, graphics</p>
    </React.Fragment>;

const productCard = (name: string, cardType: string) =>
    <div className={`card border-${cardType}`}>
        <div className="card-header">
            <h4>{name}</h4>
        </div>
        <img className="card-img-top p-2" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
        <div className="card-body">
            <h4 className="card-title">Dell XPS 13</h4>
            <p className="card-text">The Dell XPS 13 is lightweight</p>
            <p className="card-text"><small className="text-muted">£Avg. Price</small></p>
            <a href="#" className="card-link">Buy On Amazon</a>
            <p className="card-text"><small className="text-muted">Testing process, Alternatives tested</small></p>
        </div>
    </div>;

const productCardDeck =
    <div className="card-deck">
        {productCard("Beginner", "success")}
        {productCard("Intermediate", "warning")}
        {productCard("Advanced", "danger")}
    </div>;

type TabContent = {
    name: string;
    content: any;
    id: string;
}

const tabs = (tabs: TabContent[]) =>
    <React.Fragment>
        <nav className="mb-4">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                {tabs.map((x, i) => <a className={`nav-item nav-link ${i === 0 ? "active" : ""}`} id={`nav-${x.id}-tab`} data-toggle="tab" href={`#nav-${x.id}`} role="tab" aria-controls={`nav-${x.id}`} aria-selected="false">{x.name}</a>)}
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            {tabs.map((x, i) => <div className={`tab-pane fade show ${i === 0 ? "active" : ""}`} id={`nav-${x.id}`} role="tabpanel" aria-labelledby={`nav-${x.id}-tab`}>{productCardDeck}</div>)}
        </div>
    </React.Fragment>;

const header =
    <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark mb-3">
            <a className="navbar-brand" href="#">Productopedia</a>
            <ul className="navbar-nav ml-auto">
                <a className="nav-item d-lg-none collapse collapseExample" type="button" data-toggle="collapse" data-target=".collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-arrow-up"></i>
                </a>
                <a className="nav-item d-lg-none collapse collapseExample show" type="button" data-toggle="collapse" data-target=".collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-arrow-down"></i>
                </a>
            </ul>
        </nav>
    </React.Fragment>;

const breadcrumbs =
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>;

const fullScreenDisplay = (currentCategory: Category) =>
    <React.Fragment>
        <div className="col-3 d-none d-lg-block">
            {categories(categoryTest, null)}
        </div>
        <div className="col-9 d-none d-lg-block">
            {breadcrumbs}
            {categoryDescription(currentCategory)}
        </div>
    </React.Fragment>;

const mobileDisplay = (currentCategory: Category) =>
    <React.Fragment>
        <div className="col-12 d-lg-none collapse collapseExample">
            {categories(categoryTest, null)}
        </div>
        <div className="col-12 d-lg-none collapse collapseExample show">
            {breadcrumbs}
            {categoryDescription(currentCategory)}
        </div>
    </React.Fragment>;
