import React, { Component } from 'react';
import {
    StyleSheet, Text, View,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
import { NavigationActions } from 'react-navigation';
const stylesheet = StyleSheet.create({

     cardText: {
        color: 'black', fontSize: 22, textAlign: 'center', fontFamily: 'Laila-Bold',
    }
});
const backAction = NavigationActions.back({
    screen: 'newHome',
});
const data = [
    { key: 'आरती ', id: 1, logoName: "book", imagePath: require('../../images/homeScreen/aarti1.jpeg') },
    { key: 'चालू केलेले उपक्रम  ', id: 2, logoName: "photo", imagePath: require('../../images/homeScreen/function.jpeg') },
    { key: 'हस्ताक्षर ', id: 3, logoName: "video-camera", imagePath: require('../../images/homeScreen/handWrite1.jpeg') },
    { key: 'रौप्य महोत्सव कार्यक्रम ', id: 4, logoName: "video-camera", imagePath: require('../../images/homeScreen/saptah.jpeg') },

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

    goBack = () => {
        // this.props.navigation.dispatch(backAction);
        this.props.navigation.goBack();
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
            case 4:
                this.props.navigation.navigate("Saptah",{type:"other"})
                break;
        }

    }
    render() {
        return (
            <View style={{ flex: 1, width, height }}>
                <View style={{ flex: 1, width, height, backgroundColor: '#e6e6e6' }}>
                    <View style={{ width, height: 50, backgroundColor: 'teal' }}>
                        <View style={{
                            width: width, height: 50,
                            backgroundColor: 'darkcyan', flexDirection: 'row'
                        }}>
                            <View style={{
                                width: 50, height: 50, alignItems: 'center', justifyContent: 'center'
                            }}>

                                <Icon name="arrow-left" size={25} color="white" onPress={() => this.goBack()} />
                            </View>
                            <View style={{
                                width: width - 50, height: 50, alignItems: 'center', justifyContent: 'center'
                            }} >
                                <Text style={{
                                    alignContent: 'center', alignItems: 'center', textAlign: "center",fontFamily: 'Laila-Medium',
                                    alignSelf: 'center', fontFamily: 'Laila-Bold', fontSize: 20, color: "white"
                                }}>
                                    {`इतर माहिती `}
                                </Text>

                            </View>
                        </View>
                    </View><ScrollView>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width }}>
                            {
                                data.map((item, i) =>
                                    <TouchableOpacity onPress={() => this.onTouchCard(item.id)}>
                                        <View style={{
                                            width: width / 2 - 8, height: height / 3 - 40, margin: 4,
                                            backgroundColor: 'white',
                                            elevation: 5, alignItems: 'center', justifyContent: 'center',
                                            borderRadius: 10

                                        }}>
                                            <ImageBackground
                                                style={{ width: width / 2 - 8, height: height / 3 - 40, borderRadius: 5 }}
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
            </View>

        );
    }
}



