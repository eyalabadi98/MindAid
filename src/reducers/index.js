import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import SeatsReducer from './SeatsReducer';
import AuthReducer from './AuthReducer';
import PostARideReducer from './PostARideReducer';
import RidesReducers from './RidesReducers';
import CarsReducers from './CarsReducers';
import RiderProfileReducer from './RiderProfileReducer';
import GamesReducer from './GamesReducers';
import { AppNavigator } from './../config/routes';
import { NavigationActions } from 'react-navigation';
import AdminReducer from './AdminReducer';


// const firstAction = AppNavigator.router.getActionForPathAndParams('LoginRedux');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('RequestRidesPage');
// const initialNavState = AppNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'RequestRidesPage' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  //Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}



// export default function getRootReducers(navReducers) {
//     return combineReducers({
//     nav: navReducers,
//     libraries: LibraryReducer,
//     selectedLibraryID: SelectionReducer,
//     selectedSeats: SeatsReducer,
//     auth: AuthReducer,
//     postRide: PostARideReducer,
//     rides: RidesReducers,
//     cars: CarsReducers,
//     riderInfo: RiderProfileReducer,
//     })
// }
export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    libraries: LibraryReducer,
    selectedLibraryID: SelectionReducer,
    selectedSeats: SeatsReducer,
    auth: AuthReducer,
    postRide: PostARideReducer,
    rides: RidesReducers,
    cars: CarsReducers,
    riderInfo: RiderProfileReducer,
    games: GamesReducer,
    admin: AdminReducer,
});
}
