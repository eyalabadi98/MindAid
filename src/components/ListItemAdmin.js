import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation,TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './CardSection';
import * as actions from './../actions';
import Header from './../components/Header/index';
//import FontAwesome, { Icons } from 'react-native-fontawesome';

import Button from './Button/';

import { StackNavigator } from 'react-navigation';

import Routes from './../config/routes';

class ListItemAdmin extends Component {

onRowPress(navigation) {
    //console.log('printing user', this.props)
    const { navigate } = this.props.navigation;
    navigate('AdminGamesInfo', { game: this.props.profile, navigation: this.props.navigation });
  }

  render() {
      
    //console.log('render', this.props);
    const { Category, Date, Date_and_Time, Event, Key, Location, Other, Time, Participant_1, Participant_2, Short_Team_2,  Short_Team_1   } = this.props.profile;

    //console.log('navigation is ' , this.props.navigation);
    const { navigate } = this.props.navigation;
    return (

    //    <TouchableOpacity onPress={this.onRowPress(navigation).bind(this)} style={{flex:1}}>
    <TouchableOpacity onPress={this.onRowPress.bind(this)} style={{flex:1}}>
        <View>

        
          <CardSection>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={styles.row}>
                    <Text style={styles.playersStyle}> { Short_Team_1 } vs { Short_Team_2 } </Text>
                    <Text style={styles.timeStyle}> { Date } </Text>
                    <Text style={styles.timeStyle}> { Time } </Text>
                    <Text style={styles.locationStyle}> { Event } </Text>  
                    <Text style={styles.locationStyle}> { Location } </Text>                       
                </View>
              
            </View>
            <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
            
           </View>
          </CardSection>
          
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = {
    timeStyle: {
        fontSize: 18,
        //paddingLeft: 15,
        alignSelf: 'flex-end',
    
        //backgroundColor: 'purple',
        
    },
    IconStyle: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    row: {
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    teamStyle: {
        fontSize: 14,
        paddingLeft: 15,
        color: 'grey',
        flex: 1,
        paddingTop: 4,
    },
    playersStyle: {
        fontSize: 16,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 0,
        paddingLeft: 15,
        paddingTop: 5
    },
    locationStyle: {
        justifyContent: 'flex-end',
        paddingLeft: 15,
    },
};


export default ListItemAdmin;
