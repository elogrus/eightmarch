import { Link } from "react-router-dom";

export default function Root() {
    return (
        <div style={{display: "flex", flexDirection: 'column', gap: '10px', fontSize: '40px', padding: '10px 50px'}}>
            <h1>Ссылочки:</h1>
            <Link to={`/ZenkovaDasha/`}>- Зенкова</Link>
            <Link to={`/DubkoDasha/`}>- Дубко</Link>
            <Link to={`/liza/`}>- Лиза</Link>
            <Link to={`/katyavasilyeva/`}>- Васильева</Link>
            <Link to={`/vika/`}>- Вика</Link>
            <Link to={`/aldohinakatya/`}>- Алдохина</Link>
            <Link to={`/marina/`}>- Марина</Link>
            <Link to={`/sokolovadasha/`}>- Соколова</Link>
            <Link to={`/sarvinoz/`}>- Сарвиноз</Link>
           
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