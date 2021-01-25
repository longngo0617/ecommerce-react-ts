import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../helper/Api";
import { getCategories } from "../category/categories/Category.thunk";
import CategoryMenu from "./components/CategoryMenu";
import Headline from "./components/Headline";
import Products from "./components/Products";

export default function Home() {
  const categories = useSelector((state: AppState) => state.categories);
  const dispatch = useDispatch();
  let [cat, setCat]: any = useState(null);

  useEffect(() => {
    Api("home/product")
      .get()
      .then((res) => {
        setCat(res);
      });
    dispatch(getCategories());
  }, []);

  if (!cat) return null;

  function renderCatHot() {
    return categories.categories.map((e: any) => ({
      ...e,
      slug: "/category/" + e.slug + "?" + "sort=sort_item.qty.-1",
    }));
  }

  function renderCatDiscount() {
    return categories.categories.map((e: any) => ({
      ...e,
      slug: "/category/" + e.slug + "?" + "sort=discount_rate.-1",
    }));
  }
  return (
    <>
      <CategoryMenu />
      <Products
        title="Best selling products"
        categories={renderCatDiscount()}
        products={cat.discount}
      />
      <Products
        title="Best hot products"
        categories={renderCatHot()}
        products={cat.hot}
      />
      <Headline />
    </>
  );
}
