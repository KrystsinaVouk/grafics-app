import React from "react";
import {
    Button,
    Card,
    TextField,
    Typography,
} from "@material-ui/core";
import { useCreateVote } from "./useCreateVote";

import styles from "./CreateVotePage.module.css";

function CreateVote() {
    const {
        imageId,
        subId,
        isDisabled,
        setImageId,
        setSubId,
        submit,
    } = useCreateVote();

    return (
        <Card className={styles.formContainer}>
            <Typography gutterBottom variant={"h4"}>
                Post a vote
            </Typography>
            <form
                className={styles.form}
                noValidate
                autoComplete="off">
                <TextField
                    className={styles.textField}
                    value={imageId}
                    label="image_id"
                    variant="outlined"
                    onChange={(event) =>
                        setImageId(event.target.value)
                    }
                />
                <TextField
                    value={subId}
                    className={styles.textField}
                    label="please type 'test' here..."
                    variant="outlined"
                    onChange={(event) =>
                        setSubId(event.target.value)
                    }
                />

                <Button
                    disabled={isDisabled}
                    variant="outlined"
                    color={"secondary"}
                    onClick={submit}>
                    Submit One Vote
                </Button>
            </form>
        </Card>
    );
}

export default CreateVote;
