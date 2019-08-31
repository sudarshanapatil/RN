import Video from 'react-native-video';
import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, ScrollView, WebView, TouchableOpacity } from 'react-native';
// import console = require('console');
const { width, height } = Dimensions.get('window');
import videoLinks from '../databaseFiles/videoLinks'
import otherVideoLinks from '../databaseFiles/otherVideoLinks'
const styles = StyleSheet.create({
  recommImage: {
    width: (width / 3) - 5,
    height: height - 500,
    borderRadius: 3
  },
  imageCard:
  {
    width: (width / 3) - 10,
    height: height - 500,
    margin: 5
  }
})
const dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 9) / 16);
export default class Videos extends Component {
  constructor() {
    super();
    
    this.state = {
      videoUrl: "https://www.youtube.com/embed/U778iyDyHZ8",
      dindiUrl: "https://www.youtube.com/embed/6b0oX6-Qh9k",
     
    }
    

  }

  onBuffer = () => {
    console.log("yahape buffer aaya");
  }

  videoError = () => {
    console.log("yahape aaya");
  }
  playVideo = (link) => {
    this.setState({
      videoUrl: link
    })

  }
  handleWebError = () => {

  }

  render() {
    let title= 'कांबेकर महाराज प्रवचने (व्हिडिओ )'
    
    return (
      <View style={{
        flex: 1,
        width: width, height: height, backgroundColor: 'antiquewhite'
      }}>
        <View style={{
          justifyContent: 'center',
          width: width, height: 50, backgroundColor: 'darkcyan'
        }}>
          <Text style={{
            alignContent: 'center', alignItems: 'center', textAlign: "center",
            alignSelf: 'center', fontFamily: 'Laila-Bold', fontSize: 20, color: "white"
          }}>
            {title}
          </Text>
        </View>
        <View style={{ width, height: 320, backgroundColor: 'pink' }}>
          <WebView
            // style={{ width, height: 300 }}
            javaScriptEnabled={true}
            scrollEnabled={true}
            onError={() => <View style={{ width, height: 320 }}><Text>some thing went wrong</Text></View>}
            renderError={() => <View style={{ width, height: 320 }}><Text>some thing went wrong</Text></View>}
            mediaPlaybackRequiresUserAction={false}
            source={{
              html: `<html>
                      <meta name="viewport" content="intial-scale=1.0, maximum-scale=0">
                      <iframe width="${width - 20}" height=${300} src=${this.state.videoUrl}>
                      </iframe>
                    </html>`
            }}
          />
        </View>
        <View style={{ width, height: 50, backgroundColor: "white", alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'Laila-Bold', fontSize: 20 }}>
            आणखी व्हिडिओ
          </Text>
        </View>
        <View style={{ width, height: height - 400 - 50, backgroundColor: "blue" }}>
          <ScrollView horizontal={true}>
            {
              videoLinks.map((item, i) =>
                <View key={i} style={{ height: height - 450, backgroundColor: 'white', flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => this.playVideo(item[i + 1].link)}>
                    <View style={styles.imageCard}>
                      {/* <Text>{item[i + 1].tp}</Text> */}
                      <Image style={styles.recommImage}
                        source={item[i + 1].src}>
                      </Image>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
          </ScrollView>
        </View>

      </View>
    )
  }
}