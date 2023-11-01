import { CreditCardOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col } from "antd";
import React from "react";
import "./style.scss";

function ButtonN() {
  return (
    <>
      <Col span={12}>
        <Button className="add-to-cart-button">
          <ShoppingCartOutlined style={{ fontSize: 24 }} />
          ADD TO CART
        </Button>
      </Col>
      <Col span={12}>
        <Button
          style={{ background: "#366AE2" }}
          className="add-to-cart-button buy"
        >
          <CreditCardOutlined style={{ fontSize: 24 }} />
          BUY IT NOW
        </Button>
      </Col>
    </>
  );
}

export default ButtonN;
