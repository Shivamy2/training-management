import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/auth.actions";
import { User } from "../Models/User";

export interface UserState {
    byId: {
        [id: number]: User
    }
}

const initialState: UserState = {
    byId: {}
}

export const userReducer: Reducer<UserState> = (state = initialState, action) => {
    switch(action.type) {
        case ME_FETCH:
        case ME_LOGIN:
            const user: User = action.payload;
            return {...state, byId: {...state.byId, [user.id]: user}}
        default: return state;
    }
}