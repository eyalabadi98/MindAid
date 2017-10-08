import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER,
    FROM_RIDER
} from './types';
//import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';


import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";

// export const onSignIn = () => AsyncStorage.setItem(USER_KEY, "true");

// export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);


export const selectLibrary = (libraryID) => {
    return {
        type: 'select_library',
        payload: libraryID
    };
};

export const selectSeats = (selectedSeats) => {
    return {
        type: 'select_seats',
        payload: selectedSeats
    };
};

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
         .catch((error) => {
             console.log(error);
             loginUserFail(dispatch);
         });  
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user, navigate) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });  
    //onSignIn();
    console.log('nav', this.props);
    NavigationActions.navigate({ routeName: 'ViewGames' });
};
