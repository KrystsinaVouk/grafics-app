import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import { useActions } from "../../store/hooks/useActions"
import styles from "./About.module.css"

function About() {
    const { setNavbarVisibility } = useActions()

    useEffect(() => {
        setNavbarVisibility(true)
    }, [])

    return (
        <div className={styles.aboutContainer}>
            <Link to={"/about/votes"}>
                <Typography
                    color={"textPrimary"}
                    variant={"h3"}>
                    Get All Votes
                </Typography>
            </Link>
            <Link to={"about/create-vote"}>
                <Typography
                    color={"textPrimary"}
                    variant={"h3"}>
                    Post a vote
                </Typography>
            </Link>
        </div>
    )
}

export default About
