import React from "react";
import CardList from "../../../components/CardList";
import withProduct from "../../../hoc/withProduct";
import { productItem } from "../../../type";

export default function ListView({ props }: any) {
  return (
    <>
      {props?.map((e: productItem) => (
        <React.Fragment key={e.id}>{withProduct(CardList, e)}</React.Fragment>
      ))}
    </>
  );
}
