
import { CircularProgress } from "@material-ui/core";
import { connect, ConnectedProps } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { register } from "./Register.thunk";


const constStyle: { [key in string]: React.CSSProperties } = {
  inputError: {
    color: "red",
    textAlign: "left",
  },
  formError: {
    color: "red",
  },
};

const mapStateToProps = (state: AppState) => ({
  errorRegister: state.register.error,
  loading: state.register.loading,
  userInfo:state.login.userInfo,
});

const mapDispatchToProps = {
  register,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

const Register = (props: Props) => {
  const { errorRegister, loading, register,userInfo } = props;
  let { data, Submit, errors, inputChange } = useForm(
    { email: "", password: "", name: "" },
    {
      validate: {
        email: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
        },
        name: {
          required: true,
        },
      },
      message: {
        email: {
          required: "Vui lòng điền email",
          pattern: "Vui lòng nhập đúng định dạng email",
        },
        password: {
          required: "Vui lòng điền password",
        },
        name: {
          required: "Vui lòng điền họ và tên",
        },
      },
    }
  );

  function _register(e: any) {
    e.preventDefault();
    let error = Submit();
    if (Object.keys(error).length === 0) {
      register(data);
    }
  }
  if (!loading && userInfo) return <Redirect to="/category" />
  return (
    <div className="login">
      <div className="container">
        <div className="img">
          <img src="/assets/bg.svg" />
        </div>
        <div className="login-content">
          <form action="index.html" onSubmit={_register}>
            <img src="/assets/avatar.svg" />
            <h2 className="title">Register</h2>
            {errorRegister && (
              <p className="error-text" style={constStyle.formError}>
                {errorRegister}
              </p>
            )}
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={inputChange}
                />
              </div>
            </div>
            {errors?.email && (
              <p className="error-text" style={constStyle.inputError}>
                {errors.email}
              </p>
            )}
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Username"
                  onChange={inputChange}
                />
              </div>
            </div>
            {errors?.name && (
              <p className="error-text" style={constStyle.inputError}>
                {errors.name}
              </p>
            )}
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  onChange={inputChange}
                />
              </div>
            </div>
            {errors?.password && (
              <p className="error-text" style={constStyle.inputError}>
                {errors.password}
              </p>
            )}
            <Link to="/login">Back to login</Link>
            <button type="submit" className="btn">{loading ? <CircularProgress size={30}/>:`Register`}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connector(Register);
