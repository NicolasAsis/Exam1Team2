import React, { useState } from 'react';
import {View,Text,TextInput,Button} from 'react-native';


function Header(){
    const [value, onChangeText] = React.useState('The Story of My Life');
    
    return (
        <View style={{
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
                backgroundColor:'yellow',
                height:150
                }}>
        
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            }}>
            <Text style={{
            fontSize:25
            }}>{value}</Text>
            
            <Button
            title="Edit"
            style={{
                fontSize:15
            }}
            />
        </View>

        <TextInput
            style={{
                position:'relative', 
                height: 20, 
                width: 100, 
                borderColor: 'black', 
                borderWidth: 1,
                marginLeft:150
                }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
        </View>
    );
}
export default Header;