import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Category from '../components/main/Category';
import Product from '../components/main/Product';

class ProductLibrary extends Component {
    render() {
        const paramsHere = this.props;
        
        return (
            <div>
                Product Library
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
                <Route exact path={paramsHere.match.url + '/products'} component={Product}/>
                {/* Goes to Category module when the above link for category is selected. */}
                <Route path={paramsHere.match.url + '/categories'} component={Category} />

                {/* Link to Home Page */}
                <Link to='/home'>Back to home</Link>
            </div>
        );
    }
}

export default ProductLibrary;
