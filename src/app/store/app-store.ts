import {combineReducers, createStore} from "redux";
import {RootReducer} from "./root-reducer";
import {InjectionToken} from "@angular/core";
import {ApplicationState} from "./application-state";

export const APP_STORE = new InjectionToken("appStore");

export function AppStoreFactory() {
  return createStore(combineReducers<ApplicationState>(RootReducer));
}

