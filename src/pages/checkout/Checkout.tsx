import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Confirm from "./components/Confirm";
import Info from "./components/Info";
import Notes from "./components/Notes";
import Order from "./components/Order";
import Payment from "./components/Payment";

export default function Checkout() {
  return (
    <>
      <Breadcrumbs links={[
        { title: "Homepage", link: "/" },
        { title: "Checkout page" },
        ]} />
      <section className="checkout">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <form action="/">
                <Info />
                <Payment />
                <Notes />
                <Confirm />
              </form>
            </div>
            <div className="col-md-5">
              <Order />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
