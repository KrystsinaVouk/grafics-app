import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useActions} from "../../store/hooks/useActions";

export const useCreateVote = () => {
    const [imageId, setImageId] = useState('');
    const [subId, setSubId] = useState('');
    const history = useHistory();
    const {postVote} = useActions();
    const isDisabled = !(!!subId && !!imageId);

    const submit = (event) => {
        event.preventDefault();
        if (!imageId || !subId) {
            return;
        }
        postVote(imageId, subId);
        history.push('/about/votes');
    }

    return {
        imageId,
        subId,
        isDisabled,
        setImageId,
        setSubId,
        submit
    }
}
