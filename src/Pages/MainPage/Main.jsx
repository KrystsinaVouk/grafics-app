import React from 'react';
import FirstBlock from "../../Components/FirstBlock/FirstBlock";
import {propsForBlock} from "../../Components/FirstBlock/firstBlockData";
import styles from './Main.module.css'
import {useLocation} from "react-router-dom";

function Main() {
    const {firstBlock, fourthBlock} = propsForBlock;
    const pathName = useLocation();
    console.log(pathName);

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.pictureBox}>
                    <FirstBlock
                        title={firstBlock.title}
                        text={firstBlock.text}
                    />
                </div>
                <div className={styles.secondBlock}>
                    <img alt={'first'} src={`https://th.bing.com/th/id/R.d8c88f892c58773f1d09eac0b5247d9f?rik=04nGhl484F1QjQ&pid=ImgRaw&r=0`}/>
                    <img alt={'second'} src={`https://hddesktopwallpapers.in/wp-content/uploads/2015/09/goose-images.jpg`}/>
                    <img alt={'third'} src={`https://www.picamon.com/wp-content/uploads/2020/10/Picamon-northern-lights-0-5f8b42955e1ad`}/>
                    <img alt={'fourth'} src={`https://www.pcclean.io/wp-content/gallery/birds/331335.jpg`}/>

                </div>
                <div className={styles.pictureBox}>Nav</div>
                <div className={styles.pictureBox}>
                    <FirstBlock
                        title={fourthBlock.title}
                        text={fourthBlock.text}
                    />
                </div>
            </div>
        </>
    );
}

export default Main;
