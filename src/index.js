import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Notfound from "./routes/notfound";
import "./styles.css";
import ZenkovaDasha from "./postcards/ZenkovaDasha/ZenkovaDasha";
import DubkoDasha from "./postcards/DubkoDasha/DubkoDasha";
import Liza from "./postcards/Liza/Liza";
import KatyaVasilyeva from "./postcards/KatyaVasilyeva/KatyaVasilyeva";
import Vika from "./postcards/Vika/Vika";
import AldohinaKatya from "./postcards/AldohinaKatya/AldohinaKatya";
import Marina from "./postcards/Marina/Marina";
import SokolovaDasha from "./postcards/SokolovaDasha/SokolovaDasha";
import Sarvinoz from "./postcards/Sarvinoz/Sarvinoz";
import Redirect from "./routes/redirect";
const router = createHashRouter([
    {
        path: "/",
        errorElement: <Notfound />,
        element: <Notfound />,
    },
    {
        path: "/linkssss",
        errorElement: <Notfound />,
        element: <Root />,
    },
    {
        path: "/zenkovadasha",
        errorElement: <Notfound />,
        element: <ZenkovaDasha />,
    },
    {
        path: "/dubkodasha",
        errorElement: <Notfound />,
        element: <DubkoDasha />,
    },
    {
        path: "/liza",
        errorElement: <Notfound />,
        element: <Liza />,
    },
    {
        path: "/katyavasilyeva",
        errorElement: <Notfound />,
        element: <KatyaVasilyeva />,
    },
    {
        path: "/vika",
        errorElement: <Notfound />,
        element: <Vika />,
    },
    {
        path: "/aldohinakatya",
        errorElement: <Notfound />,
        element: <AldohinaKatya />,
    },
    {
        path: "/marina",
        errorElement: <Notfound />,
        element: <Marina />,
    },
    {
        path: "/sokolovadasha",
        errorElement: <Notfound />,
        element: <SokolovaDasha />,
    },
    {
        path: "/sarvinoz",
        errorElement: <Notfound />,
        element: <Sarvinoz />,
    },
    {
        path: "/podarokk",
        errorElement: <Notfound />,
        element: <Redirect />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
