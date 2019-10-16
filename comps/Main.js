import React, {useState} from 'react';
import {View} from 'react-native';

import Footer from "./Picker"
import Story from './Story';
import Header from './Header';


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