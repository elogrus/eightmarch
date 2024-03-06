import { Link } from "react-router-dom";
import Background from "../modules/Backgrounds/BaseBackground/BaseBackground";

export default function Root() {
    return (
        <div style={{display: "flex", flexDirection: 'column', gap: '10px', fontSize: '40px', padding: '10px 50px'}}>
            <h1>Ссылочки:</h1>
            <Link to={`/ZenkovaDasha/`}>- Зенкова</Link>
            <Link to={`/ZenkovaDasha/`}>- Дубко</Link>
            <Link to={`/DubkoDasha/`}>- Зенкова</Link>
            <Link to={`/liza/`}>- Лиза</Link>
            <Link to={`/katyavasilyeva/`}>- Васильева</Link>
            <Link to={`/vika/`}>- Вика</Link>
            <Link to={`/aldohinakatya/`}>- Алдохина</Link>
           
        </div>
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