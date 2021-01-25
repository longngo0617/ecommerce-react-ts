import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import withProduct from "../../hoc/withProduct";
import { getProductDetails } from "../category/product/Product.thunk";
import ProductDetails from "./components/ProductDetails";
import Related from "./components/Related";


const mapStateToProps = (state: AppState) => ({
  productDetails: state.products.productDetails,
  detailsLoading: state.products.detailsLoading,
});
const mapDispatchToProps = {
  getProductDetails,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}
const Details = (props: Props) => {
  let productID: any = useRouteMatch();
  productID = productID.params.slug?.match(/\d+$/g, "")?.[0] || null;
  const { productDetails , detailsLoading, getProductDetails } = props;

  useEffect(() => {
    getProductDetails(productID);
  }, [productID]);
  return (
    <>
      <Breadcrumbs
        links={[
          { title: "Homepage", link: "/" },
          { title: "Category", link: "/category" },
          { title: "Carrots" },
        ]}
      />
      <section className="product">
        <div className="container">
          {detailsLoading ? (
            <p>loading...</p>
          ) : (
            withProduct(ProductDetails, productDetails)
          )}
          <Related />
        </div>
      </section>
    </>
  );
};
export default connector(Details);
