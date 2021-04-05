import React, { Component } from 'react'
import CartItem from './CartItem'

export default class CartList extends Component {
    render() {
        let {data} = this.props

        return (
            <>
                { data.cart.map(cartItem => {
                    return <CartItem product={cartItem} key={cartItem.id+cartItem.title} value={data}/>
                })}
            </>
        )
    }
}
