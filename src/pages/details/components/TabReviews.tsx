import React from "react";

export default function TabReviews() {
  return (
    <div className="tab">
      <ul className="tab--title">
        <li className="active">Description</li>
        <li>Reviews</li>
        <li>Questions</li>
      </ul>
      <div className="tab--content">
        <div className="description">
          <div className="description--top">
            <div className="item">
              <div className="title">Origins</div>
              <div className="content">
                We work hard to ensure that the fruit and vegetables we sell are
                fresh and high in quality. If we don’t grow them ourselves, we
                source them from carefully chosen suppliers, preferring to buy
                locally whenever possible.
              </div>
            </div>
            <div className="item">
              <div className="title">How to cook</div>
              <div className="content">
                From roasts, salads and soups to casseroles and cakes, Carrots
                will lend sweetness, texture and colour to an enormous number of
                recipes.
              </div>
            </div>
            <div className="item">
              <div className="title">Full of Vitamins!</div>
              <div className="table">
                <div className="table--col">
                  <h4>Vitamins</h4>
                  <ul>
                    <li>Vitamin A equiv.</li>
                    <li>Thiamine (B1)</li>
                    <li>Niacin (B3)</li>
                    <li>Folate (Bg)</li>
                    <li>Vitamin C</li>
                    <li>Vitamin E</li>
                    <li>Vitamin K</li>
                  </ul>
                </div>
                <div className="table--col">
                  <h4>Quantity</h4>
                  <ul>
                    <li>735 μg</li>
                    <li>0.066 mg</li>
                    <li>0.983 mg</li>
                    <li>19 μg</li>
                    <li>5.9 mg</li>
                    <li>0.66 mg</li>
                    <li>13.2 mg</li>
                  </ul>
                </div>
                <div className="table--col">
                  <h4>% DV</h4>
                  <ul>
                    <li>104 %</li>
                    <li>6 % </li>
                    <li>7 %</li>
                    <li>5 %</li>
                    <li>7 %</li>
                    <li>4 %</li>
                    <li>13 %</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
