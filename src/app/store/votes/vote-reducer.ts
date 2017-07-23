import {VoteActions} from "./vote-actions";

export function voteReducer(state, action) {
  switch (action) {
    case VoteActions.YES :
      return {...state, counter: ++state.counter};
    case VoteActions.NO :
      return {...state, counter: --state.counter};
    default: return state;
  }
}
