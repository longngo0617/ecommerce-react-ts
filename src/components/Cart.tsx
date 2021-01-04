import ReactDOM from "react-dom";
import CartItem from "./CartItem";
const portalCart = document.getElementById("popup-cart");
function Open()
{
    portalCart?.classList.add('is-open');
}
function Close()
{
    portalCart?.classList.remove('is-open');
}
type Cart = {
    cartState : boolean,
    setCartState : any
}
const Cart = ({cartState,setCartState} :Cart) => {
    {cartState ? Open() :Close()}
  return portalCart
    ? ReactDOM.createPortal(
        <div className="cart">
          <div className="cart--inner">
            <div className="cart--head">
              <h3 className="cart--title">Shopping cart</h3>
              <div className="cart--close" onClick={()=>setCartState(false)}>
                Close
                <img src="/assets/icon-close.svg" alt="" />
              </div>
            </div>
            <div className="cart--body">
              <CartItem
                img={"/assets/item-2.jpg"}
                title={"product title"}
                farm={"Tharamis Farm"}
                fresh={"1 day old"}
                price={36.99}
                discount={48.56}
              />
              <CartItem
                img={"/assets/item-3.jpg"}
                title={"product title"}
                farm={"Tharamis Farm"}
                fresh={"1 day old"}
                price={36.99}
                discount={48.56}
              />
              <CartItem
                img={"/assets/item-3.jpg"}
                title={"product title"}
                farm={"Tharamis Farm"}
                fresh={"1 day old"}
                price={36.99}
                discount={48.56}
              />
            </div>
            <div className="cart--foot">
              <div className="subtotal">
                Subtotal
                <span>73.98 USD</span>
              </div>
              <div className="button">
                <div className="btn--apply">
                  <span>Continue shopping</span>
                </div>
                <div className="btn btn-buy">
                  <span>Go to Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>,
        portalCart
      )
    : null;
};
export default Cart;
