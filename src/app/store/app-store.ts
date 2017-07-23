import {combineReducers, createStore} from "redux";
import {RootReducer} from "./root-reducer";
import {InjectionToken} from "@angular/core";

export const APP_STORE = new InjectionToken("appStore");

// adding type information produces non compiling code: :Store<ApplicationState>
export function AppStoreFactory() {
  return createStore(combineReducers(RootReducer));
}

