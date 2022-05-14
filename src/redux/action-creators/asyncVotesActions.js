import {config} from "../../config";
import axios from "axios";
import {createVote, fetchVotesError, removeVote, setSpecificVote, setVotes} from "./votesActions";

export const fetchVotes = () => {
    const {headers} = config;
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://api.thecatapi.com/v1/votes`, {
                params: {
                    sub_id: 'test',
                    limit: 5,
                    page: 1
                },
                headers
            });
            dispatch(setVotes(data));
        } catch (e) {
            dispatch(fetchVotesError())
        }
    }
}

export const fetchSpecificVote = (voteId) => {
    const {headers} = config;
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://api.thecatapi.com/v1/votes/${voteId}`, {
                headers
            });
            dispatch(setSpecificVote(data));
        } catch (e) {
            dispatch(fetchVotesError())
        }
    }
}

export const postVote = (imageId, subId) => {
    const body = {
        'image_id': imageId,
        'sub_id': subId,
        'value': 1
    }
    return async (dispatch) => {
        try {
            const {data} = await axios.post(`https://api.thecatapi.com/v1/votes`, body, config);
            dispatch(createVote({id: data.id, ...body}));

        } catch (err) {
            dispatch(fetchVotesError())
        }
    }
}

export const deleteVote = (voteId) => {
    const {headers} = config;
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(`https://api.thecatapi.com/v1/votes/${voteId}`, {
                headers
            });

            dispatch(removeVote(voteId));
            console.log(data);

        } catch (err) {
            dispatch(fetchVotesError())
        }
    }
}
