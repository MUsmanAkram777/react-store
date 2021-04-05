import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Product extends Component {
    render() {
        let {id,title,info,price,company,specs,img,slug,inCart} = this.props.product
        return (
            <div className="row pt-4 pb-4 pl-3 pr-3 bg-white border rounded mb-4 shadow">
                <div className="col-md-3 mt-1">
                    <div className="prodImgDiv">
                        <Link to={`/details/${slug}`}>
                            <img className="img-fluid img-responsive rounded product-image" src={"data/"+img}/>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 mt-1 align-self-center">
                    <h4 className="prodTitle">{title}
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
                    
                    <div className="mt-1 mb-1 spec-1 text-truncate">
                        {
                            specs.map( spec => {
                                return (
                                    <span className="pr-2" key={spec}>
                                        <span className="dot"></span>
                                        <span>{spec}</span>
                                    </span>
                                )
                            })
                        }
                    </div>
                    <p className="text-justify text-truncate para mb-0">
                        {info}
                    </p>
                </div>
                <div className="align-items-center align-content-center align-self-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1">Rs.{price}</h4>
                        {/* <span className="strike-text">$20.99</span> */}
                    </div>
                    <h6>Product by: <span className="text-success text-capitalize">{company}</span></h6>
                    <div className="d-flex flex-column mt-4">
                        <Link to={`/details/${slug}`} className="btn btn-primary btn-sm prodDetailsBtn" type="button">Details</Link>
                        <button className="btn btn-outline-primary btn-sm mt-2 prodAddToCart"
                            disabled={inCart ? true : false}
                            onClick={()=>this.props.addToCart(id)}>
                                {
                                    inCart ? "In Cart" : "Add to Cart"
                                }
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
