import React from "react";
import { Link } from "react-router-dom";

export default function TabReviews(props: any) {
  return (
    <div className="tab">
      <ul className="tab--title">
        <li className="active">
          <Link to="/">THÔNG TIN CHI TIẾT</Link>
        </li>
        <li>
          <Link to="/">KHÁCH HÀNG NHẬN XÉT</Link>
        </li>
        <li>
          <Link to="/">HỎI, ĐÁP VỀ SẢN PHẨM</Link>
        </li>
      </ul>
      <div className="tab--content">
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>
      </div>
    </div>
  );
}
