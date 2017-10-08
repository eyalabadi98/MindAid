import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

//create component
const Header = (props) => {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            
            {/* <View style={{ flexDirection: 'row', alignSelf:'flex-start', backgroundColor: 'red'}}>
                <Text style={{ flexDirection: 'column', backgroundColor: 'transparent'}} > {props.backText} </Text>
                
            </View> */}
            <Text style={textStyle}>{props.headerText} </Text>
            <Text style={{ backgroundColor: 'transparent', color: 'blue', alignSelf: 'flex-start', fontSize: 16, borderWidth: 0,}} onPress={props.onPress}> {props.backText} </Text>
            
            
        </View>
    );
};


//make it available

export default Header;
