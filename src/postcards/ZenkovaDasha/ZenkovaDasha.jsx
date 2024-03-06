import React from "react";
import styles from "./styles.module.css";
import PhotoWithName from "../../modules/PhotoWithName/PhotoWithName";
import { Felicitation } from "../../modules/Felicitation";
import FloatingBackground from "../../modules/Backgrounds/FloatingBackground/FloatingBackground";
import Burger from "../../modules/Assets/Burger";
import Glasses from "../../modules/Assets/Glasses";
import photo from "./zenkovadasha.png";
const ZenkovaDasha = () => {
    return (
        <FloatingBackground
            bgcolors={["#EDDE5D", "#F09819"]}
            imgs={[Burger, Glasses]}
            repeatCountImgs={Math.floor(window.innerWidth / 100) * 2}>
            <div className={styles.container}>
                <PhotoWithName photoSrc={photo} name="Даша" />
                <Felicitation
                    title="Поздравляем тебя с Международным женским днем!"
                    bgcolor="white"
                    textcolor="black"
                    text="Почаще ослепляй нас своей улыбкой."
                />
            </div>
        </FloatingBackground>

        // <div style={{backgroundColor: 'gray'}}>
        //     <PhotoWithName photoSrc={photo} name="Зенкова Дарья" />
        // </div>
        // <TelegramButton />
    );
};

export default ZenkovaDasha;
