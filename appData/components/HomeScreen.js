import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  Platform, StyleSheet, Text, View, Image, DrawerLayoutAndroid,
  ToolbarAndroid, FlatList, Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
import Splash from './Splash'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'orange',
    height: 50,
    alignSelf: 'stretch',
    textAlign: 'center',
  }
});


export default class HomeScreen extends Component {

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

  onTouchCard = (id) => {
    switch (id) {
      case 1:
        this.props.navigation.navigate("Charitra")
        break;
      case 2:
        this.props.navigation.navigate("Abhang")
        break;
      case 3:
        this.props.navigation.navigate("Parampara")
        break;
      case 4:
        this.props.navigation.navigate("Gallery")
        break;
      case 5:
        this.props.navigation.navigate("Videos")
        break;
      case 6:
        this.props.navigation.navigate("Audios")
        break;
      case 7:
        this.props.navigation.navigate("Docs")
        break;

    }

  }
  render() {
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'left', backgroundColor: 'orange' }}>कांबेकर महाराज चरित्र</Text>
        <Text style={{ margin: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'left', backgroundColor: 'orange' }}>कांबेकर  महाराज अभंग</Text>
        <Text style={{ margin: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'left', backgroundColor: 'orange' }}>कांबेकर  महाराज गुरुपरंपरा  </Text>
      </View>
    );

    return (
      <View style={{ flex: 1, width, height }}>
        {
          (this.state.showSplash) ?
            <DrawerLayoutAndroid
              drawerWidth={300}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => navigationView}>
              <ToolbarAndroid
                style={styles.toolbar}
                navIcon={require('../../images/activity.svg')}
                title="ग्रंथ संपदा"
                titleColor="000"
                actions={[{ title: 'Rate this app', icon: require('../../images/menu.svg'), show: 'never' },
                { title: 'About app', icon: require('../../images/menu.svg'), show: 'never' },
                { title: 'Check update', icon: require('../../images/menu.svg'), show: 'never' },
                { title: 'Send feedback', icon: require('../../images/menu.svg'), show: 'never' },
                { title: 'Privacy policy', icon: require('../../images/menu.svg'), show: 'never' },
                { title: 'Terms and Conditions', icon: require('../../images/menu.svg'), show: 'never' }
                ]}
                onActionSelected={this.onActionSelected}
              />
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <FlatList
                  data={[{ key: 'कांबेकर महाराज चरित्र', id: 1 }, { key: 'कांबेकर  महाराज अभंग', id: 2 },
                  { key: 'कांबेकर  महाराज गुरुपरंपरा', id: 3 }, { key: 'कांबेकर महाराज फोटो गॅलरी ', id: 4 },
                  { key: 'कांबेकर महाराज  प्रवचने (व्हिडिओ ) ', id: 5 }, { key: 'कांबेकर महाराज  प्रवचने (ऑडिओ ) ', id: 6 },
                  { key: 'कांबेकर महाराज  हस्ताक्षर ', id: 7 }
                  ]}
                  renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => this.onTouchCard(item.id)}>
                      <View style={
                        {
                          flex: 1, width: width - 20, height: 80, backgroundColor: 'antiquewhite',
                          marginTop: 10, fontSize: 20, fontWeight: 'bold', marginLeft: 10,
                          marginRight: 10, flexDirection: 'row', shadowColor: 'black',
                          shadowOpacity: 1.0,
                        }
                      }>
                        <View style={{
                          justifyContent: "center", alignItems: 'center',
                          height: 80, width: 80
                        }}>
                          <Image
                            style={{ width: 60, height: 60 }}
                            source={require(`../../images/1.jpg`)}>
                          </Image>
                        </View>

                        <View style={{
                          justifyContent: "center", height: 80, width: width - 20 - 80,
                          alignItems: 'center'
                        }}>
                          <Text style={{
                            fontSize: 20, fontWeight: 'bold', textAlign: "center", justifyContent: "center",
                            alignItems: 'center', alignSelf: 'center'
                          }}>
                            {item.key}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  }
                />
              </View>
            </DrawerLayoutAndroid>
            :
            <View style={{ flex: 1, width, height }}>
              <ImageBackground
                style={{ width: width, height }}
                source={require('../../images/8.jpeg')}
                opacity={0.3}
                resizeMode={'stretch'}>
                <View style={{
                        flex: 1,
                        justifyContent: 'center', alignItems: 'center',
                        margin: 5, padding: 10, elevation: 7,

                    }}>
                        <Text style={{
                            alignContent: 'center', alignItems: 'center', textAlign: "justify",
                            alignSelf: 'center', fontSize: 24, color: '#000000'
                        }}>
                            सकळ देवांचाही देव । बाळा म्हणे पंढरीराव ।।
                        </Text>

                    </View>
              </ImageBackground>
              
            </View>
        }
      </View>

    );
  }
}



