import React from "react";
import { useCart } from "../../../CartContext";
import images from "../../../assets/images";
import Cart from "../../Cart";
import Menu from "../../Menu";
import "./style.scss";

function Header() {
  const { cart, setCart, removeItem, openCart, setOpenCart } = useCart();
  return (
    <div className="header__wrapper">
      <div className="header__announce">
        🚚 Free Shipping Over $40🤝 30 Days Risk-Free ❤Trusted checkout with
        PayPal® and CreditCard❤
      </div>
      <div className="header__main">
        <div className="header__item header__item--left">
          <Menu />
        </div>
        <div className="header__item header__item--center">
          <div className="header__logo">
            <a href="/">
              <img
                className="header-logo"
                src="https://storage.ehighway.co/images/4344f3f2-a933-48c3-90d1-2340e41465a0-ESSCOpng"
                alt="logo"
              />
            </a>
          </div>
        </div>

        <div className="header__item header__item--right">
          <img
            onClick={() => {
              setOpenCart(true);
            }}
            src={images.cart}
            alt="icon-cart"
          />
          <Cart open={openCart} close={() => {setOpenCart(false)}} data={cart} setData={setCart} remove={removeItem}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
