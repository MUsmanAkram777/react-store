import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'

export default class Navbar extends Component {
    state = {
        path:'/'
    }
    linkHandler = () => {
        this.setState(()=>{
            return {path:window.location.pathname}
        })
    }
    
    render() {
        
        return (
            <div className="container-fluid">
                <div className="row navbar bg-dark">
                    <div className="container">
                        <div className="col-md-3">
                            <Link className="navbar-brand brandColor" to="/">
                                <img src= {'logo.png' }className="img-container" style={{width:'200px'}}/>
                            </Link>
                        </div>
                        <div className="col-md-5">
                            <ul className="navnav">
                                <Link to="/" className={this.state.path == "/" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={this.linkHandler}>
                                    Home
                                </Link>
                                <ProductConsumer>
                                    {
                                        data => {
                                            return (
                                                <Link to="/cart" className={this.state.path == "/cart" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={this.linkHandler}>
                                                    Cart {data.cart.length !==0 ? <sup className="cartQuantity">{data.cart.length} </sup>: ''}
                                                </Link>
                                            )
                                        }
                                    }
                                </ProductConsumer>
                                
                            </ul>
                        </div>
                        {/* <div className="col-md-4">
                            <form className="form-inline justify-content-end">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div> */}
                    </div>
                    
                </div>
            </div>
        )
    }
}
