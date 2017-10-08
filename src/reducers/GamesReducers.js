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
    API_DATA_SUCCESS,
    USER_SEARCH_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    Data: {
        
    },
    username: '',
    
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
        case USER_SEARCH_UPDATE:
            console.log("Action in user search", action);
            return {
                ...state,
                username: action.payload
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
        case API_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload
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


