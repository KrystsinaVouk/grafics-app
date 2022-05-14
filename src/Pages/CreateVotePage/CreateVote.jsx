import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import styles from './CreateVotePage.module.css'
import {useHistory} from "react-router-dom";
import {useActions} from "../../redux/hooks/useActions";

function CreateVote() {

    const [imageId, setImageId] = useState('');
    const [subId, setSubId] = useState('');
    const history = useHistory();
    const {postVote} = useActions();

    const submit = () => {
        if (imageId && subId) {
            postVote(imageId, subId);
            history.push('/about');
        }
    }

    return (
        <div className={styles.formContainer}>
            <h2>Post a vote</h2>
            <form className={styles.form} noValidate autoComplete="off">
                <TextField color={'primary'} value={imageId} label="image_id" variant="outlined"
                           onChange={(event) => setImageId(event.target.value)}/>
                <TextField value={subId} label="sub_id" variant="outlined"
                           onChange={(event) => setSubId(event.target.value)}/>

                <Button variant="outlined" color={'secondary'} onClick={submit}>Submit One Vote</Button>
            </form>
        </div>
    );
}

export default CreateVote;
