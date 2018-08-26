import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ReactTable from 'react-table';
import ViewProduct from './ViewProduct';

class ProductTable extends Component {

    deleteProduct = id => {
        this.props.deleteProduct(id);
    }

    toCurrency(numberString) {
        let number = parseFloat(numberString);
        return number.toLocaleString('USD');
    }

    render() {
        const products = this.props.products;
        const pointerStyle = { cursor: 'pointer' }
        
        const columns = [
            {
                Header: '#',
                accessor: 'id',
                headerClassName: 'text-left bg-success',
                Cell: props => <span className='number'>{props.value}</span>,
                width: 55,
            },
            {
                Header: 'Name',
                accessor: 'name',
                headerClassName: 'text-left bg-success',
                width: 300,
            },
            {
                Header: 'Description',
                accessor: 'description',
                headerClassName: 'text-left bg-success',
                width: 350,
            },
            {
                Header: 'Category',
                accessor: 'category_name',
                headerClassName: 'text-left bg-success',
                width: 200,
            },
            {
                Header: 'Price',
                accessor: 'price',
                headerClassName: 'text-left bg-success',
                Cell: props => <span className='number'>{this.toCurrency(props.value)}</span>,
                width: 100,
            },
            {
                Header: 'Action',
                accessor: 'original',
                headerClassName: 'text-left bg-success',
                Cell: props =>
                    <div>
                        <span style={pointerStyle} className="px-2" onClick={this.deleteProduct.bind(this, props.original.id)}><i className="fa fa-trash text-danger"></i></span>
                        <Link to={'/library/products/' + props.original.id}><span ><i className="fa fa-eye text-primary px-2"></i></span></Link>
                    </div>
            },
        ]


        return (
            <div className='table-responsive'>
                <ReactTable className='-highlight' defaultPageSize={10}
                    data={products}
                    columns={columns}
                    defaultSorted={[
                        {
                            id: 'id',
                            desc: false
                        }
                    ]}
                />
                <Route path='/library/products/item' component={ViewProduct} />
            </div>
        );
    }
}
export default ProductTable;