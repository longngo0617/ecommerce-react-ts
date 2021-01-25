import Api from "../../../helper/Api";
import * as actions from "./Category.actions";

export const getCategories = () => (dispatch: any) => {
  dispatch(actions.getCategoriesRequest());
  return Api("categories")
    .get()
    .then((res) => dispatch(actions.getCategoriesSuccess(res)))
    .catch((err) =>
      Promise.reject(dispatch(actions.getCategoriesFailure(err)))
    );
};
