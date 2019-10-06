import * as React from "react";
import { categoryTest, filterCategory, categoriesSidebar, updateCategory } from "./components/categoryDropdown";
import { isSmallDisplay } from "./code/bootstrapSizes";
import { Category } from "./code/models";
import { laptops } from "./code/laptops";
import { header } from "./components/header";
import { breadcrumbs } from "./components/breadcrumbs";
import { categoryDescription } from "./components/categoryDescription";

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












