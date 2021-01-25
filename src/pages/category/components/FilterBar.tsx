import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import getQueryString, { addQuery } from "../../../helper/url";
import FilterPrice from "./FilterPrice";

function renderStar(url:string,params:string,history : any) {
  let contentStar: any = [];
  for (let i = 5; i > 0; i--) {
    let link = history.location.search.includes(`&rating_average=${i}`) ? `${url}?${getQueryString(params, { remove: { categories: 1,page: 1,rating_average:1 } })}` : `${url}?${addQuery({ page: 1,rating_average: i })}`;
    contentStar.push(
      <li key={i}>
        <div className="field">
          <input
            type="checkbox"
            id={`rating-${i}`}
            name="size"
            value={`${i}star`}
            checked={history.location.search.includes(`&rating_average=${i}`)}
            onChange={() => history.push(link)}
          />
          <label htmlFor={`rating-${i}`} className="checkbox">
            <i style={{ backgroundImage: `url(/assets/${i}star.svg)` }}></i>
          </label>
        </div>
      </li>
    );
  }
  return contentStar;
}
const FilterBar = ({props} : any) => {
    const history = useHistory();
    const {url,params}: any = useRouteMatch();
  return (
    <div className="filter--bar">
      <div className="filter--bar__item">
        <h2 className="title">Categories</h2>
        <ul>
          {props.map((e: any, i: number) => (
            <li key={i}>
              <NavLink to={`/category/${e.slug}?${getQueryString(params, { remove: { categories: 1, page: 1,rating_average:1 } })}`} activeClassName="active-link">
                {e.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter--bar__item">
        <h2 className="title">Brands</h2>
        <ul>
          <li></li>
          <li>
            <div className="field">
              <input type="checkbox" id="asus" name="size" />
              <label htmlFor="asus" className="checkbox">
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
        <ul>{renderStar(url,params,history)}</ul>
      </div>
      <div className="filter--bar__item">
        <h2 className="title">Price</h2>
        <FilterPrice />
      </div>
    </div>
  );
};
export default FilterBar;
