import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'
import { fetchProducts, deleteProduct } from "../../actions/productActions"
import ProductTable from "./Product/ProductTable"

class Product extends Component {

    componentWillMount() {
        this.props.dispatch(fetchProducts());
    }

    handleDeleteProduct = id => {
        this.props.dispatch(deleteProduct(id));
    }


    render() {
        const { products } = this.props;
        return (
            <div>
                <h2>Products Page</h2>
                <Link to={'/library/products/create'}>Create Product</Link>
                <ProductTable products={products} deleteProduct={this.handleDeleteProduct.bind(this)} />
            </div>
        );
    }
}
export default connect((store) => {
    return {
        products: store.products.products,
        productsFetched: store.products.fetched
    };
})(Product);