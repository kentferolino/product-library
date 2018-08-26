import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Category from '../components/main/Category';
import Product from '../components/main/Product';
import AddProduct from '../components/main/Product/AddProduct';
import ViewProduct from '../components/main/Product/ViewProduct';

class ProductLibrary extends Component {
    render() {
        const paramsHere = this.props;
        return (
            <div>
                <h2>Product Library</h2>
                <small>This module is interacting with a locally deployed API and database.</small><br /><br />
                <ul>
                    <li>
                        {/* Goes to Product Module. Default as get the product list. */}
                        <Link to={paramsHere.match.url + '/products'}>Products</Link>
                    </li>
                    <li>
                        {/* Goes to Category Module. Default as get the category list. */}
                        <Link to={paramsHere.match.url + '/categories'}>Categories</Link>
                    </li>
                </ul>

                {/* Goes to product module as default. */}
                <Route exact path={paramsHere.match.url + '/products'} component={Product} />
                {/* Goes to create product. */}
                <Route path={paramsHere.match.url + '/products/create/'} component={AddProduct} />
                {/* Goes to view product. */}
                <Route path={paramsHere.match.url + '/products/view/:id'} component={ViewProduct} />
                {/* Goes to Category module when the above link for category is selected. */}
                <Route path={paramsHere.match.url + '/categories'} component={Category} />


            </div>
        );
    }
}

export default ProductLibrary;
