import React from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={styles.filter__container}>
      <div className={styles.order__title}>
        <h3>Filter Order by:- </h3>
      </div>
      <div className={styles.buttons}>
        <button>All</button>
        <button>Recieved</button>
        <button>In Progress</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default Filter;
