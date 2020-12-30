import React from "react";

export default function CardList({image} :any){
  return (
    <div className="card--list">
      <div className="card--image">
        <img src={image} alt="" />
      </div>
      <div className="card--details">
        <h2 className="title">Product title</h2>
        <div className="desc">Space for a small product description</div>
        <div className="start--group">
          <img src="/assets/icon-star-black.svg" alt="" />
          <img src="/assets/icon-star-black.svg" alt="" />
          <img src="/assets/icon-star-black.svg" alt="" />
          <img src="/assets/icon-star-black.svg" alt="" />
          <img src="/assets/icon-star-none.svg" alt="" />
        </div>
        <div className="details">
          <ul className="left">
            <li>
              <span>Fresheness</span>
            </li>
            <li>
              <span>Farm</span>
            </li>
            <li>
              <span>Delivery</span>
            </li>
            <li>
              <span>Stock</span>
            </li>
          </ul>
          <ul className="right">
            <li>
              <span>
                <span className="green">New</span> (Extra fresh)
              </span>
            </li>
            <li>
              <span>Grocery Tarm Fields</span>
            </li>
            <li>
              <span>Europe</span>
            </li>
            <li>
              <span className="green">320 pcs</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="card--price">
        <div className="card--price__top">
          <p className="price">36.99 USD</p>
          <p className="discount">48.56</p>
        </div>
        <div className="card--price__mid">
          <p>Free Shipping</p>
          <p>Delivery in 1 day</p>
        </div>
        <div className="card--price__bot">
          <div className="btn btn-buy">
            <span>Product Detail</span>
            <img src="/assets/right-white.svg" alt="" />
          </div>
          <div className="btn--more">
            <img src="/assets/icon-heart.svg" alt="" />
            <span>Add to wish list</span>
          </div>
        </div>
      </div>
    </div>
  );
}
