import React from "react";

export default function Confirm() {
  return (
    <>
      <div className="step">
        <h3 className="step--title">Confirmation</h3>
        <div className="step--required">
          <p>
            We are getting to the end. Just few clicks and your order si ready!
          </p>
          <p>Step 5 of 5</p>
        </div>
        <div className="field--wrap">
          <div className="custom-field ">
            <div className="custom-field--checkbox field">
              <input type="checkbox" name="checkMarketing" />
              <span>
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </span>
            </div>
            <div className="custom-field--checkbox field">
              <input type="checkbox" name="checkAgree" />
              <span>
                I agree with our terms and conditions and privacy policy.
              </span>
            </div>
          </div>
        </div>
        <div className="btn btn-buy">
            <span>Complete order</span>
        </div>
        <div className="security">
            <div className="security--image">
                <img src="/assets/security.svg" alt=""/>
            </div>
            <div className="security--des">
                <span>All your data are safe</span>
                We are using the most advanced security to provide you the best experience ever.
            </div>
        </div>
      </div>
    </>
  );
}
