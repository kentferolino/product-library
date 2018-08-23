import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Category from '../components/main/Category';
import Product from '../components/main/Product';


class ProductLibrary extends Component {
    render() {
        const paramsHere = this.props;
        const urlHere = paramsHere.match.url;
        return (
            <div>
                Product Library
                <ul>
                    <li>
                        <Link to={paramsHere.match.url + '/products'}>Products</Link>
                    </li>
                    <li>
                        <Link to={paramsHere.match.url + '/categories'}>Categories</Link>
                    </li>
                </ul>
                
                <Route exact path={paramsHere.match.url + '/products'} component={Product}/>
                <Route path={paramsHere.match.url + '/categories'} component={Category} />
            </div>
        );
    }
}

export default ProductLibrary;
