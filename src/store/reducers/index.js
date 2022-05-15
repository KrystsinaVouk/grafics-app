import { catActionTypes, uiActionTypes } from '../types';

const initialCatState = {
  votes: [],
  specificVote: {},
  loading: false,
  error: '',
};

export const catReducer = (
  state = initialCatState,
  action,
) => {
  switch (action.type) {
    case catActionTypes.SET_VOTES:
      return {
        ...state,
        votes: [...action.payload],
      };
    case catActionTypes.SET_SPECIFIC_VOTE:
      return {
        ...state,
        specificVote: action.payload,
      };
    case catActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case catActionTypes.FETCH_VOTES_ERROR:
      return { ...state, error: 'Error occurred' };
    case catActionTypes.CREATE_VOTE:
      return {
        ...state,
        votes: [...state.vote, action.payload],
      };
    case catActionTypes.REMOVE_VOTE:
      return {
        ...state,
        votes: state.votes.filter(
          (vote) => vote.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

const initialUIState = {
  navBarVisibility: true,
};

export const UIReducer = (
  state = initialUIState,
  action,
) => {
  switch (action.type) {
    case uiActionTypes.SET_NAVBAR_VISIBILITY:
      return {
        ...state,
        navBarVisibility: action.payload,
      };
    default:
      return state;
  }
};
