const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="img">
          <img src="/assets/bg.svg" />
        </div>
        <div className="login-content">
          <form action="index.html">
            <img src="/assets/avatar.svg" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" className="input" />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" defaultValue="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
