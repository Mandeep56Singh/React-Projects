/* eslint-disable react/no-unknown-property */

import "./App.css";
function Form() {
  return (
   <div className="main">
  <p className="sign" style={{textAlign: "center"}}>
    Sign in
  </p>
  <form className="form1">
    <input className="username" type="text" placeholder="Username" />
    <input className="password" type="password" placeholder="Password" />
    <button type="submit" className="submit" style={{textAlign: "center"}}>
      Sign in
    </button>
    <p className="forgot" style={{textAlign: "center"}}>
      <a href="#">Forgot Password? </a>
    </p>
  </form>
</div>

  );
}

export default Form;
