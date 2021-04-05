import React, { Component } from 'react'
import Title from './Title'
import { ProductConsumer } from '../context'
import Product from './Product'


export default class ProductList extends Component {
    render() {
        return (
            <>
                <Title title="our products"/>
                <div>
                    <ProductConsumer>
                    {
                        (data) => {
                            return data.products.map(product => {
                                return(
                                    <Product key={product.id} product={product} addToCart={data.addToCart} />
                                )
                            })
                        }
                    }
                    </ProductConsumer>
                </div>
            </>
        )
    }
}
