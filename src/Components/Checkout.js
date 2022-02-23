import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal.js";

export default function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://www.helium10.com/app/uploads/2018/12/Banner-Amazon-Advertising-Marketing-Guide-01.png" alt="" className="checkout__ad" />
        <div>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} hideButton={true} />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
