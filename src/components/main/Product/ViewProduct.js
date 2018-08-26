import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneProduct } from "../../../actions/productActions"
import { Link } from 'react-router-dom'

class ViewProduct extends Component {

    componentDidMount() {
        const productID = this.props.match.params.id;
        this.props.dispatch(fetchOneProduct(productID));
    }

    render() {
        const { product } = this.props;
        if (!product) {
            return null;
        }
        return (
            <div>
                <div className="col-md-6">
                    <h2>View Product</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" class="form-control" value={product.name} disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" class="form-control" value={product.description} disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text" class="form-control" value={product.price} disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category_name">Category Name</label>
                        <input type="text" class="form-control" value={product.category_name} disabled />
                    </div>
                </div>
                <div className="col-md-6"></div>
                {/* Link to Home Page */}
                <Link to='/library/products/'>Back to List</Link>
            </div>
        );
    }
}

export default connect((store) => {
    return {
        product: store.products.product,
        productFetched: store.products.fetched
    };
})(ViewProduct);