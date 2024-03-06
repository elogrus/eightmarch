import React from "react";
import styles from "./styles.module.css";
import PhotoWithName from "../../modules/PhotoWithName/PhotoWithName";
import { Felicitation } from "../../modules/Felicitation";
import FloatingBackground from "../../modules/Backgrounds/FloatingBackground/FloatingBackground";
import photo from "./AldohinaKatya.jpg";
import Jacket from "../../modules/Assets/Jacket";
import SmileFace from "../../modules/Assets/SmileFace";
const AldohinaKatya = () => {
    return (
        <FloatingBackground
            bgcolors={["#FF4E50", "#F9D423"]}
            imgs={[Jacket, SmileFace]}
            repeatCountImgs={Math.floor(window.innerWidth / 100) * 2}> 
            <div className={styles.container}>
                <PhotoWithName
                    photoSrc={photo}
                    name="Катя"
                />
                <Felicitation
                    title="Поздравляем тебя с Международным женским днем!"
                    bgcolor="white"
                    textcolor="black"
                    text="Желаем, чтобы твой движок никогда не подводил. У тебя очень красивая улыбка, спанч боб оценил."
                />
            </div>
        </FloatingBackground>

        // <div style={{backgroundColor: 'gray'}}>
        //     <PhotoWithName photoSrc={photo} name="Зенкова Дарья" />
        // </div>
        // <TelegramButton />
    );
};

export default AldohinaKatya;
