import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productItem } from "../type";
import { addItem } from "./cart/Cart.actions";

export default function Card(props: productItem) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <Link to={`/product-details/${props.slug}`} className="card--head">
        <img src={props.thumbnail_url} alt="" />
      </Link>
      {props.percent > 0 ? (
        <div className="card--percent">
          <span>{props.percent}%</span>
        </div>
      ) : null}
      <div className="card--body">
        <h2 className="card--title">{props.name}</h2>
        <h3 className="card--desc">{props.short_description}</h3>
        <div className="card--footer">
          <div className="card--price">{props.real_price_str} VNĐ</div>
          <div className="btn btn-buy" onClick={() => dispatch(addItem(props))}>
            <span>Buy Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
