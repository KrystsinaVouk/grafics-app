import React from 'react';
import styles from './FirstBlock.module.css'
import {useHistory} from "react-router-dom";

function FirstBlock({title, text}) {

    const history  = useHistory();

    return (
        <div className={styles.imageContainer}>
            <h3>{title}</h3>
            <p>{text}</p>
            <button onClick={()=>history.push('/about')}>Learn More</button>
        </div>
    );
}

export default FirstBlock;
