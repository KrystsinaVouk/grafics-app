import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Grid, Typography } from "@material-ui/core";
import { useActions } from "../../store/hooks/useActions";
import VoteItem from "../../Components/VoteItem/VoteItem";
import styles from "./VotesPage.module.css";

let LIMIT = 5;
let PAGE = 1;
let SUB_ID = "test";

function VotesPage() {
    const { votes, error, loading } = useSelector(
        (state) => state.cat,
    );
    const { fetchVotes } = useActions();

    useEffect(() => {
        fetchVotes(LIMIT, PAGE, SUB_ID);
    }, [LIMIT, PAGE, SUB_ID]);

    if (loading) {
        return (
            <Typography
                className={styles.text}
                variant={"h3"}>
                Loading...
            </Typography>
        )
    }

    if (error) {
        return (
            <Typography
                className={styles.text}
                variant={"h3"}>
                {error}...
            </Typography>
        )
    }

    if (!votes.length) {
        return (
            <Typography
                className={styles.text}
                variant={"h3"}>
                No Cats Votes...
            </Typography>
        )
    }
    return (
        <Grid
            container
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Typography gutterBottom variant={"h3"}>
                Cat votes
            </Typography>
            <TransitionGroup
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}>
                {votes.map((vote) => (
                    <CSSTransition
                        key={vote.id}
                        timeout={700}
                        classNames={"vote"}>
                        <VoteItem vote={vote} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </Grid>
    )
}

export default VotesPage;
