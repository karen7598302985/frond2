import React, { useState } from "react";
import {Link, userNavigate} from 'react-router-dom';
const Login = () => {

  //PARA REDIRECCIONAR DE UN COMPONENTE A OTRO
  const navigate = userNavigate();

  const [first, setfirst] = useState(second)


    return (
   <div className="login-box">
  <div className="login-logo">
    <Link to={"#"}>
        <b>Admin</b>LTE
    </Link>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control"
           placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" 
          className="form-control"
           placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        
      </form>
      <div className="social-auth-links text-center mb-3">
    
        <button type='submit' className="btn btn-block btn-primary">
          Ingresar
          </button>
        
        <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
          Crear Cuenta
        </Link>
      </div>
      {/* /.social-auth-links */}
    
      <p className="mb-0">
        <Link to={"#"} className="text-center">Register a new membership</Link>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
   </div>
    );
}
export default Login;