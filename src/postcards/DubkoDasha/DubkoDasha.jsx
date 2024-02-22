import React from "react";
import Background from "../../modules/Background/Background";
import styles from "./styles.module.css";
import PhotoWithName from "../../modules/PhotoWithName/PhotoWithName";
import { Felicitation } from "../../modules/Felicitation";
import { ArrowButton } from "../../modules/ArrowButton";
const DubkoDasha = () => {
    return (
        <Background>
            <div className={styles.container}>
                <PhotoWithName />
                <Felicitation />
            </div>
        </Background>
    );
};

export default DubkoDasha;
