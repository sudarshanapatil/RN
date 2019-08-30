import React, { Component } from 'react';
//import { Icon } from 'react-native-elements'
import {
  StyleSheet, Text, View, Image,
  Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  // DrawerItems,
  // SafeAreaView
} from 'react-navigation';

const DRAWER_WIDTH = Dimensions.get('window').width * 0.83;
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const stylesheet = StyleSheet.create({

  horizontalCard: {
    width: width - 4, height: (height - 100 - 12) / 3,
    flexDirection: 'row', backgroundColor: 'pink', margin: 2
  },
  imageCard: {
    width: (width - 8 - 4) / 2, height: (height - 100 - 8) / 3,
    backgroundColor: "lightblue", borderRadius: 5, margin: 4
  },
  photoStyle: {
    width: (width - 8 - 4) / 2, height: (height - 100 - 8) / 3,
    borderRadius: 5,
  },
  cardText: {
    color: 'black', fontSize: 20, textAlign: 'justify', fontFamily: 'Sumana-Regular',
    fontWeight: 'bold', alignSelf: 'center',
  }
});

const data = [

  { key: ' अभंग', id: 1, logoName: "book", imagePath: require('../../images/homeScreen/abhang.jpeg') },
  { key: ' फोटो गॅलरी ', id: 2, logoName: "photo", imagePath: require('../../images/homeScreen/gallery.jpeg') },
  { key: ' प्रवचने (व्हिडिओ ) ', id: 3, logoName: "video-camera", imagePath: require('../../images/homeScreen/video.jpg') },
  { key: ' प्रवचने (ऑडिओ ) ', id: 4, logoName: "music", imagePath: require('../../images/homeScreen/audio.jpeg') },
  { key: 'इतर माहिती  ', id: 5, logoName: "file", imagePath: require('../../images/homeScreen/otherInfo.jpeg') },
  { key: 'आरती  ', id: 6, logoName: "file", imagePath: require('../../images/homeScreen/aarti.jpg') }

]

export default class newHome extends Component {
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
    }, 80)
  }
  getDrawer = (id) => {
    console.log('yahape aaya', id);
    this.props.navigation.openDrawer();

    //this.props.navigation.navigate("Drawer")
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
        this.props.navigation.navigate("Videos")
        break;
      case 4:
        this.props.navigation.navigate("Audios")
        break;
      case 5:
        this.props.navigation.navigate("Others")
        break;
      case 6:
        this.props.navigation.navigate("Aarati")
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
                      fontFamily: 'Kalam-Regular', alignContent: 'center', alignItems: 'center',
                      textAlign: "center", alignSelf: 'center',
                      fontWeight: 'bold', fontSize: 20, color: "white",
                    }}>
                      राम कृष्ण हरी
                    </Text>
                  </View>


                </View>
              </View>
              <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width }}>
                  {
                    data.map((item, i) =>
                      <TouchableOpacity onPress={() => this.onTouchCard(item.id)}>

                        <View style={{
                          width: width / 2 - 8, height: height / 4 - 8, margin: 4,
                          backgroundColor: 'white',
                          elevation: 5, alignItems: 'center', justifyContent: 'center',
                          borderRadius: 10

                        }}>
                          <ImageBackground
                            style={{ width: width / 2 - 8, height: height / 4 - 8, borderRadius: 10 }}
                            source={item.imagePath}
                            opacity={0.3}
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
                source={require('../../images/1.jpg')}
                opacity={0.7}

              >
                <View style={{
                  flex: 1,
                  justifyContent: 'center', alignItems: 'center',
                  margin: 5, padding: 10, elevation: 7,

                }}>
                  <Text style={{
                    alignContent: 'center', alignItems: 'center', textAlign: "justify",
                    alignSelf: 'center', fontSize: 30, color: 'white', marginTop: 400, fontWeight: 'bold'
                  }}>
                    सकळ देवांचाही देव ।{"\n"}
                    बाळा म्हणे पंढरीराव ।।
                  </Text>
                </View>
              </ImageBackground>
            </View>
        }
      </View>

    );
  }
}



