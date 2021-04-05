import {Switch,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import ProductList from './components/ProductList'
import Details from './components/Details'
import Navbar from './components/Navbar'
import Cart from './components/Cart/Cart'
import Deafult from './components/Deafult'
import Footer from './components/Footer'


function App() {
  return (
    <div className="bodyClass">
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/details/:slug" component={Details} />
          <Route component={Deafult} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
