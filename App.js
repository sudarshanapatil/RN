import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
//import { Text, View } from 'react-native';
//import HomeScreen from './appData/components/HomeScreen'
import Charitra from './appData/components/Chatritra'
import Abhang from './appData/components/Abhang'
import Parampara from './appData/components/Parampara'
import FullAbhang from './appData/components/FullAbhang'
import Gallery from './appData/components/Gallery'
import Videos from './appData/components/Videos'
import Audios from './appData/components/Audios'
import Docs from './appData/components/Docs'
import FullImage from './appData/components/FullImage';
import PhotoList from './appData/components/PhotoList'
import Aarati from './appData/components/Aarati'
import newHome from './appData/components/newHome'
import Others from './appData/components/Others'
import Festivals from './appData/components/Festivals'
//import Drawer from './appData/components/Drawer'
//const DRAWER_WIDTH = Dimensions.get('window').width * 0.83;

const AppNavigator = createStackNavigator(
  {
    // Home: {
    //   screen: HomeScreen
    // },
    newHome: {
      screen: newHome
    },
    Charitra:
    {
      screen: Charitra
    },
    Abhang:
    {
      screen: Abhang
    },
    Parampara:
    {
      screen: Parampara
    },
    FullAbhang:
    {
      screen: FullAbhang
    },
    Gallery:
    {
      screen: Gallery
    },
    Videos: {
      screen: Videos
    },
    Audios: {
      screen: Audios
    },
    Docs: {
      screen: Docs
    },
    FullImage: {
      screen: FullImage
    },
    PhotoList: {
      screen: PhotoList
    },
    Aarati: {
      screen: Aarati
    },
    Others: {
      screen: Others
    },
    Festivals: {
      screen: Festivals
    },
    // Drawer: {
    //   screen: Drawer
    // }




  },
  {
    initialRouteName: 'newHome',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}








