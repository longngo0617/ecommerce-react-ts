import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import withProduct from "../../../hoc/withProduct";
import Filter from "./Filter";
interface products {
  title: string;
  categories: [];
  products: [];
}
export default function Products(props: products) {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Filter>
                  <h2 className="filter--title">{props.title}</h2>
                  <ul className="filter--link">
                    {props.categories.map((e: any, i: number) => (
                      <li key={i}>
                        {" "}
                        <Link to={e.slug}>{e.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link to="/category/" className="btn btn--more">
                    <span>More Products</span>
                    <span className="right">
                      <img src="/assets/icon-right.svg" alt="" />
                    </span>
                  </Link>
                </Filter>
              </div>
              <div className="col-md-9">
                <div className="row">
                  {props.products?.map((e: any) => (
                    <div key={e._id} className="col-md-4 cart-wrap">
                      {withProduct(Card, e)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
