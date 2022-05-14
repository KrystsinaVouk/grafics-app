import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useParams} from "react-router-dom";
import {useActions} from "../../redux/hooks/useActions";
import {useSelector} from "react-redux";
import kittenPicture from "../../assets/img/kitten.png"
import styles from './CatVotePage.module.css'


function CatVote() {
    const {id} = useParams();
    const {fetchSpecificVote} = useActions();
    const {specificVote, error} = useSelector(state => state.cat);

    useEffect(() => {
        fetchSpecificVote(id);
    }, [id])

    if (error) {
        return (
            <Typography style={{marginTop: 200}} variant={"h3"}>
                {error}...
            </Typography>
        );
    }

    if (specificVote) {
        return (
            <Card className={styles.cardContainer}>
                <Typography variant={'h6'}>Cat Vote Information</Typography>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={styles.cardAvatar}>
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
                    className={styles.cardMedia}
                    image={kittenPicture}
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

export default CatVote;
