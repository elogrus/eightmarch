import React, { useEffect, useRef } from "react";
import Name from "../Name/Name";
import styles from "./styles.module.css";
import FlowersCircle from "../Assets/FlowersCircle";
import { ArrowButton } from "../ArrowButton";
const PhotoWithName = ({
    photoSrc = "https://i.pinimg.com/736x/1f/86/60/1f8660ca4dc4ea88ec93ca0f29f376dd.jpg",
    name = "Гигачад Гигачадович",
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.photoContainer}>
                    <img className={styles.photo} src={photoSrc} />
                    <img className={styles.photoShadow} src={photoSrc} />
                    <div className={styles.flowerscirclecontainer}>
                        <FlowersCircle className={styles.flowerscircle} />
                    </div>
                </div>

                <Name className={styles.name}>{name}</Name>
            </div>
        </div>
    );
};

export default PhotoWithName;
