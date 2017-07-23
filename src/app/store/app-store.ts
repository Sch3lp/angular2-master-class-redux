import {voteReducer} from "./votes/vote-reducer";
/**
 * To emulate a Redux store, simply
 * support the dispatch(), subscribe() methods and
 * use reducers to process actions with immutable instances
 */
export class AppStore {

  /**
   * Accessor to current store state
   */
  getState(): any {
    return this.state;
  }

  /**
   *  Dispatch the action thru reducers to
   *  conditionally update the state
   */
  dispatch(action) {
    const newState = this.reducer(this.state, action);
    console.log(`newState.counter: ${newState.counter}`);
    if (newState !== this.state) {
      this.state = newState;
      this.listeners.forEach(notify => notify());
    }
  }

  /**
   * Allow views to listen for store synchronous
   * store changes
   */
  subscribe(notify) {
    this.listeners.push(notify);
  }

  /**
   * Use the custom actions to update the counter state!
   */
  protected reducer(state, action) {
    return voteReducer(state, action);
  }

  protected listeners = [];
  protected state = {
    counter: 0
  };

}

