import styles from "./styles.module.css";

export const ArrowButton = ({ className, ...props }) => {
    return (
        <div className={styles.round + " " + className} {...props}>
            <div>
                <span
                    className={
                        styles.arrow + " " + styles.primera + " " + styles.next
                    }></span>
                <span
                    className={
                        styles.arrow + " " + styles.segunda + " " + styles.next
                    }></span>
            </div>
        </div>
    );
};
