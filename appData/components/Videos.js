import Video from 'react-native-video';
import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, ScrollView, WebView } from 'react-native';
// import console = require('console');

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
const { width, height } = Dimensions.get('window');
const dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 9) / 16);
export default class Videos extends Component {

  onBuffer = () => {
    console.log("yahape buffer aaya");
  }

  videoError = () => {
    console.log("yahape aaya");
  }

  render() {
    return (
      <View style={{
        flex: 1,
        width: width, height: height, backgroundColor: 'antiquewhite'
      }}>
        <View style={{ width, height: 400 }}>
          <WebView
            style={{ width, height: 400 }}
            javaScriptEnabled={true}
            scrollEnabled={false}
            mediaPlaybackRequiresUserAction={false}
            source={{
              html: `<html>
                      <meta name="viewport" content="intial-scale=1.0, maximum-scale=0">
                      <iframe width="${width-20}" height="400" src="https://www.youtube.com/embed/U778iyDyHZ8">
                      </iframe>
                    </html>`
            }}
          />
        </View>
      
        <ScrollView horizontal={true}>
        <View style={{ width: width, height: height-400, backgroundColor: 'pink', flexDirection: 'row' }}>
        <Image style={{ width, height: height-400 }}
            source={require('../../images/1.jpg')}>
          </Image>

          <Image style={{ width, height: height-400 }}
            source={require('../../images/2.jpg')}>
          </Image>
          <Image style={{ width, height: height-400 }}
            source={require('../../images/3.jpg')}>
          </Image>
          <Image style={{ width, height: height/2 }}
            source={require('../../images/4.jpg')}>
          </Image>
          <Image style={{ width, height: height/2 }}
            source={require('../../images/5.jpg')}>
          </Image>

        </View>
        </ScrollView> 
      </View >
    )
  }
}