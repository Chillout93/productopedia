import * as React from "react";

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
                        <div className="col-lg-3">
                            {categories(null, null)}
                        </div>
                        <div className="col-lg-9">
                            {breadcrumbs}
                            {categoryDescription(currentCategory)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    handleCategoryOnClick = (category: Category) => {
        this.setState({ category });
    }
}

const breadcrumbs =
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>;

const header =
    <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-4">
            <a className="navbar-brand" href="#">Productopedia</a>
        </nav>
    </React.Fragment>;

const settingsBar =
    <React.Fragment>
        <div className="text-right">
            <div>Sign Up | Login</div>
        </div>
    </React.Fragment>

const categories = (categories: Category[], handleOnCategoryClick: Function) =>
    <React.Fragment>
        <input type="text" className="form-control mb-3" placeholder="I want..." />
        <ul className="list-group">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    </React.Fragment>;

const categoryDescription = (category: Category) =>
    <React.Fragment>
        <h2 className="font-weight-bold">Laptops</h2>
        <h3 className="font-weight-bold">Which laptop to buy?</h3>
        <h4>Use Cases</h4>
        <div className="accordion" id="accordionExample">
            {accordionChild("For browsing the internet", "For Browsing The Internet", 1, "#accordionExample")}
            {accordionChild("For portable business", "For portable business", 2, "#accordionExample")}
            {accordionChild("For home office business", "For home office business", 3, "#accordionExample")}
            {accordionChild("For gaming", "For gaming", 4, "#accordionExample")}
        </div>

        <h3 className="font-weight-bold">What makes a good laptop?</h3>
        <h4>Build Quality</h4>
        <h4>Portability</h4>
        <h5>Battery Life</h5>
        <h5>Weight</h5>
        <h4>Performance</h4>
        <h5>CPU</h5>
        <h5>RAM</h5>
        <h5>Storage</h5>
        <h5>Graphics</h5>

        <h3 className="font-weight-bold">Top Tips</h3>
        <p>Much like cars a laptop will depreciate in value quite quickly, for the best value for money consider buying second hand.</p>
    </React.Fragment>;

const accordionChild = (name: string, description: string, position: number, parentId: string) =>
    <div className="card">
        <div className="card-header">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse-${position}`}>
                {name}
            </button>
        </div>
        <div id={`collapse-${position}`} className="collapse hide" data-parent={parentId}>
            <div className="card-body">
                <div className="card-deck">
                    {useCase("Beginner")}
                    {useCase("Intermediate")}
                    {useCase("Advanced")}
                </div>
            </div>
        </div>
    </div>;

const useCase = (name: string) =>
    <React.Fragment>
        <div className="card">
            <div className="card-header">
                <h5>{name}</h5>
            </div>
            <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/91Qbl1lVW%2BL._SL1500_.jpg" />
            <div className="card-body">
                <h5>Dell XPS 13</h5>
                <p className="card-text">The Dell XPS 13 is lightweight</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <p className="card-text"><small className="text-muted">£Avg. Price</small></p>
                <p className="card-text"><small className="text-muted">Budget / Better / Best</small></p>
                <p className="card-text"><small className="text-muted">Testing process</small></p>
                <p className="card-text"><small className="text-muted">Alternatives tested</small></p>
            </div>
        </div>
    </React.Fragment>
