import React from "react";
import styles from "./styles.module.css";
import PhotoWithName from "../../modules/PhotoWithName/PhotoWithName";
import { Felicitation } from "../../modules/Felicitation";
import FloatingBackground from "../../modules/Backgrounds/FloatingBackground/FloatingBackground";
import photo from "./KatyaVasilyeva.jpg";
import TongueFace from "../../modules/Assets/TongueFace";
import Cat from "../../modules/Assets/Cat";
const KatyaVasilyeva = () => {
    return (
        <FloatingBackground
            bgcolors={["#870000", "#190A05"]}
            imgs={[TongueFace, Cat]}
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
                    text="Это не ты опаздываешь, а весь мир спешит."
                />
            </div>
        </FloatingBackground>

        // <div style={{backgroundColor: 'gray'}}>
        //     <PhotoWithName photoSrc={photo} name="Зенкова Дарья" />
        // </div>
        // <TelegramButton />
    );
};

export default KatyaVasilyeva;
