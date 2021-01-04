import FilterPrice from "./FilterPrice";

export default function FilterBar() {
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
        <FilterPrice />
      </div>
    </div>
  );
}
