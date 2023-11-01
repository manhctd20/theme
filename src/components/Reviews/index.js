import React from "react";
import "./style.scss";
import images from "../../assets/images";

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews__title">Reviews</div>
      <div className="reviews__details">
        <div className="">
          <div className="d-flex">
            <div className="review__name">G**a</div>
            <div className="review__email">
              <small className="">givia@hotline.com</small>
            </div>
          </div>
          <div className="review__rate">
            <span style={{ marginRight: 5 }}>(5)</span>
            <img src={images.star} alt="star" />
            <img src={images.star} alt="star" />
            <img src={images.star} alt="star" />
            <img src={images.star} alt="star" />
            <img src={images.star} alt="star" />
          </div>
        </div>
        <div className="">
          <div className="review__title">Good quality!</div>
          <div className="review__images"></div>
          <div className="review__content">Good quality!</div>
        </div>
      </div>
    </div>
  );
}
