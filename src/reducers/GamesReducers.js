import {
    GAMES_FETCHED_SUCCESS,
    ADD_GAME_FORM,
    GAMES_SEARCH_UPDATE,
    EMAIL_SEND_SUCCESS,
    EMAIL_SUCCESS_FETCH,
    GAMES_INFO_UPDATE,
    GAME_SUBMIT_FORM,
    RESET_REDUX_GAMES,
    SUBMIT_GAME_FORM,
    RESET_SAVED,
    API_EMAIL_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    gameKey: null,
    games: {
        games: {}
    },
    team1Signature: '',
    EmailAPI: {
        email: '',
    },
    team2Signature: '',
    team1Score: '',
    Email: '',
    team2Score: '',
    gameDetails: '',
    gameInfo: {
        Category: '',
         Key: '', 
         Date: '',
          Date_and_Time: '',
          Event: '',
          Location: '',
          Other: '',
          Time: '', 
         Participant_1: '',
          Participant_2: '',
          Updatable: '',
          team1Score: '',
          team2Score: '',
          gameDetails: '',
          team2Signature: '',
          team1Signature: '',
          success: {},
    }
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GAMES_FETCHED_SUCCESS:
            //console.log(action);
            return {
                ...state,
                games: action.payload
            }
         case ADD_GAME_FORM:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            };
        case GAMES_SEARCH_UPDATE:
            return {
                ...state,
                [action.field]: action.value
            };
        case SUBMIT_GAME_FORM:
            return {
                ...state,
                success: action.payload
            };
        case EMAIL_SEND_SUCCESS:
            return { ...action.payload };
        case EMAIL_SUCCESS_FETCH:
            return action.payload;
        case GAMES_INFO_UPDATE:
            return {
                ...state,
                [action.field]: action.value
            };
        case GAME_SUBMIT_FORM:
            return INITIAL_STATE;
        case API_EMAIL_SUCCESS:
            return {
                ...state,
                EmailAPI: action.payload
            };
        case RESET_SAVED:
            
            return {
                ...state,
                team1Signature: '',
                team2Signature: '',
                team1Score: '',
                team2Score: '',
                gameDetails: '',
                games: {
                    games: {
                        Updatable: '',
                        team1Score: '',
                        team2Score: '',
                        gameDetails: '',
                        team2Signature: '',
                        team1Signature: '',
                    }
                },
            }
        case RESET_REDUX_GAMES:
            console.log('action in Reset', state.gameKey);
            return {
                INITIAL_STATE
            }
        default:
            return state;
    }
};


