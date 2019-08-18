import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View, Dimensions, ScrollView, Button, TouchableOpacity, StyleSheet } from 'react-native';


const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    fontButton: {
        width: 30, height: 30, backgroundColor: 'pink',
        borderRadius: 15, justifyContent: 'center', alignItems: 'center'
    }
})
export default class Charitra extends Component {
    constructor() {
        super()
        this.state = {
            initialFontSize: 16
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

    render() {
        return (
            <View style={{
                flex: 1,
                width: width, height: height, backgroundColor: 'white'
            }}>
                <View style={{
                    flexDirection: 'row',alignContent: 'center',
                    width: width, height: 50, backgroundColor: 'darkcyan'
                }}>
                    <View style={{ width: width - 60, height: 50, }}>
                        <Text style={{
                            alignContent: 'center', alignItems: 'center', textAlign: "center",
                            alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: "white"
                        }}>
                            कांबेकर महाराज चरित्र
                        </Text>
                    </View>
                    <View style={{
                        width: 60, height: 50, flexDirection: 'row'
                    }}>
                        <TouchableOpacity onPress={() => this.increaseFont("plus")}>
                            <View style={styles.fontButton}>
                                <Text style={{ fontWeight: 'bold', color: "white",fontSize:20 }}>+</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.increaseFont("minus")}>
                            <View style={styles.fontButton}>
                                <Text style={{ fontWeight: 'bold', color: "white" }}>-</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width, height: height - 50, backgroundColor: "white" }}>

                    <View>
                        <ScrollView>
                            <View style={{
                                flex: 1, width: width - 40, height: height - 50, margin: 20,
                                padding: 10, alignItems: 'center',
                            }}>
                                <Text style={{ fontSize: this.state.initialFontSize, textAlign: 'justify' }}>
                                    नाथांचा जन्म संत भानुदासांच्या कुळामध्ये देशस्थ ऋग्वेदी आश्वलायन ब्राह्मण कुटुंबात झाला. नाथांचे मातापिता नाथांच्या बालपणात निवर्तल्यामुळे आजी आजोबांनी नाथांचा सांभाळ केला. बालपणापासूनच नाथांना भगवद्‍भक्‍तीचे वेड. गुरुकृपेने भगवंताची भेट होते हे समजल्यानंतर वयाच्या १२ व्या वर्षी आकाशवाणीच्या निर्देशाप्रमाणे नाथ देवगिरी (दौलताबाद) येथे पोचले. तेथे जनार्दन स्वामी नावाचे दत्‍तभक्‍त किल्लेदार म्हणुन होते. नाथांनी त्यांना पाहताच सद्‍गुरू मानून मनोभावे सेवा केली. नाथांची सेवा पाहुन स्वामींनी त्यानां शिष्य म्हणुन स्वीकारले. स्वामी प्रत्येक गुरुवारी किल्ल्याच्या शिखरातील गुहेत दत्‍तध्यान करीत. एके दिवशी स्वामी ध्यानात असताना परकीयांचे आक्रमण झाले. सद्‍गुरुंची समाधी भंग होऊ नये म्हणुन नाथ हाती तलवार घेवून घोडयावर स्वार झाले. लढाई केली आणि शत्रुंचा पराभव केला. निस्सिम सेवेने नाथ दत्‍तात्रय दर्शनास पात्र झाल्याचे पाहुन शुलिभंजन पर्वतावर त्यांना पहिले दत्‍तदर्शन स्वामींनी घडविले. पुढे तीर्थयात्रा करुन नाथ पैठणास पोचले.
                                    सद्‍गुरुंच्या आदेशाप्रमाणे पैठण येथेच वास्तव्य करुन नाथ गृहस्थाश्रमात प्रवेश करते झाले. नाथांची पत्नी गिरिजाबाई ह्या सुशील आणि तत्पर होत्या. त्यांना तीन अपत्ये झाली. गोदा, हरिपंडीत व गंगा. नाथांचा प्रपंच व परमार्थ हे दोन्हीही फुलू लागले. संस्कृतातील ज्ञान सर्वसामान्यांना कळावे या उद्देशाने त्यांनी ते मराठीत सांगण्यास सुरुवात केली. त्यावरुन त्यांना अनेकांचा विरोध सहन करावा लागला. परंतु त्यास न जुमानता लोकोद्धारार्थ नाथांनी लोकांच्याच भाषेत भारुडादींच्या मार्गाने लोकांना परमार्थमार्गास लावले. लोकोद्धारासाठी वाङमयाच्या व आचरणाच्या माध्यमातून त्यांनी अनेक लोकोपयोगी कार्य केले. ेवाचे नाम घेण्याचा अधिकार स्त्री शूद्रादी सर्वांना आहे असे वारंवार सांगितले. अशाप्रकारच्या वक्तव्यामुळे पैठणकरांनी अनेकप्रकारे नाथांना त्रास देण्याचा प्रयत्न केला परंतु नाथांनी त्यांचा कधीही तिरस्कार केला नाही. त्यांनी आपल्या आचरणाने शांती व भक्तीचा प्रचार केला.
                                    त्यांनी अनेक ग्रंथांची रचना केली. नाथांची भक्ती पाहून भगवान श्रीकृष्ण ३६ वर्षे श्रीखंड्या, केशव व विठ्ठल नावाने नाथांघरी राबला. भगवान दत्तात्रयांनी नाथांच्या दारी द्वारपाल म्हणुन काम केले. नाथवाड्यात नित्य कीर्तन प्रवचनादी रोज होत असत.
                        </Text>
                            </View>
                        </ScrollView>
                    </View>

                </View>
            </View >
        )
    }
}
