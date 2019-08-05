import Video from 'react-native-video';
import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, ScrollView, WebView } from 'react-native';
// import console = require('console');
const { width, height } = Dimensions.get('window');

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
        <View style={{
          justifyContent: 'center',
          width: width, height: 50, backgroundColor: 'orange'
        }}>
          <Text style={{
            alignContent: 'center', alignItems: 'center', textAlign: "center",
            alignSelf: 'center', fontWeight: 'bold', fontSize: 20
          }}>
            कांबेकर महाराज फोटो गॅलरी
                </Text>
        </View>
        <View style={{ width, height: 320, backgroundColor: 'pink' }}>
          <WebView
            // style={{ width, height: 300 }}
            javaScriptEnabled={true}
            scrollEnabled={true}
            mediaPlaybackRequiresUserAction={false}
            source={{
              html: `<html>
                      <meta name="viewport" content="intial-scale=1.0, maximum-scale=0">
                      <iframe width="${width - 20}" height=${300} src="https://www.youtube.com/embed/U778iyDyHZ8">
                      </iframe>
                    </html>`
            }}
          />
        </View>
        <View style={{ width, height: 50, backgroundColor: "antiquewhite", alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            आणखी व्हिडिओ
          </Text>
        </View>
        <View style={{ width, height: height - 400 - 50, backgroundColor: "blue" }}>
          <ScrollView horizontal={true}>
            <View style={{ height: 400, backgroundColor: 'antiquewhite', flexDirection: 'row' }}>
              <View style={styles.imageCard}>
                <Image style={styles.recommImage}
                  source={require('../../images/1.jpg')}>
                </Image>
              </View>
              <View style={styles.imageCard}>
                <Image style={styles.recommImage}
                  source={require('../../images/2.jpg')}>
                </Image>
              </View>
              <View style={styles.imageCard}>
                <Image style={styles.recommImage}
                  source={require('../../images/3.jpg')}>
                </Image>
              </View>
              <View style={styles.imageCard}>
                <Image style={styles.recommImage}
                  source={require('../../images/1.jpg')}>
                </Image>
              </View>
              <View style={styles.imageCard}>
                <Image style={styles.recommImage}
                  source={require('../../images/2.jpg')}>
                </Image>
              </View>
              <View style={styles.imageCard}>
                <Image style={styles.recommImage}
                  source={require('../../images/3.jpg')}>
                </Image>
              </View>
            </View>
          </ScrollView>
        </View>

      </View>
    )
  }
}