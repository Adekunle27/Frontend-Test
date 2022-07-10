import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Order from "./components/Order";

function App() {
  const [order, setOrder] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState("");

  // const fetchOrders = async () => {
  //   const data = await fetch(
  //     "https://mocki.io/v1/97a4cde0-74fe-4941-9aa5-a2ed87c1f2a1"
  //   );
  //   const orders = await data.json();
  //   console.log(orders);
  //   // setOrder(orders);
  //   // setFiltered(orders);
  // };

  useEffect(() => {
    fetch("https://mocki.io/v1/97a4cde0-74fe-4941-9aa5-a2ed87c1f2a1")
      .then((response) => response.json())
      .then((data) => setOrder(data));

    // fetchOrders();
  }, []);

  // API = https://mocki.io/v1/97a4cde0-74fe-4941-9aa5-a2ed87c1f2a1
  // API = https://mocki.io/v1/97a4cde0-74fe-4941-9aa5-a2ed87c1f2a1
  return (
    <div className="container">
      <div className="app__body">
        <Search />
        <Filter
          order={order}
          setFiltered={setFiltered}
          active={active}
          setActive={setActive}
        />
        {filtered.map((order) => {
          return <Order key={order.id} order={order} />;
        })}
      </div>
    </div>
  );
}

export default App;
