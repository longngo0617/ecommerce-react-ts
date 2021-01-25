import LocalStorage from "../../helper/LocalStorage";
import {
  OPEN_CART,
  CLOSE_CART,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  INCREASE_QTY_ITEM,
  DECREASE_QTY_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_METHOD
} from "./Cart.constants";

const initialState = {
  open: false,
  list: [] as any[],
  shippingFee: 0,
  vat: 0,
  ...(LocalStorage.get("cart") || {}),
};

function returnState(state: any) {
  LocalStorage.set("cart", state);
  return { ...state };
}

export const CartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_CART:
      return {
        ...state,
        open: true,
      };
    case CLOSE_CART:
      return {
        ...state,
        open: false,
      };

    case CART_ADD_ITEM:
      const existItem: any = state.list.find(
        (x: any) => x.id === action.payload.id
      );
      const qty = action.payload.qty;
      if (existItem) {
        if (qty != 1) {
          existItem.qty += qty;
        } else {
          existItem.qty++;
        }
        return returnState({
          ...state,
          list: [...state.list],
        });
      }
      return returnState({
        ...state,
        list: [...state.list, action.payload],
      });

    case CART_REMOVE_ITEM:
      return returnState({
        ...state,
        list: state.list.filter((x: any) => x.id !== action.payload),
      });

    case INCREASE_QTY_ITEM:
      let index = state.list.findIndex((e: any) => e.id === action.payload);
      state.list[index].qty++;
      return returnState({
        ...state,
        list: [...state.list],
      });

    case DECREASE_QTY_ITEM:
      let index1 = state.list.findIndex((e: any) => e.id === action.payload);
      state.list[index1].qty--;
      if (state.list[index1].qty === 0) {
        state.list.splice(index1, 1);
      }
      return returnState({
        ...state,
        list: [...state.list],
      });
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case CART_SAVE_SHIPPING_METHOD:
      return {
        ...state,
        shippingMethod: action.payload.method,
        shippingFee: action.payload.fee,
      };
    default:
      return state;
  }
};
