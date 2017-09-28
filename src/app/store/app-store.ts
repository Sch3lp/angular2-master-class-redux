import {combineReducers, createStore, applyMiddleware} from "redux";
import {InjectionToken} from "@angular/core";
import {RootReducer} from "./root-reducer";
import {logger, crashReporter} from "./middleware";
import thunk from 'redux-thunk';
import {ApplicationState} from "./application-state";
import { Store } from "app/store/store";

export const APP_STORE = new InjectionToken("appStore");

export function AppStoreFactory(): Store<ApplicationState> {
  return createStore(combineReducers<ApplicationState>(RootReducer), applyMiddleware(thunk, logger, crashReporter));
}

