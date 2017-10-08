import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native'; 
import { connect } from 'react-redux';

import CardSection from './../components/CardSection/index';
import CardSectionInput from './../components/CardSectionInput/index';
import Card from './../components/Card/index';
import Input from './../components/Input/index';
import Button from './../components/Button/index';
import Header from './../components/Header';
//import { emailChanged, passwordChanged, loginUser } from '../actions';
import Spinner from './../components/Spinner/index';
import { StackNavigator } from 'react-navigation';


import { Pie } from 'react-native-pathjs-charts'

import * as Games from '../actions';
import Picker from 'react-native-picker';

import { bindActionCreators } from 'redux';

import Routes from './../config/routes';

//import codePush from "react-native-code-push";
import { AppNavigator } from './../config/routes';
import { NavigationActions } from 'react-navigation';



class UserInfo extends Component {
   
    
    render() {

        let data = [{
            "name": "Washington",
            "population": 7694980
          }, {
            "name": "Oregon",
            "population": 2584160
          }, {
            "name": "Minnesota",
            "population": 6590667
          }, {
            "name": "Alaska",
            "population": 7284698
          }]
      
          let options = {
            margin: {
              top: 20,
              left: 20,
              right: 20,
              bottom: 20
            },
            width: 350,
            height: 350,
            color: '#2980B9',
            r: 50,
            R: 150,
            legendPosition: 'topLeft',
            animate: {
              type: 'oneByOne',
              duration: 200,
              fillTransition: 3
            },
            label: {
              fontFamily: 'Arial',
              fontSize: 8,
              fontWeight: true,
              color: '#ECF0F1'
            }
          }
        
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: 'lightblue'}} >
                <Pie
                    data={data}
                    options={options}
                    accessorKey="population" 
                />
             
            </View>
        );
    }
}
const styles = {
     input: { 
         backgroundColor: 'white', 
         borderRadius: 5, 
         borderWidth: 1, 
         alignContent: 'center', 
         padding: 20,
         margin: 10,
         flex: 1,
         //color: 'white',
         
         },
         buttonStyle: {
             flex: 1,
             backgroundColor: 'transparent',
             alignSelf: 'center',
             width: 100,
             borderRadius: 5,
             borderWidth: 1,
             flexDirection: 'column',
             marginBottom: 90,
             textAlign: 'center',
             flexDirection: 'row',


             //height: 20,
         }
}

const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
    ...Games
  },
  dispatch
);

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email, password, error, loading,
    };
};

export default connect(mapStateToProps,mapDispatchToProps )(UserInfo);
//export default LoginRedux;