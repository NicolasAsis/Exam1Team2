import React, {useState} from 'react';
import {View,Text, ScrollView, Switch} from 'react-native';
import styles from '../styles/AppStyles';


function Story(){

const [showText, setShowText] = useState(false);

    return (
      <View>
        <View >
          <Text>Scroll</Text>
          <Switch
            style
            value = {showText}
            onValueChange = {()=>{setShowText(!showText)}}

          />
        </View>


          <ScrollView scrollEnabled={showText} style={styles.scrollView} >
            <Text style={styles.text}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>
      </View>

    )
  }

export default Story;
