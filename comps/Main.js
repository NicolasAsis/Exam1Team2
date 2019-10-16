import React, {useState} from 'react';
import {View,Text} from 'react-native';

import Footer from "./Picker"
import Header from './Header';
import Story from './Story';


const Main = ()=>{
    return (
      <View> 
    <Header />
      <Story />
        <Footer />
      

      </View>
    )
  }

export default Main;