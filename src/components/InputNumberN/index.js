import { Button, InputNumber } from "antd";
import React, { useState, useEffect } from "react";
import "./style.scss";

export default function InputNumberN({ data, setData }) {
  const [productQuantities, setProductQuantities] = useState(() => {
    const quantities = {};
    data.forEach((product) => {
      quantities[product.id] = product.quantity || 0;
    });
    return quantities;
  });

  const handleIncrement = (productId) => {
    setData((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: (product.quantity || 0) + 1 };
        }
        return product;
      });
      return updatedProducts;
    });

    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setData((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: Math.max((product.quantity) - 1, 1),

          };
        }
        return product;
      });
      return updatedProducts;
    });

    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId]) - 1, 1),
    }));
  };

  useEffect(() => {
    const newQuantities = {};
    data.forEach((product) => {
      newQuantities[product.id] = product.quantity || 0;
    });
    setProductQuantities(newQuantities);
  }, [data]);

  return (
    <div className="wrap--inputNumber">
      <div className="inputNumber__body">
        {data.map((item) => (
          <div className="field" key={item.id}>
            <p className="control">
              <Button
                onClick={() => handleDecrement(item.id)}
                className="icon-button left"
              >
                -
              </Button>
            </p>
            <p className="control control-input">
              <InputNumber
                className="icon-button center"
                value={productQuantities[item.id]}
                min={1}
                readOnly
              />
            </p>
            <p className="control">
              <Button
                onClick={() => handleIncrement(item.id)}
                className="icon-button right"
              >
                +
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
