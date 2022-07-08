import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.styles__body}>
      <input
        type="text"
        className={styles.styles__input}
        placeholder="Search your order here"
      />
    </div>
  );
};

export default Search;
