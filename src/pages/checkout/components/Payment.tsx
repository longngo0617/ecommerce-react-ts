import React from "react";

export default function Payment() {
  return (
    <>
      <div className="step">
        <h3 className="step--title">Payment method</h3>
        <div className="step--required">
          <p>Please enter your payment method</p>
          <p>Step 3 of 5</p>
        </div>
        <div className="wrap">
          <div className="field--top">
            <div className="field--wrap">
              <div className="field" style={{paddingLeft:0}}>
                <input
                  type="radio"
                  id="creditCard"
                  name="billing-method"
                  defaultChecked
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
          </div>
          <div className="field--bottom">
            <div className="field--wrap">
              <div className="custom-field" style={{ width: "100%" }}>
                <label htmlFor="email">Card number</label>
                <input
                  className="text"
                  type="text"
                  name="email"
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
        </div>
        <div className="field--wrap bg-grey" style={{marginBottom:"16px"}}>
              <div className="field">
                <input
                  type="radio"
                  id="creditCard"
                  name="billing-method"
                  defaultChecked
                />
                <label htmlFor="creditCard" className="radio">
                  PayPal
                </label>
              </div>
              <div className="icon">
                <img src="/assets/paypal.svg" alt="" />
              </div>
            </div>
        <div className="field--wrap bg-grey">
              <div className="field">
                <input
                  type="radio"
                  id="creditCard"
                  name="billing-method"
                  defaultChecked
                />
                <label htmlFor="creditCard" className="radio">
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
