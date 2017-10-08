import { AppRegistry, Text } from 'react-native';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import Welcome from './../Pages/Welcome';
import UserInfo from './../Pages/UserInfo';
import GetHelp from './../Pages/GetHelp';
// import ViewGames from './../pages/ViewGames';
// import LoginRedux from './../pages/LoginRedux';
// import GamesInfo from './../pages/GamesInfo';
// import AdminPage from './../pages/AdminPage';
// import AdminViewGames from './../pages/AdminViewGames';
// import AdminGamesInfo from './../pages/AdminGamesInfo';
//import AddGame from './../pages/AddGame';


//import Test from './../pages/Test';

//export const AppNavigator = StackNavigator({
 const Routes = {

	Welcome: { 
		screen: Welcome,
		navigationOptions: {
			title: 'MindAid'
		},
	 },

	UserInfo: {
		screen: UserInfo,
		navigationOptions: {
			title: 'User'
		},
	},
	GetHelp: {
		screen: GetHelp,
		navigationOptions: {
			title: 'Get some help'
		},
	},
	
	




};
	
	

// const AppWithNavigationState = ({ dispatch, nav }) => (
//   <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
// );

// AppWithNavigationState.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   nav: state.nav,
// });

//AppRegistry.registerComponent('Routes', () => AppWithNavigationState);
 //export default connect(mapStateToProps)(AppWithNavigationState);

export default Routes;
