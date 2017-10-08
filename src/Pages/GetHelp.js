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
import ButtonNPM from 'apsl-react-native-button'


import * as Animatable from 'react-native-animatable';
import * as Data from '../actions';
import Picker from 'react-native-picker';

import { bindActionCreators } from 'redux';

import Routes from './../config/routes';

//import codePush from "react-native-code-push";
import { AppNavigator } from './../config/routes';
import { NavigationActions } from 'react-navigation';

let urlDoctors = "https://www.google.com/maps/search/?api=1&query=therapists"
let depressionText = "The first step in getting treatment for depression is making an appointment with your general practitioner. They can recommend doctors in your area.   If you’re religious, ask your religious leader if they have counselors to recommend. Some people prefer faith-based counseling, which incorporates their religion into a treatment plan. You can also check healthcare databases for therapists, psychiatrists, and counselors. These databases can provide you with information such as certifications, accepted insurance providers, and reviews left by other people. Search for Therapists near you"
class LoginRedux extends Component {

    
    render() {
        console.log('Props in Welcome', this.props);
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: 'lightblue'}} >
                <Text style={styles.text}> {depressionText}</Text>
                <Text style={{ color: 'darkblue', fontWeight: 'bold', alignSelf: 'center', fontSize: 20, paddingTop: 30}}onPress={() => Linking.openURL(urlDoctors)}>
                Find Doctors
                </Text>
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
             backgroundColor: 'transparent'


             //height: 20,
         },
         text: {
             fontSize: 20,
             textAlign: 'center'
         }
}

const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
    ...Data
  },
  dispatch
);

const mapStateToProps = (state) => {
    console.log("State Map", state)
    //const { username } = Games;
    return {
        //username
    };
};

export default connect(mapStateToProps,mapDispatchToProps )(LoginRedux);
//export default LoginRedux;