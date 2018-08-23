import React from 'react';

import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    constructor() {
        super()
    }


    render() {
        const location = this.props.location;

        return (
            <div>
                Header
            </div>
        );
    }
}