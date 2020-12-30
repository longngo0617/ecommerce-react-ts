import React from "react";
import TabReviews from './TabReviews'
export default function ProductDetails() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="product--image">
          <img src="/assets/details1.jpg" alt="" />
          <img src="/assets/details2.jpg" alt="" />
          <img src="/assets/details3.jpg" alt="" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="product--details">
          <h2 className="title">Carrots from Tomissy Farm</h2>
          <div className="star--group">
            <img src="/assets/icon-star.svg" alt="" />
            <img src="/assets/icon-star.svg" alt="" />
            <img src="/assets/icon-star.svg" alt="" />
            <img src="/assets/icon-star.svg" alt="" />
            <img src="/assets/icon-star-none.svg" alt="" />
            <span>(1 customer review)</span>
          </div>
          <p className="desc">
            Carrots from Tomissy Farm are one of the best on the market. Tomisso
            and his family are giving a full love to his Bio products. Tomisso’s
            carrots are growing on the fields naturally.
          </p>
          <div className="product--wrap__info">
            <div className="content">
              <div className="name-wrap">
                <span className="name">SKU:</span>
                <span className="name">Category</span>
                <span className="name">Stock:</span>
                <span className="name">Farm</span>
              </div>
              <div className="info">
                <span>76645</span>
                <span>Vegetables</span>
                <span className="green">In Stock</span>
                <span>Grocery Tarm Fields</span>
              </div>
            </div>
            <div className="content">
              <div className="name-wrap">
                <span className="name">Freshness:</span>
                <span className="name">In Stock</span>
                <span className="name">Buy by:</span>
                <span className="name">Delivery:</span>
              </div>
              <div className="info">
                <span>1 days old</span>
                <span>pcs, kgs, box, pack</span>
                <span>in 2 days</span>
                <span>Czech republic</span>
              </div>
            </div>
          </div>
          <div className="product--wrap__btn">
            <div className="price--group">
              <span className="price">36.23 USD</span>
              <span className="discount">48.56 USD</span>
            </div>
            <div className="btn--group">
              <div className="quantity">
                <span className="btn--increase">+</span>
                <span>0</span>
                <span className="btn--decrease">-</span>
              </div>
              <div className="btn btn-buy">
                <img src="/assets/icon-add.svg" alt="" />
                <span>Add to cart</span>
              </div>
            </div>
          </div>
          <div className="wish--list">
              <img src="/assets/icon-heart-organe.svg" alt="" />
              <span>Add to wish list</span>
          </div>
          <TabReviews/>
        </div>
      </div>
    </div>
  );
}
