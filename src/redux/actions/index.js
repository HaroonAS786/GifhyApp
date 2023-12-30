export const SET_USER_DATA = 'auth/SET_USER_DATA';
export const SIGN_UP = 'auth/SIGN_UP';
export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';
export const CONTINUE_SESSION = 'auth/CONTINUE_SESSION';

// Action Creators
export const setUserData = (payload) => ({ type: SET_USER_DATA, payload });
export const signUp = (payload) => ({ type: SIGN_UP, payload });
export const signIn = (payload) => ({ type: SIGN_IN, payload });
export const signOut = () => ({ type: SIGN_OUT });
export const continueSession = (payload) => ({ type: CONTINUE_SESSION, payload });
