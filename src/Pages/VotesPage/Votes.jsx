import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../../redux/hooks/useActions";
import VoteItem from "../../Components/VoteItem/VoteItem";

function Votes() {

    const {votes, error} = useSelector(state => state.cat);
    const {fetchVotes} = useActions();

    useEffect(() => {
       fetchVotes();
    }, []);

    if (error) {
        return <h1>{error}. {votes.length}</h1>
    }

    if (!votes.length) {
        return <h1>No Cats votes</h1>
    } else {
        return (
            <>
                <h1>Cats votes</h1>
                {votes.map(vote => (
                    <VoteItem key={vote.id} vote={vote}/>
                ))}
            </>
        );
    }
}

export default Votes;
