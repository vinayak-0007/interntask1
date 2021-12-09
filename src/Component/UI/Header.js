import React from "react";
import styles from  "./Header.module.css";
import { FaSistrix } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";


const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>ATG.WORLD</div>
        <div className={styles.search}>
          <FaSistrix className={styles.searchIcon} />
          <input
            className={styles.srerchInput}
            type="text"
            placeholder="Search of your favorite group in ATG"
          ></input>
        </div>
        <div className={styles.account}>
          <p> create account.<span className={styles.spantag}> It's free!</span> <BsFillCaretDownFill className={styles.searchIcon} /></p>
        </div>
      </div>
    </>
  );
};

export default Header;
