import React, { useState } from 'react';
import {View,Text,TextInput,Button} from 'react-native';


function Header(){
    const [value, onChangeText] = React.useState('The Story of My Life');
    const [inpStyle, setInpStyle] = useState({
        position:'relative', 
        height: 40, 
        width: 100, 
        borderColor: 'black', 
        borderWidth: 1,
        marginLeft:150,
        fontSize:15
    });
    const [show, setShow] = useState(1);

    var comp = null;

    var but = null;

    if (show === 1){
       comp = (<TextInput
            style={inpStyle}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder='New Title'
            placeholderTextColor='#000000'
        />)
        but = (
            <Button
            title="Edit"
            style={{
                fontSize:15
            }}
            onPress={()=>{
                setShow(2);
            }}
            />
        )
       }
    if (show === 2){
        comp = <Text></Text>;
        but = (
            <Button
            title="Edit"
            style={{
                fontSize:15
            }}
            onPress={()=>{
                setShow(1);
            }}
            />
        )
    }
    
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

            {but}
            
            {/* <Button
            title="Edit"
            style={{
                fontSize:15
            }}
            onPress={()=>{
                setShow(2);
            }}
            /> */}
        </View>
            {comp}
        {/* <TextInput
            style={inpStyle}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder='New Title'
            placeholderTextColor='#000000'
        /> */}

        </View>

    );
}
export default Header;