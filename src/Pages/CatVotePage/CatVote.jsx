import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useParams} from "react-router-dom";
import {useActions} from "../../redux/hooks/useActions";
import {useSelector} from "react-redux";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
        marginTop: 100,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function CatVote() {
    const {id} = useParams();
    const {fetchSpecificVote} = useActions();
    const {specificVote, error} = useSelector(state => state.cat);
    const classes = useStyles();

    useEffect(() => {
        fetchSpecificVote(id);
        console.log(specificVote && specificVote)
    }, [])

    if (error) {
        return <h1>{error}</h1>
    }

    if (specificVote) {
        return (
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={`User ID: ${specificVote['user_id']}`}
                    subheader={`Created at: ${specificVote['created_at']}`}
                />
                <CardMedia
                    className={classes.media}
                    image="https://th.bing.com/th/id/R.ac8f97c899cae5094e1d0fd57a0efb0a?rik=pum%2fi2b6NUQKug&pid=ImgRaw&r=0"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`Sub ID: ${specificVote['sub_id']}`}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        )
    }


}
