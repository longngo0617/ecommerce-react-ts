import React from "react";

export default function Order() {
  return (
    <div className="order">
      <div className="order--inner">
        <div className="step">
          <h3 className="step--title">Order Summary</h3>
          <div className="step--required">
            <p>
              Price can change depending on shipping method and taxes of your
              state.
            </p>
          </div>
          <div className="cart">
            <div className="cart--body">
              <div className="cart--item">
                <div className="image">
                  <img src="/assets/product-1.jpg" alt="" />
                </div>
                <div className="wishlist">
                  <img src="/assets/icon-heart-organe.svg" alt="" />
                  <span>Wishlist</span>
                </div>
                <div className="close">
                  <img src="/assets/icon-close.svg" alt="" />
                  <span>remove</span>
                </div>
                <div className="name">product title</div>
                <div className="details">
                  <div className="details--row">
                    <span className="title">Farm:</span>
                    <span className="desc">Tharamis Farm</span>
                  </div>
                  <div className="details--row">
                    <span className="title">Freshness:</span>
                    <span className="desc">1 day old</span>
                  </div>
                </div>
                <div className="group-star">
                  <img src="/assets/icon-star.svg" alt="" />
                  <img src="/assets/icon-star.svg" alt="" />
                  <img src="/assets/icon-star.svg" alt="" />
                  <img src="/assets/icon-star.svg" alt="" />
                  <img src="/assets/icon-star-none.svg" alt="" />
                </div>
                <div className="bottom">
                  <div className="price">
                    36.99 USD
                    <span>48.56 USD</span>
                  </div>
                  <div className="quantity">
                    <span className="btn--increase">+</span>
                    <span>0</span>
                    <span className="btn--decrease">-</span>
                  </div>
                </div>
              </div>
              <div className="cart--item">
                <div className="image">
                  <img src="/assets/product-1.jpg" alt="" />
                </div>
                <div className="wishlist">
                  <img src="/assets/icon-heart-organe.svg" alt="" />
                  <span>Wishlist</span>
                </div>
                <div className="close">
                  <img src="/assets/icon-close.svg" alt="" />
                  <span>remove</span>
                </div>
                <div className="name">product title</div>
                <div className="details">
                  <div className="details--row">
                    <span className="title">Farm:</span>
                    <span className="desc">Tharamis Farm</span>
                  </div>
                  <div className="details--row">
                    <span className="title">Freshness:</span>
                    <span className="desc">1 day old</span>
                  </div>
                </div>
                <div className="group-star">
                  <img src="/assets/icon-star.svg" alt="" />
                  <img src="/assets/icon-star.svg" alt="" />
                  <img src="/assets/icon-star.svg" alt="" />
                  <img src="/assets/icon-star.svg" alt="" />
                  <img src="/assets/icon-star-none.svg" alt="" />
                </div>
                <div className="bottom">
                  <div className="price">
                    36.99 USD
                    <span>48.56 USD</span>
                  </div>
                  <div className="quantity">
                    <span className="btn--increase">-</span>
                    <span>0</span>
                    <span className="btn--decrease">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="subtotal">
            <div className="subtotal--row">
              <span>Subtotal</span>
              <span>73.98 USD</span>
            </div>
            <div className="subtotal--row">
              <span>Tax</span>
              <span>17% 16.53 USD</span>
            </div>
            <div className="subtotal--row">
              <span>Shipping</span>
              <span>0 USD</span>
            </div>
            <div className="promo">
              <input type="text" name="promo" placeholder="Apply promo code"/>
              <button className="btn--apply">Apply now</button>
            </div>
          </div>
          <div className="total">
            <div className="total--title">
              <h4>Total Order</h4>
              <p>Guaranteed delivery day: June 12, 2020</p>
            </div>
            <div className="total--price">89.84 USD</div>
          </div>
        </div>
      </div>
    </div>
  );
}
