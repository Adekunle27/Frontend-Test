import React, { useEffect } from "react";
// import styles from "./Filter.module.css";

const Filter = ({ active, setActive, setFiltered, order }) => {
  useEffect(() => {
    if (active === "") {
      setFiltered(order);
      return;
    }

    const filtered = order.filter((order) => order.status === active);
    setFiltered(filtered);
  }, [order, setFiltered, active]);

  return (
    <div className="filter__container">
      <div className="order__title">
        <h3>Filter Order by:- </h3>
      </div>
      <div className="buttons">
        <button
          onClick={() => setActive("")}
          className={active === "" ? "active" : ""}
        >
          {" "}
          All
        </button>
        <button
          onClick={() => setActive("recieved")}
          className={active === "recieved" ? "active" : ""}
        >
          Recieved
        </button>
        <button
          onClick={() => setActive("progress")}
          className={active === "progress" ? "active" : ""}
        >
          In Progress
        </button>
        <button
          onClick={() => setActive("completed")}
          className={active === "completed" ? "active" : ""}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Filter;
