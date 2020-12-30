import React from "react";

export default function Info() {
  return (
    <>
      <div className="step">
        <h3 className="step--title">Billing info</h3>
        <div className="step--required">
          <p>Please enter your billing info</p>
          <p>Step 1 of 5</p>
        </div>
        <div className="field--wrap">
          <div className="custom-field">
            <label htmlFor="firstName">First name</label>
            <input
              className="text"
              type="text"
              name="firstName"
              placeholder="First name"
            />
          </div>
          <div className="custom-field">
            <label htmlFor="lastName">Last name</label>
            <input
              className="text"
              type="text"
              name="lastName"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="field--wrap">
          <div className="custom-field">
            <label htmlFor="email">Email address</label>
            <input
              className="text"
              type="text"
              name="email"
              placeholder="Email address"
            />
          </div>
          <div className="custom-field">
            <label htmlFor="phone">Phone number</label>
            <input
              className="text"
              type="text"
              name="phone"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="field--wrap">
          <div className="custom-field">
            <label htmlFor="address">Address</label>
            <input
              className="text"
              type="text"
              name="address"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="field--wrap">
          <div className="custom-field--checkbox field">
            <input type="checkbox" name="checkShip" />
            <span>Ship to a different address?</span>
          </div>
        </div>
      </div>
      <div className="step">
      <h3 className="step--title">Billing method</h3>
        <div className="step--required">
          <p>Please enter your payment method</p>
          <p>Step 2 of 5</p>
        </div>
        <div className="field--wrap bg-grey" style={{marginBottom:16}}>
            <div className="field">
                <input type="radio" id="fedex" name="billing-method"/>
                <label htmlFor="fedex" className="radio">FedEx</label>
            </div>
            <div className="additional">
                <span className="green"> + 32 USD</span>
                <span className="name">Addition price</span>
            </div>
            <div className="icon">
                <img src="/assets/fedex.svg" alt=""/>
            </div>
        </div>
        <div className="field--wrap bg-grey">
            <div className="field">
                <input type="radio" id="dhl" name="billing-method"/>
                <label htmlFor="dhl" className="radio">DHL</label>
            </div>
            <div className="additional">
                <span className="green"> + 15 USD</span>
                <span className="name">Addition price</span>
            </div>
            <div className="icon">
                <img src="/assets/dhl.svg" alt=""/>
            </div>
        </div>
      </div>
    </>
  );
}
