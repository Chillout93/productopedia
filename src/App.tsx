import * as React from "react";
import { categories, categoryTest, filterCategory } from "./components/categoryDropdown";
import { isSmallDisplay } from "./code/bootstrapSizes";

const noImage = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

export default class App extends React.Component<{}, {}> {
    state = {
        currentCategory: { name: "Nick" } as Category,
        isNavExpanded: false,
        categories: categoryTest,
        isSmallDisplayResult: isSmallDisplay(window),
        searchString: ""
    }

    componentWillMount = () => {
        window.addEventListener("resize", () => this.setState({ isSmallDisplayResult: isSmallDisplay(window) }));
    };

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.setState({ isSmallDisplayResult: isSmallDisplay(window) }));
      }

    render() {
        const { currentCategory, isNavExpanded, isSmallDisplayResult, categories, searchString } = this.state;

        // We need to deep clone the javascript array "[...x]" syntax will not work, this is only a shallow clone.
        const clonedCategories = JSON.parse(JSON.stringify(categories));
        const filteredCategories = clonedCategories.filter(x => filterCategory(x, searchString));

        return (
            <React.Fragment>
                {header(isNavExpanded, this.handleNavOnClick, isSmallDisplayResult)}

                <div className="container-fluid">
                    <div className="row">
                        {isSmallDisplayResult 
                            ? mobileDisplay(currentCategory, isNavExpanded, filteredCategories, this.handleOnCategorySearch,this.handleParentCategoryOnClick) 
                            : fullScreenDisplay(currentCategory, filteredCategories, this.handleOnCategorySearch, this.handleParentCategoryOnClick)}
                    </div>
                </div>
            </React.Fragment>
        )
    }

    handleCategoryOnClick = (category: Category) => {
        this.setState({ category });
    }

    handleParentCategoryOnClick = (category: Category) => {
        
        category.isVisible = !category.isVisible;
        console.log(category);
        const categoriesUpdate = this.state.categories.map(x => this.test(category, x));

        this.setState({ categories: categoriesUpdate });
    }

    test = (categoryToUpdate: Category, currentCategory: Category) => {
        if (currentCategory.children && currentCategory.children.length > 1)
            currentCategory.children = currentCategory.children.map(x => this.test(categoryToUpdate, x));

        return categoryToUpdate.id === currentCategory.id ? categoryToUpdate : currentCategory;
    }

    handleOnCategorySearch = (searchString: string) => {
        this.setState({ searchString });
    }

    handleNavOnClick = (isNavExpanded: boolean) => {
        this.setState({ isNavExpanded });
    }
}

const categoryDescription = (category: Category) =>
    <React.Fragment>
        <div className="mb-4">
            <h1>Laptops</h1>
            <p className="font-italic text-muted">Last updated 3 days ago.</p>
        </div>

        <h2>Which laptop to buy?</h2>
        <p className="mb-4">
            Below are our suggestions for the very best laptop in each price bracket, for each use case of laptop. Clicking on each will provide you with the
            testing methodology and competitors which did not make the cut and why.
        </p>

        {tabs([
            { name: "Browsing The Internet", content: browsingInternetCardDeck, id: "browsingTheInternet" },
            { name: "For Business", content: forBusinessCardDeck, id: "homeBusiness" },
            { name: "Gaming", content: gamingCardDeck, id: "gaming" }
        ])}

        <h2 className="mt-4">What makes a good laptop?</h2>
        <p>
            Below are the metrics to look out for when buying any laptop,
            our suggestion for the best value for money is to always buy second hand from sites
            like <a href="https://uk.webuy.com/">cex.com</a>. Much like cars most technology will depreciate in value very quickly.
        </p>
        <h3>Metrics</h3>
        <h4>Build Quality</h4>
        <p>A laptop with better build quality will have more premium materials like metal and carbon fiber over plasic, and generally be put together in a more professsional manner.

        </p>

        <h4 className="mt-4">Performance</h4>
        <p>
            <strong>CPU:</strong>  Nowadays you will mostly see Intel CPUs in the format iX-Xxxx, the first X will be a 3, 5, 7 or 9 with the higher number being a stronger 
            processor. The second X determines the generation, so an i7-8110 is an i7 processor from the 8th generation. The generation includes architecture improvements over time <source/>
            you should expect a higher generation i5 to outperform a lower generation i7 for example. The best way to compare processors is through benchmarks <a href="https://www.cpubenchmark.net/laptop.html">here</a>.
        </p>
        <p>
            <strong>RAM: </strong> RAM is quite cheap and you should be looking for at least 8GB even for lower end laptops, 16GB for more mid-level. The more information your computer can hold in ram
            over storage the faster it can access the information, so ideally for all the applications you are using at one time it should be able to hold all that in memory, or 
            you should expect severe performance degredation.
        </p>
        <p>
            <strong>Storage: </strong> Try and avoid hard disks where possible, look for laptops with "SSD" over "Hard Disk" as these will allow your computer to turn on
            faster and overall create the sense that your laptop is a lot faster than it really is. If you require a lot of storage which you don't access frequently then 
            we recommend just getting external hard drives to hold photos or videos.
        </p>
        <p>
            <strong>Graphics Card: </strong> You only need a dedicated graphics card if you plan to do gaming otherwise it will be encorporated onto the motherboard, try and 
            avoid laptops with dedicated graphics cards unless you plan to do gaming, in which case you should look at benchmarks to determine the best forming ones.
        </p>
        <h4 className="mt-4">Portability</h4>
        <p>
            <strong>Weight: </strong>
        </p>
        <p>
            <strong>Battery Life: </strong>
        </p>
    </React.Fragment>;

