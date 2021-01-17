import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header">
        <nav>
            <div className="header__logo">
                <h3>
                  Awesome <br/> Movies
                </h3>
            </div>

            {/* justify-content: space-around; */}
              <ul  className="header__navLinks">
                <li>
                  <a href="www.com">Home</a> 
                </li>
                <li>
                  <a href="www.com">Popular <br/>Movies</a> 
                </li>
                <li>
                  <a href="www.com">About The <br/>Developer</a> 
                </li>
              </ul>

              <div className="Header__burger">
                <div className="burger__line1"></div>
                <div className="burger__line2"></div>
                <div className="burger__line3"></div>
              </div>

        </nav>
    </div>
  );
};

export default Header;
