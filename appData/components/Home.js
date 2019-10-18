import React, { Component } from 'react';
//import { Icon } from 'react-native-elements'
import {
  StyleSheet, Text, View, Image,
  Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';

const DRAWER_WIDTH = Dimensions.get('window').width * 0.83;
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const stylesheet = StyleSheet.create({
  cardText: {
    fontFamily: 'Laila-Bold', color: 'black', fontSize: 22, textAlign: 'justify',
    alignSelf: 'center', textShadowColor: 'orange', textShadowOffset: { width: 2, height: 2 }
  }
});

const data = [
  { key: ' अभंग', id: 1, logoName: "book", imagePath: require('../../images/homeScreen/abhang.jpeg') },
  { key: ' फोटो गॅलरी ', id: 2, logoName: "photo", imagePath: require('../../images/homeScreen/gallery.jpg') },
  { key: ' व्हिडिओ', id: 3, logoName: "video-camera", imagePath: require('../../images/homeScreen/video.jpg') },
  { key: 'इतर माहिती  ', id: 4, logoName: "file", imagePath: require('../../images/homeScreen/otherInfo.jpeg') },
]

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      count: 1,
      showSplash: 0
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showSplash: 1
      })
    }, 3000)
  }
  getDrawer = (id) => {
    this.props.navigation.openDrawer();
  }
  onTouchCard = (id) => {
    switch (id) {
      case 1:
        this.props.navigation.navigate("Abhang")
        break;
      case 2:
        this.props.navigation.navigate("Gallery")
        break;
      case 3:
        this.props.navigation.navigate("Videos", { type: "maharaj" })
        break;
      case 4:
        this.props.navigation.navigate("Others")
        break;


    }

  }
  render() {
    return (
      <View style={{ flex: 1, width, height }}>
        {
          (this.state.showSplash) ?
            <View style={{ flex: 1, width, height, backgroundColor: '#e6e6e6' }}>
              <View style={{ width, height: 50, backgroundColor: 'teal' }}>
                <View style={{
                  justifyContent: 'center', width: width, height: 50,
                  backgroundColor: 'darkcyan', flexDirection: 'row'
                }}>
                  <TouchableOpacity onPress={() => this.getDrawer()}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'darkcyan', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="navicon" size={30} color="white" />
                    </View>
                  </TouchableOpacity>
                  <View style={{ width: width - 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{
                      fontFamily: 'Laila-Bold', alignContent: 'center', alignItems: 'center',
                      textAlign: "center", alignSelf: 'center',
                      fontSize: 20, color: "white",
                    }}>
                      {" राम कृष्ण हरि"}
                    </Text>
                  </View>
                </View>
              </View>
              <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width }}>
                  {
                    data.map((item, i) =>
                      <TouchableOpacity key={item.key} onPress={() => this.onTouchCard(item.id)
                      }>
                        <View style={{
                          width: width / 2 - 10, height: height / 3 - 40, margin: 5,
                          backgroundColor: 'white',
                          elevation: 5, alignItems: 'center', justifyContent: 'center',
                          borderRadius: 10,

                        }}>
                          <ImageBackground
                            style={{ width: width / 2 - 10, height: height / 3 - 40, }}
                            source={item.imagePath}
                            opacity={0.5}
                            imageStyle={{ borderRadius: 6 }}
                            resizeMode={'stretch'}>
                            <View style={{
                              width: width / 2 - 8, height: height / 4 - 8,
                              alignItems: 'center', justifyContent: 'center'
                            }}>
                              <Text style={stylesheet.cardText}>{item.key}</Text>
                            </View>
                          </ImageBackground>
                        </View>
                      </TouchableOpacity>
                    )
                  }
                </View>
              </ScrollView>
            </View>
            :
            <View style={{ flex: 1, width, height }}>
              <ImageBackground
                style={{ width, height }}
                source={require('../../images/specialPhotos/splash.jpg')}
                opacity={0.8}

              >
                <View style={{
                  flex: 1,
                  justifyContent: 'center', alignItems: 'center',
                  margin: 5, padding: 10, elevation: 7,

                }}>
                  <Text style={{
                    alignContent: 'center', alignItems: 'center', textAlign: "justify",
                    alignSelf: 'center', fontSize: 26, color: 'black', marginTop: 300,
                    fontFamily: 'Laila-Bold'
                  }}>
                  । कोणाही जीवाचा न घडो मत्सर।
                    {/* सकळ देवांचाही देव ।{"\n"}
                    बाळा म्हणे पंढरीराव ।। */}
                  </Text>
                </View>
              </ImageBackground>
            </View>
        }
      </View>
    );
  }
}



