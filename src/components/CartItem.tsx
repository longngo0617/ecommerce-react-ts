type CartItemProps = {
    img : string,
    title:string,
    farm:string,
    fresh:string,
    price:number,
    discount:number,
}
const CartItem = ({img,title,farm,fresh,price,discount} : CartItemProps) => {
  return (
    <div className="cart--item">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="wishlist">
        <img src="/assets/icon-heart-organe.svg" alt="" />
        <span>Wishlist</span>
      </div>
      <div className="close">
        <img src="/assets/icon-close.svg" alt="" />
        <span>remove</span>
      </div>
      <div className="name">{title}</div>
      <div className="details">
        <div className="details--row">
          <span className="title">Farm:</span>
          <span className="desc">{farm}</span>
        </div>
        <div className="details--row">
          <span className="title">Freshness:</span>
          <span className="desc">{fresh}</span>
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
          {price} USD
          <span>{discount} USD</span>
        </div>
        <div className="quantity">
          <span className="btn--increase">+</span>
          <span>0</span>
          <span className="btn--decrease">-</span>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
