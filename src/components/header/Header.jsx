import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ articlename, setarticlename, settitlesearch }) {
  const handleChange = (event) => settitlesearch(event.target.value);

  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <h1 className="logo">LovegoodBlog</h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <i className="topIcon fas fa-search"></i>
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
    </div>
  );
}

export default Header;
