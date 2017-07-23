import {VoteActions} from "./vote-actions";
import {InitialVoteState} from "./vote-state";

export function voteReducer(state = InitialVoteState, action) {
  switch (action) {
    case VoteActions.YES :
      return {...state, counter: ++state.counter};
    case VoteActions.NO :
      return {...state, counter: --state.counter};
    default: return state;
  }
}
