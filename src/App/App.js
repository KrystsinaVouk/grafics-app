import {Routing} from "../Routing/Routing";
import {BrowserRouter} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import React from "react";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routing/>
            </BrowserRouter>
        </>
    );
}

export default App;
