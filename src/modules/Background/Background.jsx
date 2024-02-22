import React from "react";
import styles from "./styles.module.css";

const Background = ({ children }) => {
    return <div className={styles.background}>{children}</div>;
};

export default Background;
