import './App.css';
// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./components/blog/Blog"
import Cart from "./components/cart/Cart"
import IndexLogin from './components/Login/IndexLogin';

function App() {
  return (
    <div className="App">
      <Navbar/>
        {/* <Router>
          <Switch>
            <Route path="/" exact component={Navbar} />
            <Route path="/heat" exact component={} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/my-account" exact component={IndexLogin} />
            <Route>404 not not found</Route>

          </Switch>
        </Router> */}
    </div>
  );
}

export default App;
