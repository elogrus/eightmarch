import React from "react";
import styles from "./styles.module.css";
import PhotoWithName from "../../modules/PhotoWithName/PhotoWithName";
import { Felicitation } from "../../modules/Felicitation";
import FloatingBackground from "../../modules/Backgrounds/FloatingBackground/FloatingBackground";
import photo from "./Sarvinoz.jpg";
import Hedgehog from "../../modules/Assets/Hedgehog";
import Brained from "../../modules/Assets/Brained";
const Sarvinoz = () => {
    return (
        <FloatingBackground
            bgcolors={["#ad5389", "#3c1053"]}
            imgs={[Hedgehog, Brained]}
            repeatCountImgs={Math.floor(window.innerWidth / 100) * 2}>
            <div className={styles.container}>
                <PhotoWithName photoSrc={photo} name="Сарвиноз" />
                <Felicitation
                    title="Поздравляем тебя с Международным женским днем!"
                    bgcolor="white"
                    textcolor="black"
                    text='Пусть весна подарит счастье,
Настроение и успех.
Пусть обходят вас ненастья,
И звучит почаще смех!

Наслаждайся, улыбайся.
Оптимизма и добра.
С праздником 8 Марта!
Ты прекрасна, как всегда!'
                />
            </div>
        </FloatingBackground>
    );
};

export default Sarvinoz;
