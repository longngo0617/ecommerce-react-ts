import { Link } from "react-router-dom";

export default function Header({setCartState} : any) {
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
            <Link className="logo" to="/">
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
              <Link className="user" to="/login">
                <img src="/assets/icon-user.svg" alt="user" />
              </Link>
              <div className="cart" data-item="4" onClick={()=> setCartState(true)} >
                <img src="/assets/icon-cart.svg" alt="cart" />
              </div>
            </div>
          </div>
          <div className="header--bottom">
            <ul className="wrap">
              <li>
                <span className="title">Bakery</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Fruit and vegetables</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Meat and fish</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Drinks</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Kitchen</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Special nutrition</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Baby</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Pharmacy</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
