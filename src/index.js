import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Notfound from "./routes/notfound";
import "./styles.css";
import DubkoDasha from "./postcards/DubkoDasha/DubkoDasha";
const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Notfound />,
        element: <Root />,
    },
    {
        path: "dubkodasha",
        errorElement: <Notfound />,
        element: <DubkoDasha />,
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