import React from "react";
import styles from "./styles.module.css";
import PhotoWithName from "../../modules/PhotoWithName/PhotoWithName";
import { Felicitation } from "../../modules/Felicitation";
import FloatingBackground from "../../modules/Backgrounds/FloatingBackground/FloatingBackground";
import photo from "./Sarvinoz.jpg";
import Draw from "../../modules/Assets/Draw";
import Painting from "../../modules/Assets/Painting";
const Sarvinoz = () => {
    return (
        <FloatingBackground
            bgcolors={["#ad5389", "#3c1053"]}
            imgs={[Draw, Painting]}
            repeatCountImgs={Math.floor(window.innerWidth / 100) * 2}>
            <div className={styles.container}>
                <PhotoWithName photoSrc={photo} name="Сарвиноз" />
                <Felicitation
                    title="Заголовок"
                    bgcolor="white"
                    textcolor="black"
                    text="Таким образом начало повседневной работы по формированию позиции играет важную роль в формировании форм развития. Задача организации, в особенности же консультация с широким активом играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что консультация с широким активом способствует подготовки и реализации дальнейших направлений развития. Товарищи! новая модель организационной деятельности требуют определения и уточнения соответствующий условий активизации. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание новых предложений."
                />
            </div>
        </FloatingBackground>
    );
};

export default Sarvinoz;
