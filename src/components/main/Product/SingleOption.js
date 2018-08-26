import React, { Component } from "react";

const SingleOption = props => {
    return (
        <option value={props.value}>{props.name}</option>
    )
}
export default SingleOption;