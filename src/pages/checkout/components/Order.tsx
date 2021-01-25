import { connect, ConnectedProps } from "react-redux";
import CartItem from "../../../components/CartItem";
import FormatNumber from "../../../helper/FormatNumber";

const getCartTotal = (cartList: any) =>
  cartList.reduce(
    (amount: number, item: any) => amount + item.real_price * item.qty,
    0
  );
let date = new Date();
date.setDate(date.getDate() + 7);

const mapStateToProps = (state: AppState) => ({
  cartList: state.cart.list,
  cartShippingFee: state.cart.shippingFee,
  vat: state.cart.vat,
});

const mapDispatchToProps = {
  
};
const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}
const Order = (props: Props) =>  {
  const { cartList,cartShippingFee,vat } = props;
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
            {cartList.map((e: any) => (
                <CartItem {...e} key={e.id} />
              ))}
              {cartList.length === 0 && (
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
              )}
            </div>
          </div>
          <div className="subtotal">
            <div className="subtotal--row">
              <span>Subtotal</span>
              <span>{FormatNumber(getCartTotal(cartList))} VNĐ</span>
            </div>
            <div className="subtotal--row">
              <span>VAT</span>
              <span>{FormatNumber(vat)} VNĐ</span>
            </div>
            <div className="subtotal--row">
              <span>Shipping</span>
              <span>{FormatNumber(cartShippingFee)} VNĐ</span>
            </div>
            <div className="promo">
              <input type="text" name="promo" placeholder="Apply promo code"/>
              <button className="btn--apply">Apply now</button>
            </div>
          </div>
          <div className="total">
            <div className="total--title">
              <h4>Total Order</h4>
              <p>Guaranteed delivery day: {date.toDateString()}</p>
            </div>
            <div className="total--price">{FormatNumber(getCartTotal(cartList) + cartShippingFee)} VNĐ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default connector(Order);
