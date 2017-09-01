import {combineReducers, createStore, applyMiddleware} from "redux";
import {InjectionToken} from "@angular/core";
import {RootReducer} from "./root-reducer";
import {logger, crashReporter} from "./middleware";
import {ApplicationState} from "./application-state";

export const APP_STORE = new InjectionToken("appStore");

export function AppStoreFactory() {
  return createStore(combineReducers<ApplicationState>(RootReducer), applyMiddleware(logger, crashReporter));
}

