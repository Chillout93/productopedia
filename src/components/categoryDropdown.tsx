import React from "react";

export const categoryTest: Category[] = [
    { name: "test1", children: null, products: null },
    {
        name: "test2", children: [
            {
                name: "test2.1", children: [
                    { name: "test2.1.1", children: null, products: null },
                    { name: "test2.1.2", children: null, products: null },
                    { name: "test2.1.3", children: null, products: null }
                ], products: null
            },
            { name: "test2.2", children: null, products: null },
            { name: "test2.3", children: null, products: null },
        ], products: null
    },
    { name: "test3", children: null, products: null },
    { name: "test4", children: null, products: null },
    {
        name: "test5", children: [
            {
                name: "test2.1", children: [
                    { name: "test2.1.1", children: null, products: null },
                    { name: "test2.1.2", children: null, products: null },
                    { name: "test2.1.3", children: null, products: null }
                ], products: null
            },
            { name: "test2.2", children: null, products: null },
            { name: "test2.3", children: null, products: null },
        ], products: null
    }
];

export const categories = (categories: Category[], handleOnCategoryClick: Function) =>
    <React.Fragment>
        <input type="text" className="form-control mb-3" placeholder="I want..." />
        <ul className="list-group">
            {categories.map(x => renderCategory(x))}
        </ul>
    </React.Fragment>;

const renderCategory = (category: Category) =>
    <React.Fragment>
        <li className="list-group-item">{category.name}</li>
        {category.children !== null && category.children.length > 0
            ? <ul className="list-group">
                {category.children.map(x => renderCategory(x))}
            </ul>
            : null}
    </React.Fragment>;
