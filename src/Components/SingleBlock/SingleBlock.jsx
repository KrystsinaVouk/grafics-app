import React from 'react';
import {Link} from "react-router-dom";

import styles from './SingleBlock.module.css'

function SingleBlock({title, text}) {

    return (
        <div className={styles.imageContainer}>
            <h2>{title}</h2>
            <p>{text}</p>
            <Link to={'/about'}>Learn More</Link>
        </div>
    );
}

export default SingleBlock;
