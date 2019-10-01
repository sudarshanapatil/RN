import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View, Dimensions, ScrollView, StyleSheet, Share, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    fontButton: {
        width: 40, height: 40,
        borderRadius: 20, justifyContent: 'center', alignItems: 'center', margin: 2
    },
    fontView: {
        width: width / 3, height: 50, justifyContent: 'center',
        alignItems: 'center'
    }
})
export default class Aarati extends Component {
    constructor() {
        super()
        this.state = {
            initialFontSize: 20
        }
    }
    increaseFont = (type) => {
        let newFont;
        if (type == "plus")
            newFont = this.state.initialFontSize + 1
        else if (type == "minus")
            newFont = this.state.initialFontSize - 1
        this.setState({
            initialFontSize: newFont
        })

    }
    goBack = () => {
        const { navigate } = this.props.navigation;
        navigate('Others');
    }
    onShare = async (data) => {
        try {
            const result = await Share.share({
                message: `भक्तिरस\n\n${data}\n\n अधिक अभंग वाचण्यासाठी डाउनलोड करा संत साहित्य अँप`
            });
        } catch (error) {
            alert(`काही तंत्ररिक कारणांमुळे शेअर केले जाऊ शकत नाही .क्षमस्व!`);
        }
    }
    render() {
        let data = `आरती ओवाळू कांबेकर बाबांची \nआम्हा दाखविली दिशा जीवनाची || धृ ||\n\nनिरक्षर जे होते त्यांना दिव्य दृष्टी दिधली |\nतया मुखांतूनी गुरुरायांनी गाथा वदविली ||\n ओढ लावली भक्तजनांना नामस्मरणाची |\n आम्हा दाखविली दिशा जीवनाची || १ ||\n\n महात्म्य सांगे सदा कीर्तनी श्रीभंडाऱ्याचे |\n उभे ठाकले मंदीर तेथे जिजामाऊलीचे ||\n खूण गाठ ही तिथे बांधली ध्यानसाधनेची |\n आम्हा दाखविली दिशा जीवनाची || २ ||\n\n प्रसन्न वदने जवळी घेता शत्रु मित्र झाले |\n पाठीवरती थाप मारुनी दैन्य दूर केले ||\n अखंड सेवा घडो आम्हा ऐशा चरणांची |\n आम्हा दाखविली दिशा जीवनाची || ३ ||`
        return (
            <View style={{
                flex: 1,
                width: width, height: height, backgroundColor: 'white'
            }}>
                <View style={{
                    justifyContent: 'center',
                    width: width, height: 50, backgroundColor: 'darkcyan', flexDirection: 'row'
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
                            alignSelf: 'center', fontSize: 20, color: "white"
                        }}>
                            {`आरती`}
                        </Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{
                        width: width - 40, backgroundColor: 'white', margin: 20,
                        alignItems: 'center', justifyContent: 'center'

                    }}>
                        <ImageBackground
                            style={{ width: width, height: height - 50 }}
                            source={require('../../images/homeScreen/aarti1.jpeg')}
                            opacity={0.5}
                            resizeMode={'stretch'}>
                            <View style={{ width: width - 40, margin: 20, alignContent: 'center', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: this.state.initialFontSize, textAlign: 'justify',
                                    fontFamily: 'Laila-Medium', color: 'black'
                                }}>
                                    {data}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                </ScrollView>
                <View style={{
                    width, height: 50, position: 'absolute', alignItems: 'center',
                    bottom: 0, left: 0, flexDirection: "row", backgroundColor: '#e9fcf6'
                }}>
                    <View style={{
                        width: width / 3, height: 50,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={() => this.increaseFont("minus")}>
                            <View style={styles.fontButton}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '0' }}>अ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.fontView}>
                        <TouchableOpacity onPress={() => this.increaseFont("plus")}>
                            <View style={styles.fontButton}>
                                <Text style={{ fontSize: 32, color: 'black' }}>अ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.fontView}>
                        <Icon name="share-alt" size={35} color="black" onPress={() => this.onShare(data)} />
                    </View>

                </View>
            </View>
        )
    }
}
