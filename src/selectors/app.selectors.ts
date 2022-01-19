import { AppState } from "../Store/store";
export const groupStateSelector = (state: AppState) => state.groups;

export const userStateSelector = (state: AppState) => state.users;

export const authStateSelector = (state: AppState) => state.auth;

export const uiStateSelector = (state: AppState) => state.ui;

export const traineeSelector = (state: AppState) => state.trainee;
