import React from "react";

export default function Banner() {
  return (
    <div className="banner">
      <div className="frame">
        <h2 className="title">Banner subfocus</h2>
        <h1 className="desc">Space for heading</h1>
      </div>
      <div className="btn btn--recipes">
        <span>Read recepies</span>
        <span className="right">
          <svg
            width="16"
            height="16"
            viewBox="0 0 17 16"
            fill="#6A983C"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.0332 11.1865L9.7732 8.44651C9.89737 8.3216 9.96706 8.15263 9.96706 7.97651C9.96706 7.80039 9.89737 7.63142 9.7732 7.50651L7.10654 4.83984"
              stroke="#151515"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
