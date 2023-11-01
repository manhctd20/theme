import { Col, Layout, Row } from "antd";
import React from "react";
import Slide from "../components/Slide";
import Product from "../components/Product";
import "./style.scss";
export default function ContentPage() {
  const images = [
    "https://storage.ehighway.co/images/b9700577-d925-4036-b0aa-d415c8f7daed-z466514022262492064b706d7771d7d39b30b0575d4a84jpg",
    "https://storage.ehighway.co/images/dce98d61-926d-4ee4-9f88-dfd83942c414-z466514020667741a47b131ec3910e5ed386418f340b08jpg",
    "https://storage.ehighway.co/images/af6326a6-0858-43fa-832a-da94067e16c6-z466514022274026fed05d106c62045b26ae79aba4f1cdjpg",
    "https://storage.ehighway.co/images/745f6dbb-bd2d-427b-a7ff-fedab79dd6bf-z46651402036156ed91aa186599f9f624fdc2d05659bc8jpg",
    "https://storage.ehighway.co/images/8c901a39-4934-489d-9375-86ca460df7c1-z4665140239013ae1aca90b9e8032650ed7c0925c78e36jpg",
  ];
  return (
    <Layout>
      <div className="container__wrapper">
        <Row gutter={28} style={{ margin: 0 }}>
          <Col className="sp-10" span={10}>
            <Slide images={images} />
          </Col>
          <Col className="sp-10" span={10}>
            <Product />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
