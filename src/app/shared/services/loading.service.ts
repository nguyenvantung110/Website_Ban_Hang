import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading = false;
  constructor(
    private store: Store<IAppState>,
  ) { }

  setDisplay(val: boolean) {
    this.isLoading = val;
    const obj = { value: val};
    this.store.dispatch(new GetLoading(obj));
  }
}

export interface IAppState{}
export const initialAppState: IAppState = {}
export function getInitialState(): IAppState {
  return initialAppState;
}

export enum ELoadingActions {
  GetLoading = '[User] Get GetLoading'
}

export class GetLoading implements Action {
  public readonly type = ELoadingActions.GetLoading;
  constructor(public payload: ILoading) { }
}

export type LoadingActions = GetLoading;
export interface ILoading {
  value: boolean;
}