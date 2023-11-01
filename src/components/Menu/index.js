import React from "react";
import "./style.scss";
import images from "../../assets/images";
import { CloseOutlined } from "@ant-design/icons";

function Menu() {
  return (
    <>
      <label htmlFor="btn-menu"><img src={images.bars} alt="icon-bar" /></label>
        <input
          type="checkbox"
          hidden
          name=""
          className="menu-open"
          id="btn-menu"
        />
        <label htmlFor="btn-menu" className="overlay" />
        <div className="menu-mobile text">
          <div>
            <div className="menu-header">
              <label htmlFor="btn-menu" className="btn-close-menu">
                <CloseOutlined />
              </label>
            </div>
            <div className="menu-container">
              <ul>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">Track Your Order</a>
                </li>
                <li>
                  <a href="/">Shipping Policy</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Refund & Return Policy</a>
                </li>
                <li>
                  <a href="/">Term Of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
}

export default Menu;
