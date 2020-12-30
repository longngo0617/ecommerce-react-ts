import React, { useState } from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Category from "./pages/category/Category";
import Details from "./pages/details/Details";
import Checkout from "./pages/checkout/Checkout";
import Cart from "./components/Cart";

function App() {
  const routes = [
    { path: "/category", name: "Category", Component: Category },
    { path: "/product-details", name: "ProductDetails", Component: Details },
    { path: "/checkout", name: "Check Out", Component: Checkout },
    { path: "/", name: "Home", Component: Home },
  ];
  let [cartState, setCartState] = useState(false);
  return (
    <>
      <Cart cartState={cartState} setCartState={setCartState} />
      <Header setCartState={setCartState} />
      <Router>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
