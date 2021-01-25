import { CircularProgress } from "@material-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "./Login.thunk";

const constStyle: { [key in string]: React.CSSProperties } = {
  inputError: {
    color: 'red',
    textAlign: 'left',
  },
  formError: {
    color: 'red'
  }
}

const mapStateToProps = (state: AppState) => ({
  loading: state.login.loading,
  error : state.login.error,
  userInfo:state.login.userInfo,
});

const mapDispatchToProps = {
  login,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

const Login = (props : Props) => {
  const { loading,userInfo,login,error} = props;
  let { data, Submit, errors, inputChange } = useForm({ username: '', password: '' }, {
    validate: {
      username: {
        required: true
      },
      password: {
        required: true
      }
    },
    message: {
      username: {
        required: 'Vui lòng điền tên đăng nhập'
      },
      password: {
        requried: 'Vui lòng điền password'
      }
    }
  })

  function _login(e : any) {
    e.preventDefault();
    let error = Submit();
    if (Object.keys(error).length === 0) {
      login(data);
    }
  }

  if (!loading && userInfo) return <Redirect to="/category" />
  
  return (
    <div className="login" onSubmit={_login}>
      <div className="container">
        <div className="img">
          <img src="/assets/bg.svg" />
        </div>
        <div className="login-content">
          <form action="index.html">
            <img src="/assets/avatar.svg" />
            <h2 className="title">Login</h2>
            {
              error && <p className="error-text" style={constStyle.formError}>{error}</p>
            }
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <input type="text" className="input" onChange={inputChange} name="username" placeholder="Email" />
              </div>
            </div>
            {
              errors?.username && <p className="error-text" style={constStyle.inputError}>{errors.username}</p>
            }
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                <input type="password" className="input" onChange={inputChange} name="password" placeholder="Password" />
              </div>
            </div>
            {
              errors?.password && <p className="error-text" style={constStyle.inputError}>{errors.password}</p>
            }
            <div style={{ display: 'flex',marginTop:10 }}>
              <Link to="/forgot-password">Forgot Password?</Link>
              <Link to="/register" style={{ marginLeft: 'auto' }}>Do you have account? <span style={{ color: '#189eff' }}>Register</span></Link>
            </div>
            <button type="submit" className="btn">{loading ? <CircularProgress size={30}/>:`Login`}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connector(Login);
