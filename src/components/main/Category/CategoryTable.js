import React, { Component } from 'react';
import ReactTable from "react-table";

class CategoryTable extends Component {

    render() {
        
        const categories = this.props.categories;
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
            },]

        return (
            <div className='table-responsive col-md-8'>
                <ReactTable className='-highlight' defaultPageSize={10}
                    data={categories}
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
export default CategoryTable;