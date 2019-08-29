import React, { Component } from 'react';
//import { Icon } from 'react-native-elements'
import {
    StyleSheet, Text, View,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
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
        color: 'black', fontSize: 20, textAlign: 'center'
    }
});

const data = [
    { key: 'आरती ', id: 1, logoName: "book" },
    { key: 'चालू केलेले उपक्रम  ', id: 2, logoName: "photo" },
    { key: 'हस्ताक्षर ', id: 3, logoName: "video-camera" },
]

export default class Others extends Component {
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

    onTouchCard = (id) => {
        switch (id) {
            case 1:
                this.props.navigation.navigate("Aarati")
                break;
            case 2:
                this.props.navigation.navigate("Festivals")
                break;
            case 3:
                this.props.navigation.navigate("Docs")
                break;
        }

    }
    render() {
        return (
            <View style={{ flex: 1, width, height }}>
                <View style={{ flex: 1, width, height, backgroundColor: '#e6e6e6' }}>
                    <View style={{ width, height: 50, backgroundColor: 'teal' }}>
                        <View style={{ justifyContent: 'center', width: width, height: 50, backgroundColor: 'darkcyan' }}>
                            <Text style={{
                                alignContent: 'center', alignItems: 'center', textAlign: "center",
                                alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: "white"
                            }}>
                                {`इतर माहिती `}
                            </Text>
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

                                        }}>
                                            {/* <ImageBackground
                          style={{  width: width / 2 - 8, height: height / 4 - 8 }}
                          source={require('../../images/vitthal/v3.jpeg')}
                          opacity={0.3}
                          resizeMode={'stretch'}> */}
                                            <Text style={stylesheet.cardText}>{item.key}</Text>
                                            {/* </ImageBackground> */}
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    </ScrollView>
                </View>


                
      </View>

        );
    }
}



