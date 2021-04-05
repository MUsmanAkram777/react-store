import React, { Component } from 'react'
import Breadcrumbs from "./Breadcrumbs";
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (data) => {
                        let matchedProduct = data.products.filter( product => product.slug === this.props.match.params.slug)                     
                        return matchedProduct.map(mp=>{
                            return (
                                <div key={mp.id}>
                                    <Breadcrumbs>
                                        <li className="active">
                                            <Link to={`/details/${mp.slug}`}> {mp.title} </Link>
                                        </li>
                                    </Breadcrumbs>
                                    <div className="row pt-4 pb-4 pl-3 pr-3 bg-white border rounded mt-3 mb-5 shadow">
                                        <div className="col-md-4 mt-1">
                                            <div className="prodImgDiv">
                                                <Link to={`/details/${mp.slug}`}>
                                                    <img className="img-fluid img-responsive rounded product-image" src={"/data/"+mp.img}/>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-8 mt-1 align-self-center">
                                            <h4 className="prodTitle">{mp.title}
                                                <div className="ml-2" style={{'display':'inline-block'}}>
                                                    <div className="ratings mr-2">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <span style={{'fontSize':'14px'}}>(5)</span>
                                            </h4>
                                            <div className="d-flex flex-row align-items-center">
                                                <h4 className="mr-1">Rs.{mp.price}</h4>
                                                {/* <span className="strike-text">$20.99</span> */}
                                            </div>
                                            <h6>Product by: <span className="text-success text-capitalize">{mp.company}</span></h6>
                                            <div className="mt-1 mb-1 para">
                                                <strong>Specifications:</strong><br/>
                                                {
                                                    mp.specs.map( spec => {
                                                        return (
                                                            <span className="pr-2 spec-1" key={spec}>
                                                                <span className="dot"></span>
                                                                <span>{spec}</span><br/>
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <p className="text-justify para mb-0">
                                                <strong>Description: </strong>{mp.info}
                                            </p>
                                            <div className="mt-4">
                                                <Link to="/" className="btn btn-primary btn-sm prodDetailsBtn d-inline px-3 py-2 mr-4" 
                                                    type="button">
                                                        Back to products
                                                </Link>
                                                <button className="btn btn-outline-primary btn-sm prodAddToCart d-inline px-3 py-2"
                                                    disabled={mp.inCart ? true : false}
                                                    onClick={()=>data.addToCart(mp.id)}>
                                                        {
                                                            mp.inCart ? "In Cart" : "Add to Cart"
                                                        }
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        
                    }
                }
            </ProductConsumer>
        )
    }
}
