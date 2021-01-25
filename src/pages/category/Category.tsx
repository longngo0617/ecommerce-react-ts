import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import Paginate from "../../components/Paginate";
import getQueryString, { convertObjToQueryURL } from "../../helper/url";
import { getQueryParam } from "../../hooks/queryURL";
import { getCategories } from "./categories/Category.thunk";
import FilterBar from "./components/FilterBar";
import FilterItem from "./components/FilterItem";
import GridView from "./components/GridView";
import ListView from "./components/ListView";
import LoadingBox from "./components/LoadingBox";
import { getProducts } from "./product/Product.thunk";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const mapStateToProps = (state: AppState) => ({
  products: state.products.products,
  paginate: state.products.paginate,
  loading: state.products.loading,
  categories: state.categories.categories,
});

const mapDispatchToProps = {
  getProducts,
  getCategories,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}
const Category = (props: Props) => {
  const routeMatch: any = useRouteMatch();
  const history = useHistory();
  const view = useQuery().get("view") || "grid";
  const sort = useQuery().get("sort");
  const params = routeMatch?.params;
  const {
    products,
    paginate,
    loading,
    getProducts,
    categories,
    getCategories,
  } = props;
  let id = params?.id?.replace(/[^0-9]/g, "");
  let queryURL = getQueryString(params, { remove: { view: 1 } });
  let viewGrid = getQueryString(params, {
    data: { view: "grid" },
    remove: { categories: 1 },
  });
  let viewList = getQueryString(params, {
    data: { view: "list" },
    remove: { categories: 1 },
  });

  function sortPrice(options: Object) {
    let query = getQueryParam();
    delete query.page;

    query.sort = JSON.stringify(options)
      .replace(/[{}"]/g, "")
      .replace(/:/g, ".");

    history.push({
      search: "?" + convertObjToQueryURL(query),
    });
  }
  useEffect(() => {
    getProducts(queryURL);
    getCategories();
  }, [queryURL]);

  if (loading) return <LoadingBox />;
  return (
    <>
      <Breadcrumbs
        links={[{ title: "Homepage", link: "/" }, { title: "Category" }]}
      />
      <section className="category">
        <div className="container">
          <div className="heading">
            <h2 className="heading--title">
              {!id
                ? "Danh sách sản phẩm"
                : categories.find((e: any) => e.id === parseInt(id))?.title}
            </h2>
            <div className="heading--group">
              <span className="label">Thể hiện: </span>
              <Link
                to={`${routeMatch.url}?${viewGrid}`}
                className={`heading--item ${view === "grid" ? "active" : ""}`}
              >
                <span>
                  <img src="/assets/icon-square.svg" alt="" />
                </span>
                <span className="type">Lưới</span>
              </Link>
              <Link
                to={`${routeMatch.url}?${viewList}`}
                className={`heading--item ${view === "list" ? "active" : ""}`}
              >
                <span>
                  <img src="/assets/icon-section.svg" alt="" />
                </span>
                <span className="type">Danh sách</span>
              </Link>
              <div className="heading--item">
                <span className="number">{paginate?.count}</span>
                <span className="type">Sản phẩm</span>
              </div>
            </div>
          </div>
          <div className="filter--top">
            <div className="filter--top__group">
              <div className="filter--item">
                <div className="field">
                  <input
                    type="radio"
                    id="increase"
                    name="sort"
                    checked={sort === "real_price.1"}
                    value={"asc"}
                    onChange={sortPrice.bind(null, { real_price: 1 })}
                  />
                  <label htmlFor="increase" className="radio">
                    Tăng dần
                  </label>
                </div>
                <div className="field">
                  <input
                    type="radio"
                    id="decrease"
                    name="sort"
                    checked={sort === "real_price.-1"}
                    value={"desc"}
                    onChange={sortPrice.bind(null, { real_price: -1 })}
                  />
                  <label htmlFor="decrease" className="radio">
                    Giảm dần
                  </label>
                </div>
                <div className="field">
                  <input
                    type="radio"
                    id="discount"
                    name="sort"
                    checked={sort === "discount_rate.-1"}
                    value={"discount"}
                    onChange={sortPrice.bind(null, { discount_rate: -1 })}
                  />
                  <label htmlFor="discount" className="radio">
                    Khuyến mãi nhiều
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
                <FilterItem/>
                <span className="selected--item">Selected Filter</span>
              </div>
            </div>
          </div>
          <div className="category--main">
            <div className="row">
              <div className="col-md-3">
                <FilterBar props={categories} />
              </div>
              <div className="col-md-9 products">
                {products.length ? (
                  view === "list" ? (
                    <ListView props={products} />
                  ) : (
                    <GridView props={products} />
                  )
                ) : (
                  <div>Không có sản phẩm bạn cần tìm</div>
                )}
                {paginate.count ? <Paginate props={paginate} /> : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default connector(Category);
