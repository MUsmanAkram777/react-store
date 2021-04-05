import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CartTotals extends Component {
    render() {
        let {cartSubTotal,cartTax,cartTotal} = this.props.data
        return (
            <div className="card shadow p-3">
                <p><span className="font-weight-bold">Cart Subtotal: </span>Rs. {cartSubTotal}</p>
                <p><span className="font-weight-bold">Cart Tax: </span>Rs. {cartTax}</p>
                <p><span className="font-weight-bold">Cart Total: </span>Rs. {cartTotal}</p>
                <Link to="/" className="btn btn-outline-primary btn-sm mt-2 prodAddToCart" onClick={()=>this.props.data.clearCart()}>Checkout</Link>
            </div>
        )
    }
}
