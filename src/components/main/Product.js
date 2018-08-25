import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                Products Page
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