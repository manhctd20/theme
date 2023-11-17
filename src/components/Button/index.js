import { CreditCardOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col } from "antd";
import React from "react";
import "./style.scss";
import { useCart } from "../../CartContext";

function ButtonN({ quantity}) {
  const { addToCart, openCart, setOpenCart } = useCart();
  return (
    <>
      <Col span={12}>
        <Button onClick={()=>{
          addToCart(quantity);
          setOpenCart(true);
        }} className="add-to-cart-button">
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
