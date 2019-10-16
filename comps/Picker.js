import React, { useState } from "react";
import {View, Text, Picker} from "react-native";


function Footer(){
    
    const [story, setStory] = useState("Story 1")

    return(
        <View style={{height:100, alignItems: "center", justifyItems: "center", backgroundColor: "beige" }}>

<Text style={{marginTop:4}}>Written By</Text>
        <Picker 
            selectedValue={story}
              style={{height: 50, width: 300}}
              onValueChange={(itemValue) => setStory(itemValue)
            }> 

        <Picker.Item label="Sam marles" color="grey" value="Story 1" />
        <Picker.Item label="jesse jen" color="grey" value="Story 2" />
        <Picker.Item label="chaze style" color="grey" value="Story 3" />
        </Picker>

        </View>
    )

}



export default Footer;

