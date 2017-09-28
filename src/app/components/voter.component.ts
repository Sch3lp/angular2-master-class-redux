import {Component, Inject} from "@angular/core";
import {APP_STORE} from "app/store/app-store";
import {Store} from "../store/store";
import {voteYesAction,voteNoAction} from "../store/votes/vote-actions";
import {ApplicationState} from "../store/application-state";
import { VoterService } from "app/store/votes/voter.service";


@Component({
  selector: 'trm-voter',
  template: `
    <div fxLayout="column" fxLayoutAlign="space-between center" fxFlex style="padding-left:10px;">
      <button md-fab class="yes" mdTooltip="Vote Yes!" (click)="increment()">
        <md-icon class="md-24">thumb_up</md-icon>
      </button>

      <ng-content></ng-content>

      <button md-fab class="no" mdTooltip="Vote No!" (click)="decrement()">
        <md-icon class="md-24">thumb_down</md-icon>
      </button>
    </div>
  `,
  styles : [
    `button.yes { background-color: darkgreen; }`,
    `button.no { background-color: red; }`
  ]
})
export class VoterComponent {

  /**
   * Inject the appstore
   */
  constructor(@Inject(APP_STORE) private store: Store<ApplicationState>, private voterService: VoterService) { }

  private increment() {
    this.store.dispatch(voteYesAction(this.voterService));
  }

  private decrement() {
    this.store.dispatch(voteNoAction(this.voterService));
  }
}

