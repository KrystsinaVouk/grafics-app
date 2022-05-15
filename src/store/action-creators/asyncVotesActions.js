import { http } from "../../Config";
import { createVote, fetchVotesError, removeVote, setLoading, setSpecificVote, setVotes } from "./votesActions";

export const fetchVotes = (limit, page, subId) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const { data } = await http.get("/votes/", {
                sub_id: subId,
                limit,
                page,
            })
            dispatch(setVotes(data))
            dispatch(setLoading(false))
        } catch (err) {
            dispatch(fetchVotesError());
            dispatch(setLoading(false));
        }
    }
}

export const fetchSpecificVote = (voteId) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const { data } = await http.get(`/votes/${voteId}`)
            dispatch(setSpecificVote(data))
            dispatch(setLoading(false))
        } catch (err) {
            dispatch(fetchVotesError())
            dispatch(setLoading(false))
        }
    }
}

export const postVote = (imageId, subId) => {
    const body = {
        image_id: imageId,
        sub_id: subId,
        value: 1,
    }
    return async (dispatch) => {
        try {
            const { data } = await http.post(`/votes/`, body)
            dispatch(createVote({ id: data.id, ...body }))
        } catch (err) {
            dispatch(fetchVotesError())
        }
    }
}

export const deleteVote = (voteId) => {
    return async (dispatch) => {
        try {
            await http.delete(`/votes/${voteId}`)
            dispatch(removeVote(voteId))
        } catch (err) {
            dispatch(fetchVotesError())
        }
    }
}
