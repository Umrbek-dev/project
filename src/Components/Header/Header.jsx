import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__box-1">
              <a href="/">
                <img src="./logo.png" alt="" />
              </a>
              <div className="umar__bot">
                <ul>
                  <a href="#1">Features</a>
                  <a href="#3">Premium</a>
                  <a href="#4">Pricing</a>
                  <a href="#2">About</a>
                  <a href="/">
                    <img src="./logooo.png" alt="" />
                  </a>
                  <a href="">Sign in</a>
                </ul>
                <button className="btn">Get Started</button>
              </div>
            </div>

            <div className="header__box-2">
              <div className="header__nav">
                <div className="header__nav-2">
                  <p>Propel your business</p>
                  <span>
                    Propel comes with everything you need 
                    to get your business
                    rolling.
                  </span>
                </div>
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
