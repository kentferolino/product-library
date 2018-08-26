import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCategories } from "../../../actions/categoryActions"
import { createProduct } from "../../../actions/productActions"

import SingleOption from './SingleOption';

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            price: 0,
            category_id: 0
        }
    }

    componentWillMount() {
        this.props.dispatch(fetchCategories());
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value });
    }
    onChangeDescription = (event) => {
        this.setState({ description: event.target.value });
    }
    onChangePrice = (event) => {
        this.setState({ price: event.target.value });
    }
    onChangeCategory = (event) => {
        this.setState({ category_id: event.target.value });
    }
    onSave = (event) => {
        event.preventDefault();
        const form_data = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category_id: this.state.category_id
        };
        this.props.dispatch(createProduct(form_data));
        this.setState({
            name: '',
            description: '',
            price: 0,
            category_id: 0
        });
    }

    render() {
        if (!this.props.categoriesFetched) {
            return null;
        }
        const categoryDropdown = this.props.categories.map((e, i) => {
            return (
                <SingleOption key={i} name={e.name} value={e.id} />
            )
        })
        let createdDiv = null;
        if (this.props.created) {
            createdDiv = <div className='text-success'>Product successfully created! <br /></div>
        }
        return (
            <div>
                <div className="col-md-6">
                    <h3>Add Product</h3>
                    {createdDiv}
                    <form onSubmit={this.onSave.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" className="form-control" value={this.state.name} onChange={this.onChangeName.bind(this)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input id="description" type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription.bind(this)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input id="price" type="number" className="form-control" value={this.state.price} onChange={this.onChangePrice.bind(this)} required />
                        </div>
                        <div className="form-group col-md-6 px-0">
                            <label htmlFor="category_name">Category Name</label>
                            <select className="form-control" value={this.state.category_id} onChange={this.onChangeCategory.bind(this)} required>
                                {categoryDropdown}
                            </select>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="col-md-6"></div>
                {/* Go back to product list */}
                <Link to='/library/products'>Back to List</Link>
            </div>
        );
    }
}
export default connect((store) => {
    return {
        categories: store.categories.categories,
        categoriesFetched: store.categories.fetched,
        created: store.products.created
    };
})(AddProduct);