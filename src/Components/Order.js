import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p className="order__id">
        <small>({order.id})</small>
      </p>
      <p>{moment.unix(order.data.created).format("MMM do YYYY, h:mma")}</p>

      {order.data.basket?.map((item) => (
        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
      ))}
      <CurrencyFormat renderText={(value) => <h3 className="order__total">Order Total: {value}</h3>} decimalScale={2} value={order.data.amount / 100} displayType={"text"} thousandSeparator={true} prefix={"₹"} />
    </div>
  );
};

export default Order;
