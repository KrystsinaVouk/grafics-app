import React, { useEffect } from "react";
import SingleBlock from "../../Components/SingleBlock/SingleBlock";
import { singleBlockProps } from "../../Components/SingleBlock/singleBlockProps";
import { useActions } from "../../store/hooks/useActions";
import styles from "./MainPage.module.css";
import catPicture from "../../assets/img/cat.png";
import blueNature from "../../assets/img/blueNature.png";
import darkNature from "../../assets/img/darkNature.png";
import birds from "../../assets/img/birds.png";

function MainPage() {
    const { firstBlock, thirdBlock, fourthBlock } = singleBlockProps;
    const { setNavbarVisibility } = useActions();

    useEffect(() => {
        setNavbarVisibility(false);
    }, []);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.pictureBox}>
                <SingleBlock title={firstBlock.title} text={firstBlock.text} />
            </div>
            <div className={styles.pictureBox}>
                <img alt={"blueNature"} src={blueNature} />
                <img alt={"catPicture"} src={catPicture} />
                <img alt={"birds"} src={birds} />
                <img alt={"darkNature"} src={darkNature} />
            </div>
            <div className={styles.pictureBox}>
                <div>
                    <p>{thirdBlock.text}</p>
                </div>
            </div>
            <div className={styles.pictureBox}>
                <SingleBlock title={fourthBlock.title} text={fourthBlock.text} />
            </div>
        </div>
    )
}

export default MainPage;
