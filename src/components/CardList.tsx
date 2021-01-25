import { Link } from "react-router-dom";
import { productItem } from "../type";
export default function CardList(props: productItem) {
  let rating: number = Math.round(props.rating_average);

  return (
    <div className="card--list">
      <div className="card--image">
        <Link to={`/product-details/${props.slug}`}>
          <img src={props.thumbnail_url} alt="" />
        </Link>
        {props.percent > 0 ? (
          <div className="card--percent">
            <span>{props.percent}%</span>
          </div>
        ) : null}
      </div>
      <div className="card--details">
        <h2 className="title">
          <Link to={`/product-details/${props.slug}`}>{props.name}</Link>
        </h2>
        <div className="desc">{props.short_description}</div>
        <div className="start--group">
          <img src={`/assets/${rating}star.svg`} alt="" />
        </div>
        <div className="details">
          <ul className="left">
            <li>
              <span>Discount</span>
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
                <span className="green">{props.percent} %</span>
              </span>
            </li>
            <li>
              <span>Europe</span>
            </li>
            <li>
              <span className="green">{props.stock_item.qty} pcs</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="card--price">
        <div className="card--price__top">
          <p className="price">{props.real_price_str} VNĐ</p>
          <p className="discount">{props.price_str}VNĐ</p>
        </div>
        <div className="card--price__mid">
          <p>Free Shipping</p>
          <p>Delivery in 1 day</p>
        </div>
        <div className="card--price__bot">
          <Link to={`/product-details/${props.slug}`} className="btn btn-buy">
            <span>Product Detail</span>
            <img src="/assets/right-white.svg" alt="" />
          </Link>
          <div className="btn--more">
            <img src="/assets/icon-heart.svg" alt="" />
            <span>Add to wish list</span>
          </div>
        </div>
      </div>
    </div>
  );
}
