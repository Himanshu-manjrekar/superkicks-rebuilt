import './App.css';
// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./components/blog/Blog";
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Heat from './pages/Heat';
import MyAccount from './pages/MyAccount';
import ProductCategory from './components/Products/ProductCategory';
import StoreInfo from './components/Container/StoreInfo';
import ProductDetails from './components/Products/ProductDetails';
import Cart from './components/cart/Cart' 
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/heat" exact component={Heat} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/myaccount" exact component={MyAccount} />
            <Route path="/productcategory" exact component={ProductCategory}/>
            <Route path="/products/:id" exact component={ProductDetails} />
            <Route>404 not not found</Route>
          </Switch>
          <StoreInfo />
          <Footer />
        </Router>
    </div>
  );
}

export default App;
