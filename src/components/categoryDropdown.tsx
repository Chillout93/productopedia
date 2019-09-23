import React from "react";

export const categoryTest: Category[] = [
    { id: 1, name: "test1", children: null, products: null, isVisible: false },
    {
        id: 2, name: "test2", children: [
            {
                id: 3, name: "test2.1", children: [
                    { id: 4, name: "test2.1.1", children: null, products: null, isVisible: false },
                    { id: 5, name: "test2.1.2", children: null, products: null, isVisible: false },
                    { id: 6, name: "test2.1.3", children: null, products: null, isVisible: false }
                ], 
                products: null,
                isVisible: false
            },
            { id: 7, name: "test2.2", children: null, products: null, isVisible: false },
            { id: 8, name: "test2.3", children: null, products: null, isVisible: false },
        ], 
        products: null,
        isVisible: false
    },
    { id: 9, name: "test3", children: null, products: null, isVisible: false },
    { id: 10, name: "test4", children: null, products: null, isVisible: false },
    {
        id: 11,
        name: "test5", children: [
            {
                id: 12,
                name: "test2.1", children: [
                    { id: 13, name: "test2.1.1", children: null, products: null, isVisible: false },
                    { id: 14, name: "test2.1.2", children: null, products: null, isVisible: false },
                    { id: 15, name: "test2.1.3", children: null, products: null, isVisible: false }
                ], 
                products: null,
                isVisible: false
            },
            { id: 16, name: "test2.2", children: null, products: null, isVisible: false },
            { id: 17, name: "test2.3", children: null, products: null, isVisible: false },
        ], 
        products: null,
        isVisible: false
    }
];

export const categories = (categories: Category[], handleOnCategoryClick: Function, handleOnCategorySearch: Function, handleParentCategoryOnClick: Function) =>
    <React.Fragment>
        <input type="text" className="form-control mb-3" placeholder="I want..." onKeyUp={(e) => handleOnCategorySearch(e.currentTarget.value)} />
        <ul className="list-group">
            {categories.map(x => renderCategory(x, 0, handleParentCategoryOnClick))}
        </ul>
    </React.Fragment>;

export const filterCategory = (category: Category, searchTerm: string) : boolean => {
    if (category.children && category.children.length > 0) 
        category.children = category.children.filter(x => filterCategory(x, searchTerm));

    return category.name.indexOf(searchTerm) !== -1 ||  (category.children && category.children.length > 0);
}

export const updateCategory = (category: Category, ) : void => {
    category.isVisible
}

const renderCategory = (category: Category, index: number, handleParentCategoryOnClick: Function) =>
    <React.Fragment>
        <li className="list-group-item" onClick={() => handleParentCategoryOnClick(category)} style={{ cursor: "pointer", fontWeight: category.children && category.children.length > 0 ? "bold" : "normal"}}><span style={{ paddingLeft: 20 * index }}></span>{category.children&& category.children.length>0 ? <i className={`fa fa-chevron-${category.isVisible ? "down" : "right" } mr-1`}></i> : null}{category.name}</li>
        {category.children !== null && category.children.length > 0 && category.isVisible
            ? <ul className="list-group">
                {category.children.map(x => renderCategory(x, index + 1, handleParentCategoryOnClick))}
            </ul>
            : null}
    </React.Fragment>;
