import TelegramButton from "../TelegramButton/TelegramButton";
import styles from "./styles.module.css";

export const Felicitation = ({
    title,
    text,
    bgcolor = "white",
    textcolor = "black",
    needButton = true
}) => {
    return (
        <div
            id="felicitation"
            className={styles.container}
            style={{ backgroundColor: bgcolor, color: textcolor, whiteSpace: 'pre-wrap' }}>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
            {needButton && <TelegramButton className={styles.button} />}
        </div>
    );
};
