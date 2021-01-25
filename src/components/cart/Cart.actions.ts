import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CLOSE_CART,
  DECREASE_QTY_ITEM,
  INCREASE_QTY_ITEM,
  OPEN_CART,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_METHOD,
} from "./Cart.constants";

export const openCart = () => {
  return {
    type: OPEN_CART,
  };
};

export const closeCart = () => {
  return {
    type: CLOSE_CART,
  };
};

export const addItem = (item: any, qty: number = 1) => {
  return {
    type: CART_ADD_ITEM,
    payload: {
      ...item,
      qty: qty,
    },
  };
};

export const removeItem = (productID: number) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: productID,
  };
};

export const increaseQtyItem = (productID: number) => {
  return {
    type: INCREASE_QTY_ITEM,
    payload: productID,
  };
};
export const decreaseQtyItem = (productID: number) => {
  return {
    type: DECREASE_QTY_ITEM,
    payload: productID,
  };
};
export function savePaymentMethod(data: string) {
  return {
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  };
}
export function saveShippingMethod(data: any) {
  return {
    type: CART_SAVE_SHIPPING_METHOD,
    payload: data,
  };
}
