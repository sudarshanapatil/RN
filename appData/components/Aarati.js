import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';

const backAction = NavigationActions.back({
  key: 'Others',
});

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
        this.props.navigation.dispatch(backAction);
    }
    render() {
        return (
            <View style={{
                flex: 1,
                width: width, height: height, backgroundColor: 'white'
            }}>
                <View style={{
                    justifyContent: 'center',
                    width: width, height: 50, backgroundColor: 'darkcyan'
                }}>
                    <Text style={{
                        alignContent: 'center', alignItems: 'center', textAlign: "center",
                        alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: "white"
                    }}>
                        आरती
                </Text>
                </View>
                <TouchableOpacity onPress={() => this.goBack()} >
                    <View style={{
                        width, backgroundColor: 'red', height: 40
                    }}>
                        <Text style={{fontSize:20}}>
                        मागे 
                        </Text>
                    </View>

                </TouchableOpacity>
                <ScrollView>
                    <View style={{
                        width: width - 40, margin: 20, backgroundColor: 'white'

                    }}>
                        <View>
                            <Text style={{ fontSize: this.state.initialFontSize, textAlign: 'justify' }}>
                                {" आरती ओवाळू कांबेकर बाबांची \nआम्हा दाखविली दिशा जीवनाची || धृ ||\n\nनिरक्षर जे होते त्यांना दिव्य दृष्टी दिधली |\nतया मुखांतूनी गुरुरायांनी गाथा वदविली ||\n\n ओढ लावली भक्तजनांना नामस्मरणाची |\n आम्हा दाखविली दिशा जीवनाची || १ ||\n\n महात्म्य सांगे सदा कीर्तनी श्रीभंडाऱ्याचे |\n उभे ठाकले मंदीर तेथे जिजामाऊलीचे ||\n\n खूण गाठ ही तिथे बांधली ध्यानसाधनेची |\n आम्हा दाखविली दिशा जीवनाची || २ ||\n\n प्रसन्न वदने जवळी घेता शत्रु मित्र झाले |\n पाठीवरती थाप मारुनी दैन्य दूर केले ||\n\n अखंड सेवा घडो आम्हा ऐशा चरणांची |\n आम्हा दाखविली दिशा जीवनाची || ३ ||"}
                            </Text>
                        </View>

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
                                <Text style={{ fontSize: 32, color: 'black', fontWeight: '0' }}>अ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.fontView}>
                        <Icon name="share-alt" size={35} color="black" onPress={() => this.onShare(0)} />
                    </View>
                    <Icon name="heart" size={40} color="black" onPress={() => this.onShare(0)} />
                </View>
            </View>
        )
    }
}
