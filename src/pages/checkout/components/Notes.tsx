import React from "react";

export default function Notes() {
  return (
    <>
      <div className="step">
        <h3 className="step--title">Additional informations</h3>
        <div className="step--required">
          <p>Need something else? We will make it for you!</p>
          <p>Step 4 of 5</p>
        </div>
        <div className="field--wrap">
          <div className="custom-field notes">
            <label htmlFor="address">Order notes</label>
            <input
              className="text"
              type="text"
              name="address"
              placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
