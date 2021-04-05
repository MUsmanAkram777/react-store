import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Breadcrumbs extends Component {
    render() {
        return (
            <ul className="breadcrumbs">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <i className="fa fa-arrow-right"></i>
                </li>
                {this.props.children}
            </ul>
        )
    }
}
