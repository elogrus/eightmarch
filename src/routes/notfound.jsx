import React from "react";
import { Link } from "react-router-dom";
import Background from "../modules/Background/Background";

const Notfound = () => {
    return (
        <Background>
            Такой страницы нет
            <Link to={`/`}>go to root</Link>
        </Background>
    );
};

export default Notfound;
