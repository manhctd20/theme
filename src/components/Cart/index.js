import { Drawer } from "antd";
import React from "react";
import Item from "./Items";

export default function Cart(props) {
  const { open, close, data, remove, priceSale, setData, id, quantity } = props;
  return (
    <>
      <Drawer
        title="Your shopping cart"
        open={open}
        onClose={close}
        maskClosable
        zIndex={99999}
        width={480}
      >
        {data ? (
          <Item
            data={data}
            setData={setData}
            remove={remove}
            priceSale={priceSale}
            id={id}
            quantity={quantity}
          />
        ) : (
          "chua co san pham"
        )}
      </Drawer>
    </>
  );
}
