import { combineReducers } from "redux";
import { CartReducer } from "../components/cart/Cart.reducer";
import { CategoriesReducer } from "../pages/category/categories/Category.reducer";
import { ProductsReducer } from "../pages/category/product/Product.reducer";
import { LoginReducer } from "../pages/login/Login.reducer";
import { RegisterReducer } from "../pages/register/Register.reducer";

const rootReducer = combineReducers({
  cart: CartReducer,
  categories: CategoriesReducer,
  products: ProductsReducer,
  login:LoginReducer,
  register:RegisterReducer,
});

export default rootReducer