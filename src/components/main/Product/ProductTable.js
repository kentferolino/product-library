import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class ProductTable extends Component {

    render() {
        
        const products = this.props.products;
        const options = {
            page:1,
            prePage:  '⟵',
            nextPage: '⟶',
            firstPage: '⟸',
            lastPage: '⟹',
            paginationShowsTotal: products.length
          }
        const mappedProducts = products.map(product => <li key={product.id}> {product.name} {product.description} </li>)
        return (
            <div>
                <BootstrapTable data={products} pagination={true}  options={options}>
                    <TableHeaderColumn isKey dataField='id'>
                        ID
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>
                        Name
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='description'>
                        Description
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='category_name'>
                        Category
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}
export default ProductTable;