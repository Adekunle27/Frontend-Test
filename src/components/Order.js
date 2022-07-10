import React from "react";

const Order = ({ order }) => {
  return (
    <div className="orders">
      <div className="left__date">
        <h3>{order.date}</h3>
      </div>
      <div className="right__data">
        <h2>{order.name}</h2>
        <p>{order.order__name} </p>
        <p>Status: {order.status} </p>
      </div>
    </div>
  );
};

export default Order;
