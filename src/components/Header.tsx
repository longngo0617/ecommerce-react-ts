import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Api from "../helper/Api";
import { logout } from "../pages/login/Login.actions";
import { openCart } from "./cart/Cart.actions";

function takeLessCategory(ele: any, num: number) {
  let content = [];
  for (let i = 0; i < num; i++) {
    content.push(
      <li key={i}>
        <span className="title">{ele[i].title}</span>
        <span>
          <img src="/assets/icon-down.svg" alt="" />
        </span>
      </li>
    );
  }
  return content;
}
function _logout(dispatch: any, history: any) {
  dispatch(logout());
  history.push("/login");
}
export default function Header() {
  const [categories, setCategories] = useState<any | null>();
  useEffect(() => {
    Api("categories")
      .get()
      .then((res) => {
        setCategories(res);
      });
  }, []);
  const history = useHistory();
  const dispatch = useDispatch();
  const total = useSelector((state: AppState) => state.cart.list);
  const login = useSelector((state: AppState) => state.login);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header--top">
            <ul className="contact">
              <li>Chat with us</li>
              <li>+420 336 775 664</li>
              <li>info@freshnesecom.com</li>
            </ul>
            <ul className="about">
              <li>Blog</li>
              <li>About us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="header--mid">
            <Link className="logo" to="/category">
              <img src="/assets/logo.svg" alt="logo" />
            </Link>
            <div className="search">
              <div className="search-category">
                <div className="head">
                  <span className="title">All categories</span>
                  <span className="arrow">
                    <img src="/assets/icon-down.svg" alt="" />
                  </span>
                </div>
              </div>
              <input
                className="search-input"
                type="text"
                placeholder="Search products, categories..."
              />
              <div className="search-icon">
                <img src="/assets/icon-search.svg" alt="search" />
              </div>
            </div>
            <div className="info">
              {login?.userInfo?.name ? (
                <div className="stardust-popover">
                  <div className="stardust-popover__target" role="button">
                    <div className="account">
                      <div className="avatar"></div>
                      <div className="username">{login.userInfo.name}</div>
                    </div>
                  </div>
                  <div className="stardust-popover__popover stardust-popover__popover--show">
                    <div className="stardust-popover__arrow">
                      <div className="stardust-popover__arrow--inner"></div>
                    </div>
                    <div className="account__content">
                        <Link to="/profile" className="account__button">My account</Link>
                        <Link to="/profile"className="account__button">Purchase menu</Link>
                        <div className="account__button" onClick={()=>_logout(dispatch,history)}>Log out</div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link className="user" to="/login">
                  <img src="/assets/icon-user.svg" alt="user" />
                </Link>
              )}
              <div className="cart" onClick={() => dispatch(openCart())}>
                <img src="/assets/icon-cart.svg" alt="cart" />
                {total.length > 0 && (
                  <span className="total">{total.length}</span>
                )}
              </div>
            </div>
          </div>
          <div className="header--bottom">
            <ul className="wrap">
              {!categories ? null : takeLessCategory(categories, 5)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
