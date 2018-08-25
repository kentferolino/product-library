import React, { Component } from 'react';
import ReactTable from "react-table";

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
                accessor: 'id',
                headerClassName: 'text-left bg-success',
                Cell: props => <button onClick={this.deleteProduct.bind(this, props.value)}><i className="fa fa-trash text-danger"></i></button>,
                width: 100,
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
            </div>
        );
    }
}
export default ProductTable;