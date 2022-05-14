import React from 'react';
import {useHistory} from "react-router-dom";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import {useActions} from "../../redux/hooks/useActions";


function VoteItem({vote}) {

    const {deleteVote} = useActions();
    const history = useHistory();

    const removeVote = () => {
        deleteVote(vote.id);
    }
    const clickHandler = () => {
        history.push(`/about/votes/${vote.id}`);
    };

    return (
        <Card style={{margin: '5px 0'}}>
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
                <Button color={'primary'} variant={'contained'} size="small" onClick={() => clickHandler()}>Open
                    Vote</Button>
                <Button color={'secondary'} variant={'outlined'} size="small" onClick={removeVote}>Delete Vote</Button>
            </CardActions>
        </Card>
    );
}

export default VoteItem;
