import {
    
    ADMIN_GAMES_INFO_UPDATE,
    ADMIN_GAME_SUBMIT_FORM,
    ADMIN_RESET_REDUX_GAMES
} from '../actions/types';

const INITIAL_STATE = {
    Location: '',
    Time: '',
    Date: '',
    notifySwitch: true,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADMIN_GAMES_INFO_UPDATE:
            return {
                ...state,
                [action.field]: action.value
            };
        case ADMIN_GAME_SUBMIT_FORM:
            return INITIAL_STATE;
        case ADMIN_RESET_REDUX_GAMES:
            return INITIAL_STATE;
        default:
            return state;
    }
};


