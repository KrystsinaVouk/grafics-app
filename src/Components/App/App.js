import React from "react";
import { Routing } from "../../Routing/Routing";
import { BrowserRouter } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";

function App() {
    return (
        <BrowserRouter>
            <MenuBar />
            <Routing />
        </BrowserRouter>
    );
}

export default App
