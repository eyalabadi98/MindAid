import { 
    DRIVER_ADD_UPDATE,
    DRIVER_FILTER_ADD,
    RIDES_FETCH_SUCCESS,
    CARS_FETCH_SUCCESS,
    CAR_ADD,
    RIDE_SAVE_SUCCESS,
    FORM_ERROR,
    RIDER_ACCEPTED,

} from './../actions/types';

const INITIAL_STATE = { 
    stop: '',    
    baggageIndex: null, 
    pets: false,
    smoking: false, 
    food: false,
    description: '',
    NoLuggage: false,
    stopover: '',
    carSeat: '',
    startGoogle: '',
    stopOverGoogle: '',
    endGoogle: '',
    date: '',
    costPerSeat: '',
    roundTrip: false,
    returnDate: '',
    carSeats: '',
    error: '',
    

    
};
export default (state = INITIAL_STATE, action) => { 
    //console.log(action); 
    switch (action.type) {
         case DRIVER_ADD_UPDATE:
            
            //action.payload === { prop: 'name', value: 'jane' }
           // console.log(action.payload.value);
            if (this.roundTrip) {
                this.returnDate = '';
            }
            if (this.NoLuggage === true) {
                console.log('noluggae success');
                this.baggageIndex = '';
            }
            return {
                ...state,
                [action.payload.prop]: action.payload.value
                
            };
        case DRIVER_FILTER_ADD: 
            return INITIAL_STATE;
        case RIDES_FETCH_SUCCESS:
            return action.payload;
        case CARS_FETCH_SUCCESS:
            return {  ...action.payload };
        case FORM_ERROR:
            return { ...state, error: 'Please fill all fields' };
        case CAR_ADD:
            return {
                ...state,
                carSeat: '',
            };
        case RIDE_SAVE_SUCCESS:
            return INITIAL_STATE;
        case RIDER_ACCEPTED:
            return { ...state };
        default: 
            return state;
    }
};
