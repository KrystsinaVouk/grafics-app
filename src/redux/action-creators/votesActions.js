import {catActionTypes} from "../types";


export const setVotes = (fetchedVotes) => {
    return {type: catActionTypes.SET_VOTES, payload: fetchedVotes}
}
export const setSpecificVote = (fetchedVote) => {
    return {type: catActionTypes.SET_SPECIFIC_VOTE, payload: fetchedVote}
}
export const fetchVotesError = () => {
    return {type: catActionTypes.FETCH_VOTES_ERROR}
}
export const createVote = (newVote) => {
    return {type: catActionTypes.CREATE_VOTE, payload: newVote}
}

export const removeVote = (voteId) => {
    console.log(typeof voteId)
    return {type: catActionTypes.REMOVE_VOTE, payload: voteId}
}
