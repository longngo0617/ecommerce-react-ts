import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import FormatNumber from "../../helper/FormatNumber";
import CartItem from "../CartItem";
import { closeCart } from "./Cart.actions";

const portalCart = document.getElementById("popup-cart");
const getCartTotal = (cartList: any) =>
  cartList.reduce(
    (amount: number, item: any) => amount + item.real_price * item.qty,
    0
  );
const mapStateToProps = (state: AppState) => ({
  cartState: state.cart.open,
  cartList: state.cart.list,
});

const mapDispatchToProps = {
  closeCart,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}
const Cart = (props: Props) => {
  const { cartList, cartState } = props;
  useEffect(() => {
    if (cartState) {
      portalCart?.classList.add("is-open");
    } else {
      portalCart?.classList.remove("is-open");
    }
  }, [cartState]);
  return portalCart
    ? ReactDOM.createPortal(
        <div className="cart">
          <div className="cart--inner">
            <div className="cart--head">
              <h3 className="cart--title">Shopping cart</h3>
              <div className="cart--close" onClick={props.closeCart}>
                Close
                <img src="/assets/icon-close.svg" alt="" />
              </div>
            </div>
            <div className="cart--body">
              {cartList.map((e: any) => (
                <CartItem {...e} key={e.id} />
              ))}
              {cartList.length === 0 && (
                <div>
                  <img src="/assets/empty-cart.svg" alt="" />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: 80,
                      lineHeight: "25px",
                    }}
                  >
                    Bạn chưa chọn sản phẩm nào, tiếp tục chọn cho mình sản phẩm
                    ưng ý và quay lại.
                  </p>
                </div>
              )}
            </div>
            <div className="cart--foot">
              <div className="subtotal">
                Subtotal
                <span>{FormatNumber(getCartTotal(cartList))} VND</span>
              </div>
              <div className="button">
                <div className="btn--apply">
                  <span>Continue shopping</span>
                </div>
                <Link
                  onClick={props.closeCart}
                  to="/checkout"
                  className="btn btn-buy"
                >
                  <span>Go to Checkout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>,
        portalCart
      )
    : null;
};
export default connector(Cart);
