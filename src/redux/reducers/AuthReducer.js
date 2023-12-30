import { CONTINUE_SESSION, SET_USER_DATA, SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions";


const initialState = {
	userData: {},
	isLoading: true,
	isLogged: false,
	userToken: null,
};

export default AuthReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_USER_DATA:
			return {
				...state,
				userData: action.payload,
			};

		case SIGN_UP:
			
			return {
				...state,
				isLoading: false,
				isLogged: true,
				userToken: action.payload,
			};

		case SIGN_IN:
			return {
				...state,
				isLoading: false,
				isLogged: true,
				userToken: action.payload,
				userData: action.payload,
			};

		case SIGN_OUT:
			return {
				...state,
				isLoading: false,
				isLogged: false,
				userToken: null,
				userData: {},
			};

		case CONTINUE_SESSION:
			return {
				...state,
				isLoading: false,
				isLogged: true,
				userToken: action.payload,
			};

		default:
			return state;
	}
}