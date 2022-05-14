import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useActions} from "../../redux/hooks/useActions";

export const useCreateVote = () => {
    const [imageId, setImageId] = useState('');
    const [subId, setSubId] = useState('');
    const [errorText, setErrorText] = useState('');
    const history = useHistory();
    const {postVote} = useActions();
    const isDisabled = !(!!subId && !!imageId);

    const submit = (event) => {
        event.preventDefault();
        if (!imageId || !subId) {
            setErrorText('The field cannot be empty');
            return;
        }
        postVote(imageId, subId);
        history.push('/about');
    }

    return {
        errorText,
        imageId,
        subId,
        isDisabled,
        setImageId,
        setSubId,
        submit
    }
}
