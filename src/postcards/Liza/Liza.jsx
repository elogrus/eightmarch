import React from "react";
import styles from "./styles.module.css";
import PhotoWithName from "../../modules/PhotoWithName/PhotoWithName";
import { Felicitation } from "../../modules/Felicitation";
import FloatingBackground from "../../modules/Backgrounds/FloatingBackground/FloatingBackground";
import photo from "./Liza.png";
import Chemistry from "../../modules/Assets/Chemistry";
import LensFace from "../../modules/Assets/LensFace";
const Liza = () => {
    return (
        <FloatingBackground
            bgcolors={["#C04848", "#480048"]}
            imgs={[Chemistry, LensFace]}
            repeatCountImgs={Math.floor(window.innerWidth / 100) * 2}> 
            <div className={styles.container}>
                <PhotoWithName
                    photoSrc={photo}
                    name="Лиза"
                />
                <Felicitation
                    title="Поздравляем тебя с Международным женским днем!"
                    bgcolor="white"
                    textcolor="black"
                    text="Желаем быстрого карьерного роста и не только карьерного =)"
                />
            </div>
        </FloatingBackground>

        // <div style={{backgroundColor: 'gray'}}>
        //     <PhotoWithName photoSrc={photo} name="Зенкова Дарья" />
        // </div>
        // <TelegramButton />
    );
};

export default Liza;
