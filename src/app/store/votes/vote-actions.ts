export interface Action {
  type: any;
}

export function voteYesAction(): Action {
  return { type: VoteActions.YES };
}

export function voteNoAction(): Action {
  return { type: VoteActions.NO };
}

export const VoteActions = {
  NO: "NO",
  YES: "YES"
};
