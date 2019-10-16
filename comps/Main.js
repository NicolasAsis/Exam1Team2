import React, {useState} from 'react';
import {View,Text} from 'react-native';
import Header from './Header';
import Story from './Story';
import Footer from './Footer';

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