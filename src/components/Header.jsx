import { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);

  return (
    <header>
      <div
        id="menu-bar"
        className={`fas fa-bars ${menuActive ? "fa-times" : ""}`}
        onClick={() => setMenuActive(!menuActive)}
      ></div>
      <a href="#" className="logo">
        <span id="name">SK</span> <span>T</span>ravel
      </a>

      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#book">Book</a>
        <a href="#packages">Packages</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="icons">
        <i
          className={`fas fa-search ${searchActive ? "fa-times" : ""}`}
          onClick={() => setSearchActive(!searchActive)}
        ></i>
        <i
          className="fas fa-user"
          onClick={() => setLoginActive(true)}
        ></i>
      </div>

      <form
        action=""
        className={`search-bar-container ${searchActive ? "active" : ""}`}
      >
        <input type="search" id="search-bar" placeholder="search here..." />
        <label htmlFor="search-bar" className="fas fa-search"></label>
      </form>

      {loginActive && (
        <div className="login-form-container active">
          <i
            className="fas fa-close"
            id="form-close"
            onClick={() => setLoginActive(false)}
          ></i>
          <form>
            <h3>Login</h3>
            <input type="email" className="box" placeholder="enter your email" />
            <input
              type="password"
              className="box"
              placeholder="enter your password"
            />
            <input type="submit" value="login now" className="btn" />
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
            <p>
              Forget Password? <a href="#">Click here</a>
            </p>
            <p>
              Don't have an Account? <a href="#">Register now</a>
            </p>
          </form>
        </div>
      )}
    </header>
  );
}
