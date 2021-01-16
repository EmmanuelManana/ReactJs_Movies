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
              <ul  className="header__nav-links">
                <li>
                  <a href="#">Home</a> 
                </li>
                <li>
                  <a href="#">Popular <br/>Movies</a> 
                </li>
                <li>
                  <a href="#">About The <br/>Developer</a> 
                </li>
              </ul>
        </nav>
    </div>
  );
};

export default Header;
