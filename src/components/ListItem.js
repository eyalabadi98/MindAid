import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation,TouchableOpacity, Image } from 'react-native';
import CardSection from './CardSection';
import * as actions from './../actions';
import Header from './../components/Header/index';
//import FontAwesome, { Icons } from 'react-native-fontawesome';

import * as Games from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ListItem extends Component {



onRowPress(user) {
    //console.log('printing user', this.props)
    const { navigate } = this.props.navigation;
    //console.log('Row Press', user);
    navigate('GamesInfo', { game: this.props.profile, navigation: this.props.navigation });
    this.props.gamesInfoFormInput('gameInfo', this.props.profile);
  }

  render() {
      
    //console.log('render in ListItem', this.props);
    const { Category, Date, Date_and_Time, Event, For_color_Chart, Key, Location, Other, Time, Participant_1, Participant_2, Short_Team_2  } = this.props.profile;

    //console.log('navigation is ' , this.props.navigation);
    const { navigate } = this.props.navigation;
    return (

    //    <TouchableOpacity onPress={this.onRowPress(navigation).bind(this)} style={{flex:1}}>
    <TouchableOpacity onPress={this.onRowPress.bind(this)} style={{flex:1}}>
        <View>
        {/*<Button
                    onPress={() => navigate("LoginRedux")}
                    title="Log in"
                />*/}

        
          <CardSection>
            {/*<Image
                source={{uri:  url }}
                style={styles.IconStyle}
            />  */}
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={styles.row}>
                    <Text style={styles.playersStyle}> { For_color_Chart } </Text>
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
        flex: 1,
        paddingLeft: 15,
    },
    locationStyle: {
        justifyContent: 'flex-end',
        paddingLeft: 15,
    },
};


const mapStateToProps = (state) => {

    const { games } = state;

    return {
        games,
    };
};

// This helps us to bind our dispatch function to props
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Games
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
