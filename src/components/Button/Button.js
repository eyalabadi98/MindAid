import React from 'react';
import { Text, TouchableOpacity } from 'react-native';;
import styles from './styles';

const Button = (props) => {
    return (
        <TouchableOpacity 
        style={[styles.buttonStyle, props.style]} 
        onPress={props.onPress}
        disabled={props.disabled}
        >
            <Text style={styles.textStyle}> 
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;