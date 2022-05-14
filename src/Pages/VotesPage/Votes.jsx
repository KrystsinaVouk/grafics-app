import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@material-ui/core";
import {useActions} from "../../redux/hooks/useActions";
import VoteItem from "../../Components/VoteItem/VoteItem";

let LIMIT = 5;
let PAGE = 1;
let SUB_ID = "test";

function Votes() {
    const {votes, error} = useSelector((state) => state.cat);
    const {fetchVotes} = useActions();

    useEffect(() => {
        fetchVotes(LIMIT, PAGE, SUB_ID);
    }, [LIMIT, PAGE, SUB_ID]);

    if (error) {
        return (
            <Typography style={{marginTop: 200}} variant={"h3"}>
                {error}...
            </Typography>
        );
    }

    if (!votes.length) {
        return (
            <Typography style={{marginTop: 200}} variant={"h3"}>
                No Cats Votes...
            </Typography>
        );
    } else {
        return (
            <Grid container direction={'column'} justifyContent={"center"}
                  alignItems={"center"}>
                <Typography gutterBottom variant={"h3"}>Cat votes</Typography>
                <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    {votes.map((vote) => (
                        <VoteItem key={vote.id} vote={vote}/>
                    ))}
                </Grid>
            </Grid>
        );
    }
}

export default Votes;
