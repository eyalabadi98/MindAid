import React, { Component } from 'react';
import { View, Text, Image, Linking,Keyboard,  TouchableWithoutFeedback, AlertIOS, Alert } from 'react-native'; 
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
let logo = "./../mindaid.png";


class LoginRedux extends Component {
   
    
    render() {
        console.log('Props in Welcome', this.props);
        const { navigate } = this.props.navigation;
        return (
            <TouchableWithoutFeedback onPress={
                Keyboard.dismiss
                } >
            <View style={{ flex: 1, backgroundColor: '#82ADCE'}} >
                
                <Image
                    source={require('./../mindaid.png')}
                    style={{height: 70, width: 300, flexDirection: 'row', alignSelf: 'center', paddingTop: 50, resizeMode: "cover", marginTop: 50}}
                />
                
                <View style={{ flex: 4}}>
                    <Input 
                        style={styles.input} 
                        placeholder="Enter your Username" 
                        onChangeText={text => this.props.UserSearchAction(text,'username')}
                        autoFocus={false}
                        returnKeyType='done'
                        value={this.props.username}
                    />
                </View>
                <View style={{ height: 40, backgroundColor: 'transparent', flex: 1 }}>
                    {/* <Text
                    style={styles.buttonStyle}
                    onPress={() => console.log("Pressed Search")}
                    >
                        Search
                    </Text> */}
                        <Animatable.View 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={1000}
                        >
                        <ButtonNPM style={{backgroundColor: '#163A56'}} textStyle={{fontSize: 18}} onPress={() => {
                            console.log("Username ", this.props.username);
                            this.props.GetDataAPI({ Name: this.props.username})
                            AlertIOS.prompt(
                                'Enter date of Birth',
                                null,
                                text => {
                                    if (this.props.data.Name == '') {
                                        Alert.alert("No Image Found")
                                    }
                                    else
                                    this.props.navigation.navigate("UserInfo")
                                }
                              );
                            }

                            
                            
                        }
                        >
                            Search
                        </ButtonNPM>
                        </Animatable.View>
                    
                    
                    
                </View>
            </View>
            </TouchableWithoutFeedback>
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
    const { username, data } = state.games;
    return {
        username,
        data
    };
};

export default connect(mapStateToProps,mapDispatchToProps )(LoginRedux);
//export default LoginRedux;