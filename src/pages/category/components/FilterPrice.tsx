import { useEffect } from "react";
const FilterPrice = () => {
  useEffect(() => {
    let inputLeft = document.getElementById("input-left");
    let inputRight = document.getElementById("input-right");
    let thumbLeft = document.querySelector(".slider > .thumb.left");
    let thumbRight = document.querySelector(".slider > .thumb.right");
    let range = document.querySelector(".slider > .range");
    function setLeftValue(){
        let _this = inputLeft;
            // min  = parseInt(_this.min ) ,
            // max  = parseInt(_this.max);
    }
  }, []);
  return (
    <>
      <div className="multi--range">
        <input
          type="range"
          id="input-left"
          min="0"
          max="100"
          defaultValue="25"
        />
        <input
          type="range"
          id="input-right"
          min="0"
          max="100"
          defaultValue="75"
        />
      </div>
      <div className="slider">
        <div className="track"></div>
        <div className="range"></div>
        <div className="thumb left"></div>
        <div className="thumb right"></div>
      </div>
      <div className="price">
        <div className="price--input">
          <h3>Min</h3>
          <input type="text" name="price-min" id="min" />
        </div>
        <div className="line"></div>
        <div className="price--input">
          <h3>Max</h3>
          <input type="text" name="price-max" id="max" />
        </div>
      </div>
      <div className="button-form">
        <div className="btn btn-buy">
          <span>Apply</span>
        </div>
        <div className="btn btn--more">
          <span>Reset</span>
        </div>
      </div>
    </>
  );
};

export default FilterPrice;
