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
    API_EMAIL_SUCCESS


} from './types';


let currentDate = new Date();
currentDate = currentDate.toString();

export type GamesSearchAction = {
  type: "GAMES_SEARCH_UPDATE",
  field: any,
  value: any
};

//Update every time a character in put in whenever a rider searches on the slide up
export const gamesSearchForm = (field, value): GamesSearchAction => {
  return {
    type: GAMES_SEARCH_UPDATE,
    field,
    value
  };
};

export const gamesInfoFormInput = (field, value): GamesSearchAction => {
  return {
    type: GAMES_INFO_UPDATE,
    field,
    value
  };
};

export const deleteReduxProfile = (): GamesSearchAction => {
    return {
    type: RESET_REDUX_GAMES
    };
}


export const deleteSaved = (): GamesSearchAction => {
    return {
    type: RESET_SAVED
    };
}

export const adminDeleteReduxProfile = (): GamesSearchAction => {
    return {
    type: ADMIN_RESET_REDUX_GAMES
    
    };
}



export const AdminsubmitGameForm = ({ 
    Key,
    team1Score,
    team2Score,
    Location,
    Time,
    Date,
    adminEmail
}) => {
    return (dispatch) => {
        
        
        console.log('Key', Key);
        console.log('Team1score', team1Score);
        console.log('team2score', team2Score);
        if (team1Score == undefined) {
            firebase.database().ref(`/${Key}`)
            .update({ 
                Location,
                Time,
                Date,
                adminEmail,
                adminDateUpdate: currentDate,
            
             })
            .then(() => {
                    dispatch({ type: ADMIN_GAME_SUBMIT_FORM })
            })
            .then(() => console.log('info sent, no score sent'));
        } else {
            firebase.database().ref(`/${Key}`)
            .update({ 
                team1Score,
                team2Score,
                Location,
                Time,
                Date,
                adminDateUpdate: currentDate,
            
             })
            .then(() => {
                    dispatch({ type: ADMIN_GAME_SUBMIT_FORM })
            })
            .then(() => console.log('info sent, yes score sent'));
        }
        
            
        //Actions.employeeList({ type: 'reset' });
      };
};


export const AdmingamesInfoFormInput = (field, value): GamesSearchAction => {
  return {
    type: ADMIN_GAMES_INFO_UPDATE,
    field,
    value
  };
};




export const GamesAddForm = (field, value) => {
    return {
       
        type: ADD_GAME_FORM,
        field,
        value
    };
};







