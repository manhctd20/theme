import React, { useEffect, useRef, useState } from "react";
import ButtonN from "../Button";
import InputNumberN from "../InputNumberN";

import { Button, Col, InputNumber, Row, Select } from "antd";
import "./style.scss";
import { useCart } from "../../CartContext";

export default function StickyAddToCart() {
  const { cart, setCart, removeItem, openCart, setOpenCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const cartRef = useRef(null);
  const stickyCartFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 320 ||
        document.documentElement.scrollTop > 320
      ) {
        cartRef.current.classList.add("sticky__cart");
      } else {
        cartRef.current.classList.remove("sticky__cart");
      }
    });
  };
  useEffect(() => {
    stickyCartFunc();
    return window.removeEventListener("scroll", stickyCartFunc);
  });

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="addToCart" ref={cartRef}>
      <Col className="sticky-display">
        <Row gutter={[8, 8]}>
          <Col span={18}>
            <Select
              defaultValue="BUY 1"
              style={{
                width: "100%",
              }}
              allowClear
              options={[
                {
                  value: "BUY 1",
                  label: "BUY 1",
                },
                {
                  value: "👍BUY 2 GET 10% OFF",
                  label: "👍BUY 2 GET 10% OFF",
                },
                {
                  value: "BUY 4 GET 15% OFF &amp; FREE SHIPPING",
                  label: "BUY 4 GET 15% OFF &amp; FREE SHIPPING",
                },
              ]}
            />
          </Col>
          <Col span={6}>
          <div className="field">
              <p className="control">
                <Button onClick={handleDecrease} className="icon-button left">
                  -
                </Button>
              </p>
              <p className="control control-input">
                <InputNumber
                  className="icon-button center"
                  value={quantity}
                  min={1}
                  readOnly
                />
              </p>
              <p className="control">
                <Button onClick={handleIncrease} className="icon-button right">
                  +
                </Button>
              </p>
            </div>
          </Col>
        </Row>
        <div className="sticky-btn">
          <Row gutter={[8, 8]}>
            <ButtonN quantity={quantity}/>
          </Row>
        </div>
      </Col>
    </div>
  );
}
