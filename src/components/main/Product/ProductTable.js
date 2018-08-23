import React, { Component } from 'react';
import ReactTable from "react-table";

class ProductTable extends Component {

    deleteProduct = id => {
        this.props.deleteProduct(id);
    }

    render() {

        const products = this.props.products;
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
                width: 400,
            },
            {
                Header: 'Category',
                accessor: 'category_name',
                headerClassName: 'text-left bg-success',
                width: 250,
            },
            {
                Header: 'Action',
                accessor: 'id',
                headerClassName: 'text-left bg-success',
                Cell: props => <button onClick={this.deleteProduct.bind(this,props.value)}><i className="fa fa-trash text-danger"></i></button>,
                width: 100,
            },]

        const mappedProducts = products.map(product => <li key={product.id}> {product.name} {product.description} </li>)
        return (
            <div className='table-responsive'>
                <ReactTable className='-highlight' defaultPageSize={10}
                    data={products}
                    columns={columns}
                />
            </div>
        );
    }
}
export default ProductTable;