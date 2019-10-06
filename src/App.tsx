import * as React from "react";
import { categoryTest, filterCategory, categoriesSidebar, updateCategory } from "./components/categoryDropdown";
import { isSmallDisplay } from "./code/bootstrapSizes";
import { TabContent, Category, CategoryDescription, UseCase, Product } from "./code/models";
import { laptops } from "./code/laptops";
import { header } from "./components/header";
import { breadcrumbs } from "./components/breadcrumbs";
import { useCaseTabs } from "./components/useCaseTabs";

const noImage = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

export default class App extends React.Component<{}, {}> {
    state = {
        currentCategory: { name: "Nick" } as Category,
        isNavExpanded: false,
        categories: categoryTest,
        isSmallDisplayResult: isSmallDisplay(window),
        searchString: ""
    }

    componentDidMount = () => {
        window.addEventListener("resize", () => this.setState({ isSmallDisplayResult: isSmallDisplay(window) }));
    };

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.setState({ isSmallDisplayResult: isSmallDisplay(window) }));
    }

    render() {
        const { isNavExpanded, isSmallDisplayResult, categories, searchString } = this.state;

        // We need to deep clone the javascript array "[...x]" syntax will not work, this is only a shallow clone.
        const clonedCategories = JSON.parse(JSON.stringify(categories));
        const filteredCategories = clonedCategories.filter(x => filterCategory(x, searchString));

        return (
            <React.Fragment>
                {header(isNavExpanded, this.handleNavOnClick, isSmallDisplayResult)}

                <div className="container-fluid">
                    <div className="row">
                        <div className={`${isSmallDisplayResult ? "col-12 collapse" : "col-3"} ${isNavExpanded ? "show" : ""}`}>
                            {categoriesSidebar(filteredCategories, null, this.handleOnCategorySearch, this.handleParentCategoryOnClick)}
                        </div>
                        <div className={`${isSmallDisplayResult ? "col-12 collapse" : "col-9"} ${isNavExpanded ? "" : "show"}`}>
                            {breadcrumbs}
                            {categoryDescription(laptops)}
                        </div>
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
        const categoriesUpdate = this.state.categories.map(x => updateCategory(category, x));

        this.setState({ categories: categoriesUpdate });
    }

    handleOnCategorySearch = (searchString: string) => {
        this.setState({ searchString });
    }

    handleNavOnClick = (isNavExpanded: boolean) => {
        this.setState({ isNavExpanded });
    }
}

const categoryDescription = (category: CategoryDescription) =>
    <React.Fragment>
        <div className="mb-4">
            <h1>{category.name}</h1>
            <p className="font-italic text-muted">Last updated {category.lastUpdated.toDateString()}</p>
        </div>

        <h2 className="mb-4">Which {category.name} to buy?</h2>

        {useCaseTabs(category.useCases)}

        <h2 className="mt-4">What makes good {category.name}?</h2>
        <p dangerouslySetInnerHTML={{ __html: category.whatMakesItGood }}></p>

        <h3>Metrics</h3>
        {category.metrics.map(x => {
            return <React.Fragment>
                <h4>{x.name}</h4>
                <p dangerouslySetInnerHTML={{ __html: x.description }}></p>
            </React.Fragment>
        })}
    </React.Fragment>;










