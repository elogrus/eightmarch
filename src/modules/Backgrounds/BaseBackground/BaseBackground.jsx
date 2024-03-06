import React from "react";
import styles from "./styles.module.css";
import Burger from "../../Assets/Burger";

const BaseBackground = ({ children }) => {
    return <div className={styles.background}>{children}</div>;
};

export default BaseBackground;
