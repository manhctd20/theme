import React from "react";
import "./style.scss";
import { Button, Col, Row } from "antd";
import images from "../../../assets/images";

function Footer() {
  return (
    <footer className="footer background-footer">
      <div>
        <div className="container-footer">
          <Row>
            <Col className="sp-18" xs={24} span={18}>
              <div className="product-form">
                <div className="form-help">
                  <div className="center">
                    <div style={{ fontFamily: "Nunito Sans" }}>
                      How can we help you?
                    </div>
                    <Button className="btn-contact" href="/">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="sp-10" span={10}>
              <div className="contact-form-footer__menu">
                <img src={images.phone} alt="phone" />
                <span className="ml-2">+13239828988</span>
              </div>
              <div className="contact-form-footer__menu">
                <img src={images.mail} alt="mail" />
                <span className="ml-2">support@eiiscolik.com</span>
              </div>
              <div className="contact-form-footer__menu">
                <img src={images.location} alt="location" />
                <span className="ml-2">
                  814 Mission Street, Suit 600 San Francisco, CA 84103 US
                </span>
              </div>
            </Col>
            <Col className="sp-4" xs={24} span={4}>
              <div className="contact-form-footer__group">Order</div>
              <div className="contact-form-footer__menu">
                <a href="/">Return &amp; Refund Policy</a>
              </div>
              <div className="contact-form-footer__menu">
                <a href="/pages/shipping-policy">Shipping Policy</a>
              </div>
            </Col>
            <Col className="sp-4" xs={24} span={4}>
              <div className="contact-form-footer__group">Resources</div>
              <div className="contact-form-footer__menu">
                <a href="/">Terms of Service</a>
              </div>
              <div className="contact-form-footer__menu">
                <a href="/">Privacy Policy</a>
              </div>
              <div className="contact-form-footer__menu">
                <a href="/">About Us</a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
