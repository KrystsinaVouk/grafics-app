import React from "react"
import { useHistory } from "react-router-dom"

import styles from "./SingleBlock.module.css"

function SingleBlock({ title, text }) {
    const history = useHistory()

    return (
        <div className={styles.imageContainer}>
            <h2>{title}</h2>
            <p>{text}</p>
            <button onClick={() => history.push("/about")}>Learn More</button>
        </div>
    )
}

export default SingleBlock
