import React, { Component } from 'react'
import {storeProducts} from './data/data'

const ProductContext = React.createContext();



class ProductProvider extends Component {
    state={
        products:[],
        cart:[],
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
    }
    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach( item => {
            let singleproduct = {...item}
            tempProducts = [...tempProducts,singleproduct]
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }
    addToCart = (id) =>{
        let tempProducts = [...this.state.products]
        let index = tempProducts.indexOf(this.state.products.find((item)=> item.id===id))
        let product = tempProducts[index]
        product.inCart = true
        product.count = 1
        product.total = product.price * product.count
        this.setState(
            ()=>{
                return {product:tempProducts,cart:[...this.state.cart,product]}        
            },
            ()=>{
                this.addCartTotals()
            }
        )
    }

    increment = (id) => {
        let cartProducts = [...this.state.cart]
        let index = cartProducts.indexOf(this.state.cart.find((item)=> item.id===id))
        let product = cartProducts[index]
        if(product.count===5){
            return '';
        }
        product.count = product.count + 1
        product.total = product.price * product.count
        this.setState(()=>{
            return {cart:[...cartProducts]}
        },()=>{this.addCartTotals()})
    }
    decrement = (id) => {
        let cartProducts = [...this.state.cart]
        let index = cartProducts.indexOf(this.state.cart.find((item)=> item.id===id))
        let product = cartProducts[index]
        if(product.count===0){
            this.removeItem(id)
        }else{
            product.count = product.count - 1
            product.total = product.price * product.count
            this.setState(()=>{
                return {cart:[...cartProducts]}
            },()=>{this.addCartTotals()})
        }
    }
    removeItem = (id) =>{
        // console.log(id);
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        let tc = tempCart.filter((item) => item.id!==id)
        
        let index = tempProducts.indexOf(this.state.cart.find((item)=> item.id===id))
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0

        this.setState(
            () => {
                return {
                    cart:[...tc],
                    products:[...tempProducts]
                }
            },
            () => {
                this.addCartTotals()
            }
        )


    }
    clearCart = () => {
        this.setState(()=>{
            return {cart:[]}
        },()=>{
            this.setProducts()
            this.addCartTotals()
        })
    }

    addCartTotals = () =>{
        let subTotal = 0
        this.state.cart.map(item=> subTotal+=item.total)
        let tmpTax = subTotal * 0.05
        let tax = parseFloat(tmpTax.toFixed(2))
        let total = subTotal + tax
        this.setState(()=>{
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal:total
            }
        })
    }

    componentDidMount(){
        this.setProducts();
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart:this.addToCart,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider , ProductConsumer}