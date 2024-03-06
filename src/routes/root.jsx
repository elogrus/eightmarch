import { Link } from "react-router-dom";
import Background from "../modules/Backgrounds/BaseBackground/BaseBackground";

export default function Root() {
    return (
        <Background>
            <p style={{ fontSize: 50 }}>Здесь нет ничего интересного. Правда</p>

            <Link to={`/ZenkovaDasha/`}>Чекнуть страницу</Link>
        </Background>
    );
}

// Катя
// Вика
// Лиза
// Дубко
// Соколова
// Зенкова
// Сарвиноз
// М.М.
// Вася