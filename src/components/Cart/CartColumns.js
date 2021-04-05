import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container mb-3 d-none d-md-block">
                <div className="row">
                    <div className="col-10 mx-auto col-md-2 text-center">
                        <strong className="text-uppercase">products</strong>
                    </div>
                    <div className="col-10 mx-auto col-md-2 text-center">
                        <strong className="text-uppercase">Name</strong>
                    </div>
                    <div className="col-10 mx-auto col-md-2 text-center">
                        <strong className="text-uppercase">price</strong>
                    </div>
                    <div className="col-10 mx-auto col-md-2 text-center">
                        <strong className="text-uppercase">quantity</strong>
                    </div>
                    <div className="col-10 mx-auto col-md-2 text-center">
                        <strong className="text-uppercase ml-4">remove</strong>
                    </div>
                    <div className="col-10 mx-auto col-md-2 text-center">
                        <strong className="text-uppercase ml-4">total</strong>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}
