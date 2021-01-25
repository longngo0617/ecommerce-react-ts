import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../../../components/cart/Cart.actions";

export default function Payment() {
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart);
  function paymentSelect(e: any) {
    dispatch(savePaymentMethod(e.target.value));
  }
  return (
    <>
      <div className="step">
        <h3 className="step--title">Payment method</h3>
        <div className="step--required">
          <p>Please enter your payment method</p>
          <p>Step 3 of 5</p>
        </div>
        <div className={`field--wrap bg-grey ${cart.paymentMethod !== 'money' && 'grey'}`} style={{ marginBottom: "16px" }}>
          <div className="field">
            <input
              type="radio"
              id="money"
              name="payment-method"
              value="money"
              onChange={paymentSelect}
            />
            <label htmlFor="money" className="radio">
              Money
            </label>
          </div>
          <div className="icon">
            <img src="/assets/money.svg" alt="" style={{width: 30}}/>
          </div>
        </div>
        <div className={`wrap ${cart.paymentMethod !== 'creditCard' && 'grey'}`}>
          <div className="field--top">
            <div className="field">
              <input
                type="radio"
                id="creditCard"
                name="payment-method"
                value="creditCard"
                onChange={paymentSelect}
              />
              <label htmlFor="creditCard" className="radio">
                Credit card
              </label>
            </div>
            <div className="icon">
              <img src="/assets/visa.svg" alt="" />
              <img src="/assets/mastercard.svg" alt="" />
            </div>
          </div>
          {cart.paymentMethod === "creditCard" && (
            <div className="field--bottom">
              <div className="field--wrap">
                <div className="custom-field" style={{ width: "100%" }}>
                  <label htmlFor="email">Card number</label>
                  <input
                    className="text"
                    type="text"
                    name="cardNumber"
                    placeholder="Card number"
                  />
                </div>
              </div>
              <div className="field--wrap">
                <div className="custom-field" style={{ width: 350 }}>
                  <label htmlFor="email">Card holder</label>
                  <input
                    className="text"
                    type="text"
                    name="cardHolder"
                    placeholder="Card holder"
                  />
                </div>
                <div className="custom-field small">
                  <label htmlFor="email">Expiration date</label>
                  <input
                    className="text-small"
                    type="text"
                    name="Expiration"
                    placeholder="DD/MM/YY"
                  />
                </div>
                <div className="custom-field small">
                  <label htmlFor="email">CVC</label>
                  <input
                    className="text-small"
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={`field--wrap bg-grey ${cart.paymentMethod !== 'paypal' && 'grey'}`} style={{ marginBottom: "16px" }}>
          <div className="field">
            <input
              type="radio"
              id="paypal"
              name="payment-method"
              value="paypal"
              onChange={paymentSelect}
            />
            <label htmlFor="paypal" className="radio">
              PayPal
            </label>
          </div>
          <div className="icon">
            <img src="/assets/paypal.svg" alt="" />
          </div>
        </div>
        <div className={`field--wrap bg-grey ${cart.paymentMethod !== 'bitcoin' && 'grey'}`}>
          <div className="field">
            <input
              type="radio"
              id="bitcoin"
              name="payment-method"
              value="bitcoin"
              onChange={paymentSelect}
            />
            <label htmlFor="bitcoin" className="radio">
              Bitcoin
            </label>
          </div>
          <div className="icon">
            <img src="/assets/bitcoin.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
