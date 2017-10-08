import React, { Component, AppRegistry} from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import  { Provider, connect } from 'react-redux';
//import PushNotification from 'react-native-push-notification';
import { Text, StyleSheet } from 'react-native';
import Routes from './config/routes';
import getStore from './../store';
//import firebase from 'firebase';
import AppReducer from './reducers';

import { createStore, bindActionCreators } from 'redux';

//import codePush from 'react-native-code-push';

import LoginRedux from './Pages/Welcome';



const style = StyleSheet.create({ hideText:{ display:"none" } })

 const AppNavigator = StackNavigator(Routes, {

        navigationOptions: () => ({
			//title: ('helo'),
			headerVisible: true,
            headerMode: 'screen',
          
		})
    }
);

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

@connect(state => ({
    nav: state.nav
}))

class AppWithNavigationState extends Component {

     componentWillMount() {

   
      
  }
    render() {
      //codePush.sync();
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}


const store = getStore(navReducer);

 export default function NCAP() {

    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
 }

/*
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Routes from './config/routes';
import { addNavigationHelpers, StackNavigator, } from 'react-navigation';
import getStore from './../store';


const AppNavigator = StackNavigator(Routes);

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('LoginRedux'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  
  return nextState || state;
};

const appReducer = combineReducers({
  nav: navReducer,
  
});

class App extends React.Component {
    componentWillMount() {

    firebase.initializeApp({
    apiKey: "AIzaSyDIscF0WemnkdKm9KC9vnrZIX2XOL1xAB8",
    authDomain: "maccabi-games-cfb5d.firebaseapp.com",
    databaseURL: "https://maccabi-games-cfb5d.firebaseio.com",
    projectId: "maccabi-games-cfb5d",
    storageBucket: "maccabi-games-cfb5d.appspot.com",
    messagingSenderId: "269247350564"
    });
  }

  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = getStore(appReducer);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}*/
