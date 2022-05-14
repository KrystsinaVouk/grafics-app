import axios from "axios";
import {config} from "../../config";
import {
    createVote,
    fetchVotesError,
    removeVote,
    setSpecificVote,
    setVotes,
} from "./votesActions";

export const fetchVotes = (limit, page, subId) => {
    const {headers} = config;
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://api.thecatapi.com/v1/votes`, {
                params: {
                    sub_id: subId,
                    limit,
                    page,
                },
                headers,
            });
            dispatch(setVotes(data));
        } catch (e) {
            dispatch(fetchVotesError());
        }
    };
};

export const fetchSpecificVote = (voteId) => {
    const {headers} = config;
    return async (dispatch) => {
        try {
            const {data} = await axios.get(
                `https://api.thecatapi.com/v1/votes/${voteId}`,
                {
                    headers,
                }
            );
            dispatch(setSpecificVote(data));
        } catch (e) {
            dispatch(fetchVotesError());
        }
    };
};

export const postVote = (imageId, subId) => {
    const body = {
        image_id: imageId,
        sub_id: subId,
        value: 1,
    };
    return async (dispatch) => {
        try {
            const {data} = await axios.post(
                `https://api.thecatapi.com/v1/votes`,
                body,
                config
            );
            dispatch(createVote({id: data.id, ...body}));
        } catch (err) {
            dispatch(fetchVotesError());
        }
    };
};

export const deleteVote = (voteId) => {
    const {headers} = config;
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(
                `https://api.thecatapi.com/v1/votes/${voteId}`,
                {
                    headers,
                }
            );

            data.message === `SUCCESS` && dispatch(removeVote(voteId));
        } catch (err) {
            dispatch(fetchVotesError());
        }
    };
};
