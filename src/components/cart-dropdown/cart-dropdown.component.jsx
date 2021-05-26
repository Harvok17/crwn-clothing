import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import React from "react";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropDown);
