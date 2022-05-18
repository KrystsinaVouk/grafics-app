import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import styles from "./VoteItem.module.css";
import { useVoteItem } from "./useVoteItem";

function VoteItem({ vote }) {

    const { removeVote, clickHandler } = useVoteItem(vote.id);

    return (
        <Card className={styles.cardBox}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Sub_id: {vote.sub_id}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body1">
                    Vote Id: {vote.id}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body1">
                    Image_id : {vote.image_id}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant={"outlined"}
                    size="small"
                    onClick={() => clickHandler()}>
                    Open Vote
                </Button>
                <Button
                    color={"secondary"}
                    variant={"outlined"}
                    size="small"
                    onClick={removeVote}>
                    Delete Vote
                </Button>
            </CardActions>
        </Card>
    )
}

export default VoteItem
