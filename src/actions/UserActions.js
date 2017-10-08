//import firebase from 'firebase';
import {
    GAMES_FETCHED_SUCCESS,
    ADD_GAME_FORM,
    GAMES_SEARCH_UPDATE,
    EMAIL_SUCCESS_FETCH,
    EMAIL_SEND_SUCCESS,
    GAMES_INFO_UPDATE,
    GAME_SUBMIT_FORM,
    ADMIN_GAMES_INFO_UPDATE,
    ADMIN_GAME_SUBMIT_FORM,
    RESET_REDUX_GAMES,
    ADMIN_RESET_REDUX_GAMES,
    SUBMIT_GAME_FORM,
    RESET_SAVED,
    API_EMAIL_SUCCESS,
    USER_SEARCH_UPDATE


} from './types';



export const UserSearchAction = (text) => {
    return {
        type: USER_SEARCH_UPDATE,
        payload: text
    };
};



export const GetDataAPI= ({
    Sport
 }) => {
    // const API_EMAIL_SEARCH = `http://api.maccabigamesjcc.me:3000/tasks/${Sport}`;
    // console.log('Requesting URl', API_EMAIL_SEARCH);
    // return (dispatch) => {

    // fetch(API_EMAIL_SEARCH)
    // .then((res) => res.json())
    // .then((json) => {
    //     console.log('Looking for email address', json);
    //     dispatch({ type: API_EMAIL_SUCCESS, payload: json });
    
    //     });
    // }

};
