import { Routing } from "../../Routing/Routing"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import MenuBar from "../MenuBar/MenuBar"

function App() {
    return (
        <BrowserRouter>
            <MenuBar />
            <Routing />
        </BrowserRouter>
    )
}

export default App
