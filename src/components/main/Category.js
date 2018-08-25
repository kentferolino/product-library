import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from "../../actions/categoryActions"

import CategoryTable from "./Category/CategoryTable"
class Category extends Component {

    componentWillMount() {
        this.props.dispatch(fetchCategories());
    }

    render() {
        const { categories } = this.props;
        return (
            <div>
                Category Page
                <CategoryTable categories={categories}  />
            </div>
        );
    }
}
export default connect((store) => {
    return {
        categories: store.categories.categories,
        categoriesFetched: store.categories.fetched
    };
})(Category);