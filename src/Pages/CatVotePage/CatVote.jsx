import React, { useEffect } from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { useHistory, useParams } from "react-router-dom"
import { useActions } from "../../store/hooks/useActions"
import { useSelector } from "react-redux"
import kittenPicture from "../../assets/img/kitten.png"
import catIcon from "../../assets/img/favicon.ico"
import styles from "./CatVotePage.module.css"

function CatVote() {
    const { id } = useParams()
    const { fetchSpecificVote } = useActions()
    const { specificVote, loading, error } = useSelector(state => state.cat)
    const history = useHistory()

    useEffect(() => {
        fetchSpecificVote(id)
    }, [id])

    if (loading) {
        return (
            <Typography style={{ marginTop: 200 }} variant={"h3"}>
                Loading...
            </Typography>
        )
    }

    if (error) {
        return (
            <Typography style={{ marginTop: 200 }} variant={"h3"}>
                {error}...
            </Typography>
        )
    }

    if (specificVote) {
        return (
            <Card className={styles.cardContainer}>
                <Typography variant={"h6"}>Cat Vote Information</Typography>
                <CardHeader
                    className={styles.cardContent}
                    avatar={
                        <Avatar className={styles.cardAvatar}>
                            <img src={catIcon} alt={"catIcon"} />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={`User ID: ${specificVote["user_id"]}`}
                    subheader={`Created at: ${specificVote["created_at"]}`}
                />
                <CardMedia
                    className={styles.cardMedia}
                    image={kittenPicture}
                />
                <CardContent className={styles.cardContent}>
                    <Typography variant="body2">
                        {`Sub ID: ${specificVote["sub_id"]}`}
                    </Typography>
                    <Typography variant="body2">
                        {`Image ID: ${specificVote["id"]}`}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="share" onClick={() => history.push("/about/votes")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

export default CatVote
