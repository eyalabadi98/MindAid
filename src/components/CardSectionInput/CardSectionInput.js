import React  from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CardSectionInput = (props, { styleCustom }) => {
  
    
    return (
        
        <View style={[styles.containerStyle, props.style]}>  
           
        {props.children}

        
        </View>

    );
    
};





export default CardSectionInput;