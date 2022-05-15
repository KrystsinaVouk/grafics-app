import React from "react";
import { Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { useCreateVote } from "./useCreateVote";

import styles from "./CreateVotePage.module.css";

function CreateVotePage() {
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
                    label="Image ID"
                    variant="outlined"
                    onChange={(event) =>
                        setImageId(event.target.value)
                    }
                />
                <FormControl
                    className={styles.textField}
                    sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Sub Id</InputLabel>
                    <Select
                        variant="outlined"
                        value={subId}
                        label="Sub ID"
                        onChange={(event) =>
                            setSubId(event.target.value)
                        }
                    >
                        <MenuItem value={"test"}>test</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    disabled={isDisabled}
                    variant="outlined"
                    color={"secondary"}
                    onClick={submit}>
                    Submit One Vote
                </Button>
            </form>
        </Card>
    )
}

export default CreateVotePage;
