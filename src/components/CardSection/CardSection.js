import React  from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CardSection = (props) => {
  
    
    return (
        
        <View style={[styles.containerStyle, props.style]}>  
           
        {props.children}

        
        </View>

    );
    
};



export default CardSection;