import React from "react";
import styles from "./styles.module.css";
const Name = ({ children, className, ...props }) => {
    return (
        <div className={styles.container + " " + className} {...props}>
            <p className={styles.name}>{children}</p>;
        </div>
    );
};

export default Name;
