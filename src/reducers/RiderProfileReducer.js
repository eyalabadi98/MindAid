import { 
    RIDER_INFO_FETCH_SUCCESS

} from './../actions/types';

const INITIAL_STATE = { 
    
};
export default (state = INITIAL_STATE, action) => { 
    //console.log(action); 
    switch (action.type) {
        case RIDER_INFO_FETCH_SUCCESS:
            return { ...action.payload };
    
        default: 
            return state;
    }
};
