import React, { Component } from 'react';
import { Icon } from 'react-native-elements'
import {
  Platform, StyleSheet, Text, View, Image, DrawerLayoutAndroid,
  ToolbarAndroid, FlatList, Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'darkcyan',
    height: 50,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  drawerMenus: {
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'darkcyan',
    color:'white'
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
    }, 7000)
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
        <Text style={styles.drawerMenus}>कांबेकर महाराज चरित्र</Text>
        <Text style={styles.drawerMenus}>कांबेकर  महाराज अभंग</Text>
        <Text style={styles.drawerMenus}>कांबेकर  महाराज गुरुपरंपरा  </Text>
        <Text style={styles.drawerMenus}>कांबेकर महाराज फोटो गॅलरी  </Text>
        <Text style={styles.drawerMenus}>कांबेकर महाराज  प्रवचने (व्हिडिओ )  </Text>
        <Text style={styles.drawerMenus}>कांबेकर महाराज  प्रवचने (ऑडिओ )  </Text>
        <Text style={styles.drawerMenus}>कांबेकर महाराज  हस्ताक्षर </Text>
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
                title={"राम कृष्ण हरी"}
                // navIcon={require('../../images/menu.png')}
		// logo={require('../../images/menu.png')}
                titleColor="white"
                actions={[{ title: 'Rate this app', icon: require('../../images/menu.png'), show: 'never' },
                { title: 'About app', icon: require('../../images/menu.png'), show: 'never' },
                { title: 'Check update', icon: require('../../images/menu.png'), show: 'never' },
                { title: 'Send feedback', icon: require('../../images/menu.png'), show: 'never' },
                { title: 'Privacy policy', icon: require('../../images/menu.png'), show: 'never' },
                { title: 'Terms and Conditions', icon: require('../../images/menu.png'), show: 'never' }
                ]}
                onActionSelected={this.onActionSelected}
              />
              <View style={{
                flex: 1, justifyContent: "center", alignItems: "center",
                backgroundColor: "white"
              }}>
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
                          flex: 1, width: width - 20, height: 80, backgroundColor: 'white',
                          marginTop: 10, fontSize: 20, fontWeight: 'bold', marginLeft: 10,
                          marginRight: 10, flexDirection: 'row',
                          shadowColor: 'darkcyan', borderRadius: 10,
                          shadowOffset: { width: 0, height: 2, }, shadowRadius: 5,
                          shadowOpacity: 1.0,
                          elevation:5
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
                style={{ width, height }}
                source={require('../../images/splash2.webp')}
                opacity={0.7}

              >
                <View style={{
                  flex: 1,
                  justifyContent: 'center', alignItems: 'center',
                  margin: 5, padding: 10, elevation: 7,

                }}>
                  <Text style={{
                    alignContent: 'center', alignItems: 'center', textAlign: "justify",
                    alignSelf: 'center', fontSize: 30, color: 'white', marginTop: 400,fontWeight:'bold'
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



