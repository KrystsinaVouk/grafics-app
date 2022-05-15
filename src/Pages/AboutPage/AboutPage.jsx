import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useActions } from "../../store/hooks/useActions";
import styles from "./AboutPage.module.css";

function AboutPage() {
    const { setNavbarVisibility } = useActions();

    useEffect(() => {
        setNavbarVisibility(true);
    }, []);

    return (
        <div className={styles.aboutContainer}>
            <Link to={"/about/votes"}>
                <Typography
                    variant={"h4"}>
                    Get All Votes
                </Typography>
            </Link>
            <Link to={"about/create-vote"}>
                <Typography
                    variant={"h4"}>
                    Post a vote
                </Typography>
            </Link>
        </div>
    );
}

export default AboutPage;
