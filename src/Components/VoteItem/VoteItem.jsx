import React from 'react';
import {useHistory} from "react-router-dom";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import {useActions} from "../../redux/hooks/useActions";


function VoteItem({vote}) {

    const { deleteVote } = useActions();
    const history = useHistory();

    const removeVote = () => {
        deleteVote(vote.id);
    }
    const clickHandler = () => {
        history.push(`/about/votes/${vote.id}`);
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Sub_id: {vote.sub_id}
                </Typography>
                <Typography color="textSecondary" variant="body1">
                    Vote Id: {vote.id}
                </Typography>
                <Typography color="textSecondary" variant="body1">
                    Image_id : {vote.image_id}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => clickHandler()}>Learn More</Button>
                <Button variant={'outlined'} size="small" onClick={removeVote}>Delete Vote</Button>
            </CardActions>
        </Card>
    );
}

export default VoteItem;