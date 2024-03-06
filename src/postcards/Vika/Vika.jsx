import React from "react";
import styles from "./styles.module.css";
import PhotoWithName from "../../modules/PhotoWithName/PhotoWithName";
import { Felicitation } from "../../modules/Felicitation";
import FloatingBackground from "../../modules/Backgrounds/FloatingBackground/FloatingBackground";
import photo from "./Vika.jpg";
import ConstBook from "../../modules/Assets/ConstBook";
import PoliticsGirl from "../../modules/Assets/PoliticsGirl";
const Vika = () => {
    return (
        <FloatingBackground
            bgcolors={["#7474BF", "#348AC7"]}
            imgs={[ConstBook, PoliticsGirl]}
            repeatCountImgs={Math.floor(window.innerWidth / 100) * 2}> 
            <div className={styles.container}>
                <PhotoWithName
                    photoSrc={photo}
                    name="Вика"
                />
                <Felicitation
                    title="Поздравляем тебя с Международным женским днем!"
                    bgcolor="white"
                    textcolor="black"
                    text="Желаем, чтобы запасы чак-чака и эчпочмаков никогда не заканчивались."
                />
            </div>
        </FloatingBackground>

        // <div style={{backgroundColor: 'gray'}}>
        //     <PhotoWithName photoSrc={photo} name="Зенкова Дарья" />
        // </div>
        // <TelegramButton />
    );
};

export default Vika;
