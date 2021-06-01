import React from "react";
import AdbIcon from "@material-ui/icons/Adb";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PhoneIcon from "@material-ui/icons/Phone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
const Navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  mt-3">
        <div className="container-fluid nav_div1 ">
          <a className="navbar-brand" href="#">
            <AdbIcon className="company_brand fs-1" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-3  ">
                <a className="nav-link active" aria-current="page" href="#">
                  Domains
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#">
                  Hosting
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#">
                  Security
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#" tabindex="-1">
                  More
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="  nav1_div2 " id="navbarNav">
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item me-4">
              <a className="nav-link active" aria-current="page" href="#">
                <span>Contact Us 24/7</span>
                <PhoneIcon className="nav_icon" />
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                <span>Blog</span>
                <HelpOutlineIcon className="nav_icon" />
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                <span>Help</span>
                <PermIdentityIcon className="nav_icon" />
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#" tabindex="-1">
                <span>Sign In</span>
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#" tabindex="-1">
                <ShoppingCartIcon className="nav_icon2" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
