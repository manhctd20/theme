import React, { useEffect, useRef } from "react";
import ButtonN from "../Button";
import InputNumberN from "../InputNumberN";

import { Col, Row, Select } from "antd";
import "./style.scss";

export default function StickyAddToCart() {
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
            <div>
              <InputNumberN />
            </div>
          </Col>
        </Row>
        <div className="sticky-btn">
          <Row gutter={[8, 8]}>
            <ButtonN />
          </Row>
        </div>
      </Col>
    </div>
  );
}
