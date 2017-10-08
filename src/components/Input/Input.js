import React from 'react';
import { TextInput, View, Text, Image, Dimensions } from 'react-native';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
//style={{ height: screenHeight / 20, width: screenWidth / 1.1 , flexDirection: 'row', backgroundColor: 'white',
const Input = ( { style, label, multiline,maxLength, numberOfLines, returnKeyType, autoFocus, keyboardType, onSubmitEditing, editable,  onChangeText, value, secureTextEntry, sourceImage, imageStyle, autoCorrect, placeholder }) => {

        const { inputStyle, labelStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
        
                {/*<Text style={labelStyle}>  {label} </Text>*/}
            <TextInput 
            style={[style, inputStyle]}
            onChangeText={onChangeText}
            value={value}
            multiline={multiline}
            numberOfLines={numberOfLines}
            autoCorrect={autoCorrect}
            placeholder={placeholder}
            autoFocus={autoFocus}
            editable={editable}
            onSubmitEditing={onSubmitEditing}
            keyboardType={keyboardType}
            maxLength={maxLength}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            //returnKeyType='search'

            

            />
            
        </View>
    );
};

export default Input;