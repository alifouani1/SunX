import { Link } from "react-router-dom";
import React, { Component } from "react";
import "../styles/Navbar.css";
//import navlink
// import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>SunX</h1>
        </Link>
        <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/img-category">ImageGallery</Link>
            {/* <Link to="/categories">Categories</Link> */}
            {/* <Link>
              <DropdownButton
                id="dropdown-basic-button"
                title="Dropdown button"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </Link> */}
            <Link to="/puzzle-game">PuzzleGame</Link>
            <Link to="/quiz-option">Take A Quiz</Link>
            {/* <Link to="/login" className="login">
              Login
            </Link>
            <Link to="/signup" className="signup">
              Signup
            </Link> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
