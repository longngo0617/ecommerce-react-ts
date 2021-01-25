import Api from "../../../helper/Api";
import * as actions from "./Product.actions";

export const getProducts = (queryURL: string) => (dispatch: any) => {
  dispatch(actions.getProductsRequest());
  return Api(`product` + (queryURL ? `?${queryURL}` : ""))
    .get()
    .then((res) => dispatch(actions.getProductsSuccess(res)))
    .catch((err) => Promise.reject(dispatch(actions.getProductsFailure(err))));
};

export const getProductDetails = (id: string) => (dispatch: any) => {
  dispatch(actions.getProductDetailsRequest());
  return Api(`product/${id}`)
    .get()
    .then((res) => dispatch(actions.getProductDetailsSuccess(res)))
    .catch((err) =>
      Promise.reject(dispatch(actions.getProductDetailsFailure(err)))
    );
};
