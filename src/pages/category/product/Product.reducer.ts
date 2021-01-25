import {
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./Product.constants";

const initialState = {
  loading: false,
  detailsLoading: false,
  products: [] as any[],
  paginate: [] as any[],
  productDetails: [] as any[],
  error: "",
};

export const ProductsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.data,
        paginate: action.payload.paginate,
        error: "",
      };
    case GET_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        paginate: [],
        error: action.payload,
      };
    case GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        detailsLoading: true,
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        detailsLoading:false,
        productDetails: action.payload,
      };
    case GET_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        detailsLoading:false,
        productDetails: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
