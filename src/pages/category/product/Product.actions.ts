import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
} from "./Product.constants";

export const getProductsRequest = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};
export const getProductsSuccess = (products: any) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProductsFailure = (error: string) => {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const getProductDetailsRequest = () => {
  return {
    type: GET_PRODUCT_DETAILS_REQUEST,
  };
};
export const getProductDetailsSuccess = (data: any) => {
  return {
    type: GET_PRODUCT_DETAILS_SUCCESS,
    payload: data,
  };
};
export const getProductDetailsFailure = (error: string) => {
  return {
    type: GET_PRODUCT_DETAILS_FAILURE,
    payload: error,
  };
};
