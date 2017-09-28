import { VoteActions, Action } from "./vote-actions";
import { VoteState, InitialVoteState } from "./vote-state";

export function voteReducer(state: VoteState = InitialVoteState, action: Action) {
  switch (action.type) {
    case VoteActions.VOTES_LOADED: return { ...state, counter: action.counter };
    default: return state;
  }
}