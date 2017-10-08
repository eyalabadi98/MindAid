//riderRequestFetch

//import firebase from 'firebase';
import {
    RIDER_INFO_FETCH_SUCCESS,
} from './types';


export const riderInfoFetch = () => {
    return (dispatch) => {
        firebase.database().ref(`/users/user1/riderProfile`)
        .on('value', snapshot => {
            dispatch({ type: RIDER_INFO_FETCH_SUCCESS, payload: snapshot.val() })

        });
    };
};
