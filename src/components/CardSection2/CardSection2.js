import React  from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CardSection2 = (props) => {
    let dir = props.direction;
    
    return (
        
        <View style={styles.containerStyle}>  
           
        {props.children}

        
        </View>

    );
    
};



export default CardSection2;