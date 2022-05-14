import React from "react";
import {Link} from "react-router-dom";
import styles from "./About.module.css";
import Typography from "@material-ui/core/Typography";

function About() {
    return (
        <div className={styles.aboutContainer}>
            <Link to={"/about/votes"}>
                <Typography color={'textPrimary'} variant={'h3'}>
                    Get All Votes
                </Typography>
            </Link>
            <Link to={"about/create-vote"}>
                <Typography color={'textPrimary'} variant={'h3'}>
                    Post a vote
                </Typography>
            </Link>
        </div>
    );
}

export default About;
