import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

import React from "react";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
