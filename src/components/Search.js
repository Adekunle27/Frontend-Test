import React from "react";
import styles from "./Search.module.css";

const Search = ({ order, query, setQuery }) => {
  console.log(
    order.filter((orders) => {
      return orders.name.includes(query);
    })
  );

  return (
    <div className={styles.styles__body}>
      <input
        type="text"
        className={styles.styles__input}
        placeholder="Search your order here"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
