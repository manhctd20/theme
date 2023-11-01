import React from "react";
import "./style.scss";
import { Button } from "antd";

function Option() {
  return (
    <>
      <div className="product__options">
        <div className="product__varians">
          <div>
            <label
              className="label"
            >
              BUY MORE SAVE MORE
            </label>
          </div>
          <div className="product__body">
            <div className="product__body--field">
              <div className="control">
                <Button className="button">
                  BUY 1
                </Button>
              </div>
              <div className="control">
                <Button className="button">
                  👍BUY 2 GET 10% OFF
                </Button>
              </div>
              <div className="control">
                <Button className="button">
                  BUY 4 GET 15% OFF &amp; FREE SHIPPING
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Option;
