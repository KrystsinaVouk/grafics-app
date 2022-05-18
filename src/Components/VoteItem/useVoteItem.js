import { useHistory } from "react-router-dom";
import { useActions } from "../../store/hooks/useActions";

export const useVoteItem = (voteId) => {

    const { deleteVote } = useActions();
    const history = useHistory();

    const removeVote = () => {
        deleteVote(voteId);
    };
    const clickHandler = () => {
        history.push(`/about/votes/${voteId}`);
    };

    return {
        removeVote,
        clickHandler,
    };
};
