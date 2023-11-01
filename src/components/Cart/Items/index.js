import { Button, Col, Divider, Row } from "antd";
import React, { useEffect, useState } from "react";
import InputNumberN from "../../InputNumberN";

export default function Item({id, data, remove, priceSale, setData, quantity }) {
  console.log({data});
  // var total= priceSale * quantity;
  const [total, setTotal] = useState(0);
  
  var isDiscount = false;

  let discount = 0;
  if (quantity >= 2) {
    isDiscount = true;
    discount = (total * 0.1).toFixed(2);
  }
  if (quantity >= 4) {
    discount = (total * 0.15).toFixed(2);
  }
  let feeShip = 0;
  if (total < 50) {
    feeShip = 4.99;
  }
  useEffect(()=>{
    setTotal(priceSale*quantity)
     // eslint-disable-next-line 
  }, [quantity])
  return (
    <>
    {data.map((item, index) => {
        return (
          <div key={item.id}>
            <Row gutter={32}>
              <Col span={8}>
                <img
                  style={{ width: 120, borderRadius: 6 }}
                  src="https://storage.ehighway.co/images/b9700577-d925-4036-b0aa-d415c8f7daed-z466514022262492064b706d7771d7d39b30b0575d4a84jpg"
                  alt="img"
                />
              </Col>
              <Col span={16}>
                <Row gutter={24}>
                  <Col
                    style={{ display: "flex", flexDirection: "column" }}
                    span={16}
                  >
                    <strong>{item.title}</strong>
                    <div
                      style={{ marginTop: 10, display: "flex", fontSize: 11 }}
                    >
                      <span>BUY MORE SAVE MORE: </span>
                      <span style={{ marginLeft: 6 }}>{item.option}</span>
                    </div>
                  </Col>
                  <Col span={8}>
                    <Button
                      onClick={() => {
                        remove(item.id);
                      }}
                    >
                      <span
                        style={{
                          color: "#d25857",
                          textDecoration: "underline",
                        }}
                      >
                        Remove
                      </span>
                    </Button>
                  </Col>
                </Row>

                <Row style={{ marginTop: 10 }}>
                  <Col style={{ height: 50 }} className="inputNumber" span={12}>
                    <InputNumberN
                      setData={setData}
                      data={[item]}
                    />
                  </Col>
                  <Col span={10}>
                    <del
                      className="lbl-compared-price"
                      style={{ display: "inline-block" }}
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </del>
                    <span
                      style={{ fontSize: 16, marginLeft: 5 }}
                      className="lbl-price"
                      >
                       ${total}
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider />
          </div>
        );
      })}
      {data.length > 0 && (
        <>
          <span>SubTotal: ${total}</span>
          <br />

          {isDiscount && <Row>Discount: -${discount}</Row>}

          <span>Shipping: ${feeShip}</span>
          <br />
          <span>Total: ${(total + feeShip - discount).toFixed(2)}</span>
        </>
      )}
    </>
  );
}
