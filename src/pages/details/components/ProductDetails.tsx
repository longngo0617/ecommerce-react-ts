import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../components/cart/Cart.actions";
import { productItem } from "../../../type";
import Carousel from "./Carousel";
import TabReviews from "./TabReviews";
export default function ProductDetails(props: productItem) {
  let rating: number = Math.round(props.rating_average);
  const [value, setValue] = useState<number>(0);
  const dispatch = useDispatch();
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="product--image">
            <Carousel images={props.images} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="product--details">
            <h2 className="title">{props.name}</h2>
            <div className="star--group">
              <img src={`/assets/${rating}star.svg`} alt="" />
              <span>( {props.review_count} customer review )</span>
              {/* <span>{props.percent}%</span> */}
            </div>
            <p className="desc">{props.short_description}</p>
            <div className="product--wrap__info">
              <div className="content">
                <div className="name-wrap">
                  <span className="name">SKU:</span>
                  <span className="name">Category</span>
                  <span className="name">Stock:</span>
                  <span className="name">Farm</span>
                </div>
                <div className="info">
                  <span>{props.sku}</span>
                  <span>Vegetables</span>
                  <span className="green">In stock</span>
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
                <span className="price">{props.real_price_str}</span>
                <span className="discount">{props.price_str} </span>
              </div>
              <div className="btn--group">
                <div className="quantity">
                  <span
                    className="btn--decrease"
                    onClick={() => setValue(value - 1)}
                  >
                    -
                  </span>
                  <span>{value}</span>
                  <span
                    className="btn--increase"
                    onClick={() => setValue(value + 1)}
                  >
                    +
                  </span>
                </div>
                <div
                  className="btn btn-buy"
                  onClick={() => dispatch(addItem(props,value))}
                >
                  <img src="/assets/icon-add.svg" alt="" />
                  <span>Add to cart</span>
                </div>
              </div>
            </div>
            <div className="wish--list">
              <img src="/assets/icon-heart-organe.svg" alt="" />
              <span>Add to wish list</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <TabReviews {...props} />
      </div>
    </>
  );
}
