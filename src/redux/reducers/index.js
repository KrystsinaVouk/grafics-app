import {catActionTypes} from "../types";

const initialState = {
    votes: [],
    specificVote: {},
    error: '',
}

export const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case catActionTypes.SET_VOTES:
            return {...state, votes: [...action.payload]}
        case catActionTypes.SET_SPECIFIC_VOTE:
            console.log(action.payload);
            return {...state, specificVote: action.payload}
        case catActionTypes.FETCH_VOTES_ERROR:
            return {...state, error: 'Error occurred'}
        case catActionTypes.CREATE_VOTE:
            return {...state, votes: state.votes.push(action.payload)}
        case catActionTypes.REMOVE_VOTE:
            return {...state, votes: state.votes.filter(vote => vote.id !== action.payload)}
        default:
            return state;
    }
}
