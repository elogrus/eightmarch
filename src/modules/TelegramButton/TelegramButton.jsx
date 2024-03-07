import React, { useState } from "react";
import styles from "./styles.module.css";
const TelegramButton = ({
    link = "http://t.me/aldhnbh_bot",
    text = "НАЖМИ НА МЕНЯ",
    textColor = "",
    bgcolor = "",
    className,
    ...props
}) => {
    const [stateText,setStateText] = useState(text)
    const onClick = (e) => {
        setStateText('СЕКУНДОЧКУ...')
        setTimeout(() => window.location.replace(link), 1500)
    }
    return (
        <a
            onClick={onClick}
            style={{ color: textColor, backgroundColor: bgcolor }}
            className={styles.button + ' ' + className}
            type="button"
            {...props}>
            <div className={styles.buttonTop}>{stateText}</div>
            <div className={styles.buttonBottom}></div>
            <div className={styles.buttonBase}></div>
        </a>
    );
};

export default TelegramButton;
