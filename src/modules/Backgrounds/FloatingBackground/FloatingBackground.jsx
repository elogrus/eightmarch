import React from "react";
import styles from "./styles.module.css";
import Burger from "../../Assets/Burger";

const FloatingBackground = ({
    children,
    bgcolors = [],
    imgs = [Burger],
    repeatCountImgs = 15,
}) => {
    let imgsList = [];

    for (let i = 0; i <= repeatCountImgs; i++) {
        for (let img of imgs) {
            imgsList.push(React.createElement(img, { className: styles.svg }));
        }
    }

    return (
        <div className={styles.background} style={{ backgroundImage: "linear-gradient(#ec3521, #450101)" }}>
            {children}

            <div className={styles.wrap}>{imgsList}</div>
        </div>
    );
};

export default FloatingBackground;
