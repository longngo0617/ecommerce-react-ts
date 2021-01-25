import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import useForm from "../../hooks/useForm";
import Confirm from "./components/Confirm";
import Info from "./components/Info";
import Notes from "./components/Notes";
import Order from "./components/Order";
import Payment from "./components/Payment";

const constStyle: { [key in string]: React.CSSProperties } = {
  inputError: {
    color: 'red',
    textAlign: 'left',
  },
  formError: {
    color: 'red'
  }
}
export default function Checkout() {

  let { data, Submit, errors, inputChange } = useForm(
  { firstName: '', lastName: '', email: '',phone: '',address: ''},
     {
    validate: {
      firstName: {
        required: true
      },
      lastName: {
        required: true
      },
      email: {
        required: true,
        pattern: "email",
      },
      phone: {
        required: true,
        pattern: "phone",
      },
      address: {
        required: true,
      }
    },
    message: {
      firstName: {
        required: 'Vui lòng điền tên của bạn'
      },
      lastName: {
        required: 'Vui lòng điền họ của bạn'
      },
      email: {
        required: 'Vui lòng điền email',
        pattern: "Vui lòng nhập đúng định dạng email",
      },
      phone: {
        required: 'Vui lòng điền số điện thoại',
        pattern: "Số điện thoại có 10 chữ số",
      },
      address: {
        required: 'Vui lòng điền địa chỉ nhà của bạn',
      }
    }
  })
  function _Submit(e: any) {
    e.preventDefault();
    let errorForm = Submit();
    if (Object.keys(errorForm).length === 0) {
      console.log("ok")
    }
  }
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
              <form onSubmit={_Submit}>
                <Info inputChange={inputChange} errors={errors} constStyle={constStyle}/>
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
