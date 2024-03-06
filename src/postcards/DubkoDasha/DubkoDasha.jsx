import React from "react";
import styles from "./styles.module.css";
import PhotoWithName from "../../modules/PhotoWithName/PhotoWithName";
import { Felicitation } from "../../modules/Felicitation";
import FloatingBackground from "../../modules/Backgrounds/FloatingBackground/FloatingBackground";
import photo from "./dubkodasha.png";
import Loudspeaker from "../../modules/Assets/Loudspeaker";
import Raketa from "../../modules/Assets/Raketa";
const DubkoDasha = () => {
    // photo = 'https://i.pinimg.com/736x/1f/86/60/1f8660ca4dc4ea88ec93ca0f29f376dd.jpg'
    //100 - 2
    return (
        <FloatingBackground
            bgcolors={["#AA076B", "#61045F"]}
            imgs={[Loudspeaker, Raketa]}
            repeatCountImgs={Math.floor(window.innerWidth / 100) * 2}>
            <div className={styles.container}>
                <PhotoWithName photoSrc={photo} name="Даша" />
                <Felicitation
                    title="Поздравляем тебя с Международным женским днем!"
                    bgcolor="white"
                    textcolor="black"
                    text="Желаем, чтобы твой вареник не стал щавелем, а фары не стали противотуманками. ( • )( • ) ԅ(‾⌣‾ԅ)"
                />
            </div>
        </FloatingBackground>

        // <div style={{backgroundColor: 'gray'}}>
        //     <PhotoWithName photoSrc={photo} name="Зенкова Дарья" />
        // </div>
        // <TelegramButton />
    );
};

export default DubkoDasha;
