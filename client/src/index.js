import React from "react";
import {createRoot} from "react-dom/client"
import Router from "./router.jsx";
import "./style/style.css"

const app = createRoot(document.getElementById("root"))
app.render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>
)