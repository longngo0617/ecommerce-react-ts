import { useDispatch } from "react-redux";
import { decreaseQtyItem, increaseQtyItem, removeItem } from "./cart/Cart.actions";

type CartItemProps = {
    img : string,
    title:string,
    farm:string,
    fresh:string,
    price:number,
    discount:number,
}
const CartItem = (props: any) => {
  const dispatch = useDispatch();
  return (
    <div className="cart--item">
      <div className="image">
        <img src={props.thumbnail_url} alt="" />
      </div>
      <div className="wishlist">
        <img src="/assets/icon-heart-organe.svg" alt="" />
        <span>Wishlist</span>
      </div>
      <div className="close" onClick={()=>dispatch(removeItem(props.id))}>
        <img src="/assets/icon-close.svg" alt="" />
        <span>remove</span>
      </div>
      <div className="name">{props.name}</div>
      <div className="details">
        <div className="details--row">
          <span className="title">Farm:</span>
          <span className="desc">Tharamis Farm</span>
        </div>
        <div className="details--row">
          <span className="title">Review:</span>
          <span className="desc">{props.review_count} customer review</span>
        </div>
      </div>
      <div className="group-star">
        <img src={`/assets/${Math.round(props.rating_average)}star.svg`} alt="" />
      </div>
      <div className="bottom">
        <div className="price">
          {props.real_price_str} VNĐ
          <span>{props.price_str} VNĐ</span>
        </div>
        <div className="quantity">
          <span className="btn--increase" onClick={()=>dispatch(decreaseQtyItem(props.id))}>-</span>
          <span>{props.qty}</span>
          <span className="btn--decrease" onClick={()=>dispatch(increaseQtyItem(props.id))}>+</span>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
