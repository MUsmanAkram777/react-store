import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        let {product,value} = this.props
        let {id,title,img,price,count,total} = product
        return (
            <>
                <div className="row mb-2 mt-2">
                    <div className="col-10 mx-auto col-md-2 align-self-center text-center">
                        <img  className="img-fluid img-responsive rounded product-image" src={"/data/"+img}/>
                    </div>
                    <div className="col-10 mx-auto col-md-2 align-self-center text-center">
                        <span className="d-md-none font-weight-bold">
                            Prdouct: 
                        </span>
                        <span className="text-uppercase"> {title}</span>
                    </div>
                    <div className="col-10 mx-auto col-md-2 align-self-center text-center">
                        <span className="d-md-none font-weight-bold">
                            Price: 
                        </span>
                        <span className="text-uppercase"> Rs. {price}</span>
                    </div>
                    <div className="col-10 mx-auto col-md-2 align-self-center text-center">
                        <div className="d-flex justify-content-center">
                            <span className="d-md-none font-weight-bold">
                                Quantity: 
                            </span>
                            <span className="btnsCount d-block" onClick={()=>value.decrement(id)}>-</span>
                            <input className="quantity" type="number" name="count" id="count" min="0" max="5" placeholder="0" value={count} readOnly/>
                            <span className="btnsCount d-block" onClick={()=>value.increment(id)}>+</span>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-md-2 align-self-center text-center">
                        <span className="d-md-none font-weight-bold">
                            Remove Item: 
                        </span><i className="fa fa-trash trashCan" onClick={()=>value.removeItem(id)}></i>
                    </div>
                    <div className="col-10 mx-auto col-md-2 align-self-center text-center ">
                        <span className="d-md-none font-weight-bold">
                            Item Total: 
                        </span>
                        <span className="text-uppercase"> Rs. {total}</span>
                    </div>
                </div>
            <hr/>
            </>
        )
    }
}
