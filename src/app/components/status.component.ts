import {Component, Inject} from "@angular/core";
import {APP_STORE} from "../store/app-store";
import {ApplicationState} from "../store/application-state";
import {VoteState} from "../store/votes/vote-state";

@Component({
  selector: 'trm-status',
  template: `
    {{ state.counter }}
    <div class="tip">All Votes!</div>
  `,
  styles : [
    `:host {  text-align:center; font-size:1.1em; font-weight: bolder  }`,
    `.tip { font-size:0.7em; padding-top:5px;font-weight: normal;  }`
  ]
})
export class StatusComponent {

  state: VoteState;
  constructor(@Inject(APP_STORE) private store: any) {
    this.state = store.getState().votes;

    store.subscribe(() => {
      this.state = store.getState().votes;
    })
  }
}

