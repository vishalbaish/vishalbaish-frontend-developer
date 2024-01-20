import React from "react";
import styles from "./index.module.scss";
import searchIcon from "../../assets/searchIcon.png";
import filterIcon from "../../assets/filter.png";

const SearchBox = () => {
  return (
    <div className={styles.searchBoxWrapper}>
      <img src={searchIcon} className={styles.Icon} />
      <input type="text" className={styles.input} />
      <img src={filterIcon} className={styles.Icon} />
    </div>
  );
};

export default SearchBox;
