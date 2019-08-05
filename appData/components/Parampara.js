import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    fontButton: {
        width: 60, height: 60, backgroundColor: 'orange',
        borderRadius: 30, justifyContent: 'center', alignItems: 'center', margin: 2
    }
})
export default class Parampara extends Component {
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
                        कांबेकर  महाराज गुरुपरंपरा
                </Text>
                </View>
                {/* <View></View> */}
                <ScrollView>
                    <View style={{
                        width: width - 40, height: height - 70, margin: 20,

                    }}>

                        <View>
                            <Text style={{ fontSize: this.state.initialFontSize, textAlign: 'justify' }}>
                                वंशपरंपरा
                                    श्रीएकनाथमहाराज आणि गिरिजाबाई यांना तीन अपत्ये झाली.
                                    गोदाबाई, हरिपंडीत, गंगाबाई. त्यातील गोदाबाई उर्फ लीला यांचा विवाह पैठण येथिल चिंतामणि मुद्‍गल यांच्याशी झाला.
                                    त्यांचा मुलगा म्हणजे श्रेष्ठ कवी मुक्‍तेश्वर होय. गंगाबाईंचा विवाह डंबळ येथिल बाळकृष्णपंत चंद्रकेत यांच्याशी झाला. त्यांचा पणतु म्हणजे कवी शिवराम होय.
                                    हरिपंडित उर्फ हरिपंत हे विद्वान पंडित; परंतु नाथांचं वागणं त्यांना आवडत नसे. याकारणानं ते काशीस निघून गेले. पुढे काही कारणाने त्यांना नाथांची महती समजली व ते सपरिवार पैठणास येवून नाथांचा पारमार्थिक वारसा चालवू लागले. त्यांनी नाथांचा अनुग्रह प्राप्त केला. नाथांच्या समाधीनंतर पंढरीची, आळंदिची वारी त्यांनी चालू ठेवली. आषाढीवारीसाठी नाथांच्या चरणपादुका पालखीत पंढरीस नेण्याची प्रथा त्यांनी सुरू केली. हरिपंडितांना तीन मुले झाली प्रल्हाद, मेघ:शामबुवा आणि राघोबा.
                                    प्रल्हादांचा वंश पाच पिढ्यांनंतर खुंटला. राघोबा हे बालपणापासूनच पारमार्थिक. आपल्या आजोबांप्रमाणेच त्यांना भजन किर्तन करणे आवडत. पुढे त्यांनीही या दिव्य परंपरेला शोभेल असाच परमार्थ केला. त्यांच्या अकराव्या पिढीत श्रीनारायणमहाराज हे थोर भगवद्‍भक्त होऊन गेले. त्यांनी नाथांच्या पालखी सोहळ्यास वैभव प्राप्त करून दिले. पैठणकर फडाच्या व वारकरी किर्तनाच्याद्वारा त्यांनी संप्रदाय ढवळून काढला. विदर्भात त्यांना मानणारा मोठा वर्ग आहे. मेघ:शामबुवा हे नाथांचे दुसऱ्या क्रमांकाचे नातू. आपल्या वडिलांचा आदर्श समोर ठेवून वंशपरंपरेप्रमाणे शिष्यपरंपराही त्यांनी चालू ठेवली. ते नाथांप्रमाणेच महान भगवद्‍भक्त होते. सद्यस्थितीत मेघ:शामबुवा यांचा वंशविस्तार पावला असून पैठण येथिल सर्व नाथवंशीय मंडळी ही मेघ:शामबुवा यांच्या शाखेतील आहेत. नाथांच्या पाचव्या, सहाव्या, सातव्या पिढीत रामचंद्रबुवा, छय्याबुवा, मय्याबुवा, काशीनाथबुवा, विश्वनाथबुवा इ. महान संगीतज्ञ, गायक जन्मास आले. आपल्या स्वर्गीय गायनकलेच्याद्वारा दीपराग गाताच दिवा पेटावा हा अधिकार असल्याने भोसले, पेशवे, शिंदे, होळकर, निंबाळकर आदींकडून त्यांना अनेक जहागिऱ्या मिळाल्या.
                            </Text>
                        </View>
                        <View style={{
                            justifyContent: 'center', alignItems: 'center',
                            bottom: 30, right: 30, position: 'absolute'
                        }}>
                            <TouchableOpacity onPress={() => this.increaseFont("plus")}>
                                <View style={styles.fontButton}>
                                    <Text style={{ fontWeight: 'bold' }}>+</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.increaseFont("minus")}>
                                <View style={styles.fontButton}>
                                    <Text style={{ fontWeight: 'bold' }}>-</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
}
