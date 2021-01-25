import React from "react";
import Card from "../../../components/Card";
import withProduct from "../../../hoc/withProduct";
import { productItem } from "../../../type";

export default function GridView({props}: any) {
  return (
    <div className="row">
      {props?.map((e: productItem) => (
        <div className="col-md-4" key={e.id}>
            {withProduct(Card,e)}
        </div>
      ))}
    </div>
  );
}
