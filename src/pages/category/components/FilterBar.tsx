import { useEffect } from "react";

export default function FilterBar() {
  useEffect(() => {
    // let inputLeft = document.getElementById("input-left");
    // let inputRight = document.getElementById("input-right");
    // let thumbLeft = document.querySelector(".slider > .thumb.left");
    // let thumbRight = document.querySelector(".slider > .thumb.right");
    // let range = document.querySelector(".slider > .range");
    // function setLeftValue(){
    //     let _this = inputLeft,
    //         min  = parseInt(_this.min ),
    //         max  = parseInt(_this.max);
    // }
  }, []);
  return (
    <div className="filter--bar">
      <div className="filter--bar__item">
        <h2 className="title">Categories</h2>
        <ul>
          <li>
            <a href="#">
              {" "}
              Category name<span className="number">320</span>
            </a>{" "}
          </li>
          <li>
            <a href="#">
              {" "}
              Category name<span className="number">112</span>
            </a>{" "}
          </li>
          <li>
            <a href="#">
              {" "}
              Category name<span className="number">32</span>
            </a>{" "}
          </li>
          <li>
            <a href="#">
              {" "}
              Category name<span className="number">48</span>
            </a>{" "}
          </li>
        </ul>
      </div>
      <div className="filter--bar__item">
        <h2 className="title">Brands</h2>
        <ul>
          <li>
            <div className="field">
              <input type="checkbox" id="small" name="size" />
              <label htmlFor="small" className="checkbox">
                Filter by brand item
              </label>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="small" name="size" defaultChecked />
              <label htmlFor="small" className="checkbox">
                Filter by brand item
              </label>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="small" name="size" defaultChecked />
              <label htmlFor="small" className="checkbox">
                Filter by brand item
              </label>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="small" name="size" />
              <label htmlFor="small" className="checkbox">
                Filter by brand item
              </label>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="small" name="size" />
              <label htmlFor="small" className="checkbox">
                Filter by brand item
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="filter--bar__item">
        <h2 className="title">Rating</h2>
        <ul>
          <li>
            <div className="field">
              <input type="checkbox" id="rating-5" name="size" />
              <div className="start--group">
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="rating-4" name="size" />
              <div className="start--group">
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="rating-3" name="size" />
              <div className="start--group">
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="rating-2" name="size" />
              <div className="start--group">
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="rating-1" name="size" />
              <div className="start--group">
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="filter--bar__item">
        <h2 className="title">Price</h2>
        {/* <div className="multi--range">
                    <input type="range" id="input-left" min="0" max="100" defaultValue="25"/>
                    <input type="range" id="input-right" min="0" max="100" defaultValue="75"/>
                </div> */}
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
      </div>
    </div>
  );
}
