import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import ListView from "./components/ListView";
import GridView from "./components/GridView";
import FilterBar from "./components/FilterBar";
import Paginate from "../../components/Paginate";
export default function Category() {
  let { url } = useRouteMatch();
  console.log(url);
  return (
    <>
      <Breadcrumbs links={[
        {title : "Homepage", link: "/"},
        {title : "Category"},
      ]} />
      <section className="category">
        <div className="container">
          <div className="heading">
            <h2 className="heading--title">Fruit and vegetables</h2>
            <div className="heading--group">
              <NavLink to={`${url}/grid-view`} className="heading--item">
                <span>
                  <img src="/assets/icon-square.svg" alt="" />
                </span>
                <span className="type">Grid view</span>
              </NavLink>
              <NavLink exact to={`${url}`} className="heading--item">
                <span>
                  <img src="/assets/icon-section.svg" alt="" />
                </span>
                <span className="type">List view</span>
              </NavLink>
              <div className="heading--item">
                <span className="number">117</span>
                <span className="type">Products</span>
              </div>
            </div>
          </div>
          <div className="filter--top">
            <div className="filter--top__group">
              <div className="filter--item">
                <div className="field">
                  <input type="radio" id="small" name="size" />
                  <label htmlFor="small" className="radio">
                    Filter text
                  </label>
                </div>
                <div className="field">
                  <input type="radio" id="big" name="size" defaultChecked />
                  <label htmlFor="big" className="radio">
                    Filter text
                  </label>
                </div>
              </div>
              <div className="filter--item">
                <div className="field">
                  <input type="checkbox" id="small" name="size" />
                  <label htmlFor="small" className="checkbox">
                    Filter
                  </label>
                  <div className="nbm">nbm</div>
                </div>
              </div>
              <div className="filter--item">
                <div className="field">
                  <input type="checkbox" id="small" name="size" />
                  <label htmlFor="small" className="checkbox">
                    Filter
                  </label>
                  <div className="nbm">nbm</div>
                </div>
              </div>
              <div className="filter--item">
                <div className="field">
                  <input
                    type="checkbox"
                    id="small"
                    name="size"
                    defaultChecked
                  />
                  <label htmlFor="small" className="checkbox">
                    Filter
                  </label>
                  <div className="nbm">12</div>
                  <div className="select">
                    <span className="title">Select</span>
                    <span className="arrow">
                      <img src="/assets/icon-right.svg" alt="" />
                    </span>
                    {/* <select name="" id="">

                                            </select> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="filter--top__applied">
              <h3>Applied filters:</h3>
              <div className="selected--group">
                <span className="selected--item">Selected Filter</span>
                <span className="selected--item">Selected Filter</span>
              </div>
            </div>
          </div>
          <div className="category--main">
            <div className="row">
              <div className="col-md-3">
                <FilterBar />
              </div>
              <div className="col-md-9 products">
                <Switch>
                  <Route path={`${url}/grid-view`}>
                    <GridView />
                  </Route>
                  <Route exact path={`${url}`}>
                    <ListView />
                  </Route>
                </Switch>
                <Paginate />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
