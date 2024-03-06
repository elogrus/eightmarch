import React from "react";
import styles from "./styles.module.css";
import PhotoWithName from "../../modules/PhotoWithName/PhotoWithName";
import { Felicitation } from "../../modules/Felicitation";
import FloatingBackground from "../../modules/Backgrounds/FloatingBackground/FloatingBackground";
import photo from "./Marina.jpg";
import Draw from "../../modules/Assets/Draw";
import Painting from "../../modules/Assets/Painting";
const Marina = () => {
    return (
        <FloatingBackground
            bgcolors={["#4286f4", "#373B44"]}
            imgs={[Draw, Painting]}
            repeatCountImgs={Math.floor(window.innerWidth / 100) * 2}>
            <div className={styles.container}>
                <PhotoWithName photoSrc={photo} name="Марина Михайловна" />
                <Felicitation
                    title="Поздравляем вас с Международным женским днем!"
                    bgcolor="white"
                    textcolor="black"
                    text="С теплым и ясным праздником, с 8 Марта! Пусть весеннее солнышко растопит все печали, согреет своими лучами и подарит чудесное настроение. Желаем крепкого здоровья, полных сил, счастья и учеников попроще!"
                    needButton={false}
                />
            </div>
        </FloatingBackground>
    );
};

export default Marina;
