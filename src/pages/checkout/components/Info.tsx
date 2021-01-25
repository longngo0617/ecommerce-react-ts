import { useDispatch, useSelector } from "react-redux";
import { saveShippingMethod } from "../../../components/cart/Cart.actions";
import FormatNumber from "../../../helper/FormatNumber";

export default function Info({ inputChange, errors,constStyle }: any) {
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart);
  function shippingSelect(e: any) {
    dispatch(saveShippingMethod({
      fee: parseInt(e.target.getAttribute('data-fee')),
      method: e.target.value
    }));
  }
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
            {errors && <p style={constStyle.inputError}>{errors.firstName}</p>}
          </div>
          <div className="custom-field">
            <label htmlFor="lastName">Last name</label>
            <input
              className="text"
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={inputChange}
            />
            {errors && <p style={constStyle.inputError}>{errors.lastName}</p>}
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
              onChange={inputChange}
            />
            {errors && <p style={constStyle.inputError}>{errors.email}</p>}
          </div>
          <div className="custom-field">
            <label htmlFor="phone">Phone number</label>
            <input
              className="text"
              type="text"
              name="phone"
              placeholder="Phone number"
              onChange={inputChange}
            />
            {errors && <p style={constStyle.inputError}>{errors.phone}</p>}
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
              onChange={inputChange}
            />
            {errors && <p style={constStyle.inputError}>{errors.address}</p>}
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
        <h3 className="step--title">Shipping method</h3>
        <div className="step--required">
          <p>Please enter your payment method</p>
          <p>Step 2 of 5</p>
        </div>
        <div className="field--wrap bg-grey" style={{ marginBottom: 16 }}>
          <div className="field">
            <input type="radio" id="fedex" name="shipping-method" data-fee={32000} onChange={shippingSelect}/>
            <label htmlFor="fedex" className="radio">
              FedEx
            </label>
          </div>
          <div className="additional">
            <span className="green"> +{FormatNumber(32000)} VNĐ</span>
            <span className="name">Addition price</span>
          </div>
          <div className="icon">
            <img src="/assets/fedex.svg" alt="" />
          </div>
        </div>
        <div className="field--wrap bg-grey">
          <div className="field">
            <input type="radio" id="dhl" name="shipping-method" data-fee={15000} onChange={shippingSelect} />
            <label htmlFor="dhl" className="radio">
              DHL
            </label>
          </div>
          <div className="additional">
            <span className="green"> +{FormatNumber(15000)} VNĐ</span>
            <span className="name">Addition price</span>
          </div>
          <div className="icon">
            <img src="/assets/dhl.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
