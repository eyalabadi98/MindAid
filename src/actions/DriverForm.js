//import firebase from 'firebase';
import {
    DRIVER_ADD_UPDATE,
    DRIVER_FILTER_ADD,
    RIDES_FETCH_SUCCESS,
    CARS_FETCH_SUCCESS,
    CAR_ADD,
    RIDE_SAVE_SUCCESS,
    FORM_ERROR,
    RIDER_ACCEPTED
} from './types';



export const DriverAddForm = ({ prop, value }) => {
    return {
       
        type: DRIVER_ADD_UPDATE,
        payload: { prop, value }
    };
};

export const driverPost = ({ 
    baggageIndex, 
    pets, 
    smoking, 
    food, 
    description, 
    NoLuggage,  
    startGoogle,
    stopOverGoogle,
    endGoogle,
    date,
    costPerSeat,
    roundTrip,
    returnDate,
    carSeats, 


}) => {
    //console.log(driverPost);
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {

        // if (baggageIndex === '' || description === '' || NoLuggage === '' || startGoogle === '' || endGoogle === '' || stopOverGoogle === '' || date === '' || costPerSeat === '' || carSeats === ''){ 
        //     console.log('error');
        //      dispatch({ type: FORM_ERROR });

        // }


        console.log('all good');
        firebase.database().ref(`/users/neal/games`)
            .push({ 
                pets, 
                
        
               
             })
                .then( () => {
                    dispatch({ type: DRIVER_FILTER_ADD })
                })
            .then(() => console.log('info sent'));

    };
};

export const ridesFetch = () => {
    return (dispatch) => {
        firebase.database().ref(`/users/user1/rides`)
        .on('value', snapshot => {
            dispatch({ type: RIDES_FETCH_SUCCESS, payload: snapshot.val() })

        });
    };
};

export const carsFetch = () => {
   
    return (dispatch) => {
        firebase.database().ref(`/users/user1/cars`)
        .on('value', snapshot => {
            dispatch({ type: CARS_FETCH_SUCCESS, payload: snapshot.val() })

        });
    };
};

export const riderAccepted = (dispatch) => {
    console.log('rider accepted');
    dispatch({ type: RIDER_ACCEPTED });
};



export const employeeSave = ({passanger, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/user1/employees/${uid}`)
      .set({ passanger })
      .then(() => {
        dispatch({ type: RIDE_SAVE_SUCCESS });
        //Actions.employeeList({ type: 'reset' });
      });
  };
};

// export const carsPost = ({ 
//     make,
//     }) => {
//     //const { currentUser } = firebase.auth();
    
//     return (dispatch) => {
//         firebase.database().ref(`/users/user1/cars`)
//             .push({ 
//                make,
//              })
//                 .then( () => {
//                     dispatch({ type: CAR_ADD })
//                 })
//             .then(() => console.log('info sent'));

//     };
// };


