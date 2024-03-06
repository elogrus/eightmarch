import React from "react";
import styles from "./styles.module.css";
import PhotoWithName from "../../modules/PhotoWithName/PhotoWithName";
import { Felicitation } from "../../modules/Felicitation";
import FloatingBackground from "../../modules/Backgrounds/FloatingBackground/FloatingBackground";
import photo from "./SokolovaDasha.jpg";
import Painting from "../../modules/Assets/Painting";
import Chess from "../../modules/Assets/Chess";
import HideFace from "../../modules/Assets/HideFace";
const SokolovaDasha = () => {
    return (
        <FloatingBackground
            bgcolors={["#eaafc8", "#654ea3"]}
            imgs={[Chess, HideFace]}
            repeatCountImgs={Math.floor(window.innerWidth / 100) * 2}>
            <div className={styles.container}>
                <PhotoWithName photoSrc={photo} name="Даша" />
                <Felicitation
                    title="Поздравляем тебя с Международным женским днем!"
                    bgcolor="white"
                    textcolor="black"
                    text="С 8 Марта поздравляю!
Буйной нежности желаю,
Больше шумного разврата
И в постели, и в зарплате.
Пусть соблазны покорятся,
Чтоб хотелось улыбаться,
Жизнь нескучно пусть течет,
И во всем всегда везет!"
                />
            </div>
        </FloatingBackground>
    );
};

export default SokolovaDasha;
