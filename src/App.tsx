import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Category from "./pages/category/Category";
import Details from "./pages/details/Details";
import Checkout from "./pages/checkout/Checkout";
import Cart from "./components/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import PrivateRouter from "./components/PrivateRouter";
import PopupSuccess from "./pages/profile/components/PopupSuccess";
import { useSelector } from "react-redux";

function App() {
  const routes = [
    { path: "/category/:id?", name: "Category", Component: Category },
    { path: "/product-details/:slug", name: "ProductDetails",Component: Details,},
    { path: "/checkout", name: "Check Out", Component: Checkout },
    { path: "/user/account", name: "Profile", private: true, Component: Profile },
    { path: "/register", name: "Register", Component: Register },
    { path: "/login", name: "Login", Component: Login },
    { path: "/", name: "Home", Component: Home },
  ];
  const popup = useSelector((state:AppState) => state.update.popup)
  return (
    <>
      <Router>
        <Cart />
        {popup && <PopupSuccess/>}
        <Header />
        <Switch>
          {routes.map((e: any) => {
            return e.private ? <PrivateRouter key={e.path} path={e.path} component={e.Component} />
            : <Route key={e.path} path={e.path}>
              <e.Component />
            </Route>
          })}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
