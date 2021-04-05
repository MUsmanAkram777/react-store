import React, { Component } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import { Link} from 'react-router-dom'
import Title from '../Title'
import CartColumns from './CartColumns'
import {ProductConsumer} from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {
                        (data)=>{
                            return (
                                <>
                                <Breadcrumbs>
                                    <li className="active">
                                        <Link to="/cart">Cart</Link>
                                    </li>
                                </Breadcrumbs>
                                {data.cart.length==0 ?
                                <>
                                    <Title title="your cart is empty"/>
                                </>
                                : 
                                <>
                                    <Title title="your cart"/>
                                    <div className="mb-5">
                                        <div className="row">
                                            <div className="col-md-8 p-3 card shadow">
                                                <CartColumns/>
                                                <CartList data={data}/>
                                            </div>
                                            <div className="col-md-4">
                                                <CartTotals data={data} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </>
                                
                                }
                                
                                </>
                            )
                        }
                    }
                </ProductConsumer>
            </div>
        )
    }
}