const productCard = (id: number, level: string, cardType: string, name: string, description: string, price: number, images: string[]) =>
    <div className={`card border-${cardType}`}>
        <div className="card-header">
            <h4>{level}</h4>
        </div>
        <div className="card-img-top p-2 carousel slide" id={`carousel-${id}`} data-ride="carousel">
            <ol className="carousel-indicators">
                {images.map((x, i) =>  <li style={{ backgroundColor: "grey" }} data-target={`#carousel-${id}`} data-slide-to={i} className={i === 0 ? "active" : ""}></li>)}
            </ol>
            <div className="carousel-inner">
                {images.map((x, i) => 
                    <div className={`carousel-item ${i === 0 ? "active" : ""}`}>
                        <img className="d-block w-100" src={x} />
                    </div>)
                }
            </div>
        </div>
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">£{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</small></p>
            <a href="#" className="card-link">Buy On Amazon</a>
            <p className="card-text"><small className="text-muted">Testing process, Alternatives tested</small></p>
        </div>
    </div>;

const browsingInternetCardDeck =
    <div className="card-deck">
        {productCard(1, "Beginner", "success", "Acer Aspire E15", "Test", 345, ["https://images-na.ssl-images-amazon.com/images/I/61sUFMJ1mCL._SX569_.jpg"])}
        {productCard(2, "Intermediate", "warning", "Lenovo Yoga", "test", 700, [
            "https://images-na.ssl-images-amazon.com/images/I/61K23B2u9wL._SX569_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/616ySSLtzeL._SX569_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51B1VeBfnvL._SX569_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51H9Eu3FOKL._SX569_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51h%2BPUTq6EL._SX569_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61Q8hIjnFqL._SX569_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51KLNyluJZL._SX569_.jpg"
        ])}
        {productCard(3, "Advanced", "danger", "Dell XPS 15", "test", 1800, [noImage])}
    </div>;

const forBusinessCardDeck =
    <div className="card-deck">
        {productCard(4, "Beginner", "success", "Lenovo Thinkpad T460", "test", 300, [noImage])}
        {productCard(5, "Intermediate", "warning", "Lenovo Thinkpad L480", "test", 800, [noImage])}
        {productCard(6, "Advanced", "danger", "Lenovo Thinkpad X1 Carbon", "test", 1500, [noImage])}
    </div>;

const gamingCardDeck =
    <div className="card-deck">
        {productCard(7, "Beginner", "success", "Acer Aspire 5", "test", 500, [noImage])}
        {productCard(8, "Intermediate", "warning", "Dell G7 15", "null", 1500, [noImage])}
        {productCard(9, "Advanced", "danger", "Sager NP8954", "test", 2500, [noImage])}
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
            {tabs.map((x, i) => <div className={`tab-pane fade show ${i === 0 ? "active" : ""}`} id={`nav-${x.id}`} role="tabpanel" aria-labelledby={`nav-${x.id}-tab`}>{x.content}</div>)}
        </div>
    </React.Fragment>;

const header = (isNavExpanded: boolean, handleNavOnClick: Function, isSmallDisplay: boolean) =>
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

const breadcrumbs =
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Technology</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Laptops</li>
        </ol>
    </nav>;

const fullScreenDisplay = (currentCategory: Category, filteredCategories: Category[], handleOnCategorySearch: Function, handleParentCategoryOnClick: Function) =>
    <React.Fragment>
        <div className="col-3">
            {categories(filteredCategories, null, handleOnCategorySearch, handleParentCategoryOnClick)}
        </div>
        <div className="col-9">
            {breadcrumbs}
            {categoryDescription(currentCategory)}
        </div>
    </React.Fragment>;

const mobileDisplay = (currentCategory: Category, isNavExpanded: boolean, filteredCategories: Category[], handleOnCategorySearch: Function, handleParentCategoryOnClick: Function) =>
    <React.Fragment>
        <div className={`col-12 collapse ${isNavExpanded ? "show" : "" }`}>
            {categories(filteredCategories, null, handleOnCategorySearch, handleParentCategoryOnClick)}
        </div>
        <div className={`col-12 collapse ${isNavExpanded ? "" : "show" }`}>
            {breadcrumbs}
            {categoryDescription(currentCategory)}
        </div>
    </React.Fragment>;
