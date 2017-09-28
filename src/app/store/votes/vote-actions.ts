import { VoterService } from "app/store/votes/voter.service";

export interface Action {
  type: any;
  counter?: number;
  service?: VoterService;
}

export function votesLoadedAction(counter: number): Action {
  return { type: VoteActions.VOTES_LOADED, counter };
}

export const VoteActions = {
  NO: "NO",
  YES: "YES",
  VOTES_LOADED: "LOADED"
};

export function voteYesAction(voterService: VoterService) {
  return (dispatch) => {
    return voterService.addVote().subscribe(counter => dispatch(votesLoadedAction(counter)));
  };
}

export function voteNoAction(voterService: VoterService) {
  return (dispatch) => {
    return voterService.removeVote().subscribe(counter => dispatch(votesLoadedAction(counter)));
  };
}

export function loadVotesAction(voterService: VoterService) {
  return (dispatch) => {
    voterService.getVotes().subscribe(counter => dispatch(votesLoadedAction(counter)));
  };
}