import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
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
    },
});

export default class Festivals extends Component {
    constructor() {
        super();
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

    goBack = () => {
        const { navigate } = this.props.navigation;
        navigate('Others');
    }
    render() {
        return (
            <View style={{
                flex: 1,
                width: width, height: height, backgroundColor: 'white'
            }}>
                <View style={{
                    justifyContent: 'center', flexDirection: 'row',
                    width: width, height: 50, backgroundColor: 'darkcyan'
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
                            alignContent: 'center', alignItems: 'center', textAlign: "center",
                            alignSelf: 'center', fontFamily: 'Laila-Medium', fontSize: 20, color: "white"
                        }}>
                            {`उपक्रम आणि भक्ती रचना `}
                        </Text>
                    </View>

                </View>
                <ScrollView>
                    <View style={{
                        width: width - 40, margin: 20,
                    }}>
                        <View>
                            <Text style={{ fontSize: this.state.initialFontSize, textAlign: 'justify', fontFamily: 'Laila-Medium' }}>
                                {"सामान्य माणसांना ईश्वराच्या नामचिंतनाची ओढ लागावी .खरे सुख कोठे मिळेल याचे ज्ञान व्हावे म्हणन कांबेकर वेगवेगळ्या ठिकाणी विविध उपक्रम सुरू केले .\n ( १ ) इ . स . १९४९ पासून जन्मगावी कांबे येथे नवरात्रोत्सवात संतोष एकनाथ महाराजांच्या भागवताचे सामूहिक पारायण . \n ( २ ) रीस - येथे कार्तिक शु . प्रतिपदा ते अमावास्या असा संपूर्ण महिना नाथांच्या भागवताचे पारायण .\n ( ३ ) चांभार्ली ,ता . खालापुर येथे चैत्र शु . प्रतिपदा ते वैशाख शु . दशमी असा चाळीस दिवस नाथांच्या भागवताचा कार्यक्रम ह . भ . प . बाळकृष्ण महाराज चांभार्लीकर यांचे मार्गदर्शनाखाली चालतो .\n ( ४ ) श्रावण शु . प्रतिपदा ते अष्टमी संतशिरोमणी तुकोबाराया यांच्या गाथेचे पारायण - गुळसुंदे ता . पनवेल येथे चालते .\n ( ५ ) श्री क्षेत्र विरेश्वर येथे फाल्गुन शु . अष्टमी ते शिवरात्र तुकोबारायांच्या गाथेचे पारायण . \n ( ६ ) खरवई - खालापूर येथे ग्रंथराज ज्ञानेश्वरीचे पारायण . \n ( ७ ) खरीवली - खालापूर येथे ग्रंथराज ज्ञानेश्वरीचे पारायण . \n ( ८ ) श्री क्षेत्र खारेश्वर येथे प्रत्येक अमावास्येला ९ व १२ वाजता अध्यायाचे पारायण \n ( ९ ) कांबे येथे तुकाराममहाराजांच्या बीजेचा सोहळा .\n ( १० ) श्रीक्षेत्र भंडारा डोंगर येथे पौष शु . अष्टमी ते पौर्णिमा सामूहिक गाथा पारायण . इ . स . १९५९ पासून .\n ( ११ ) चावणे - पनवेल येथे गाथेचे पारायण \n ( १२ ) वयाळ , वाशिवली , बडगाव येथे १९८० पासून ज्ञानेश्वरीचे पारायण .\n ( १३ ) शिंदी बुद्रक ता . माण जि . सातारा येथे ज्ञानेश्वरीचे पारायण .\n ( १४ ) निंभोरे ता . पाटण जि . सातारा येथे ज्ञानेश्वरीचे पारायण ( १५ ) केळेवाडी - पुणे शहर येथे ज्ञानेश्वरीचे पारायण \n ( १६ ) आंबेगाव ता . हवेली पुणे येथे ज्ञानेश्वरीचे पारायण \n (१७)तांबाटी - खालापूर येथे दत्तमंदिरात गुरुचरित्राचे पारायण .\n (१८)राधाकृष्ण मंदिर सावरोली येथे ज्ञानेश्वरीचे पारायण\n ( १९ ) वेणगाव , कर्जत येथे ज्ञानेश्वरीचे पारायण \n ( २० ) उंबरे - कर्जत येथे ज्ञानेश्वरीचे पारायण \n (२१)श्री क्षेत्र विरेश्वर येथे व गुळसुंदे येथे शुद्ध व वद्य एकादशीचा कार्यक्रम. \n ( २२ ) आषाढी एकादशीला पायी कोकणदिंडी पंढरपूर \n ( २३ ) कार्तिकी एकादशीला पायी दिंडी आळंदी .\n( २४ ) प्रत्येक महिन्याच्या बिजेचा कार्यक्रम श्रीक्षेत्र भंडारा . \n असे अनेक उपक्रम सुरू करून सर्वांनाच हरिभजनाची आवड लावली .\n\n"}
                            </Text>
                        </View>

                    </View>
                </ScrollView>
                <View style={{
                    width, height: 50, position: 'absolute',
                    bottom: 0, left: 0, flexDirection: "row", backgroundColor: 'ghostwhite'
                }}>
                    <View style={styles.fontView}>
                        <TouchableOpacity onPress={() => this.increaseFont("minus")}>
                            <View style={styles.fontButton}>
                                <Text style={{ fontSize: 25, color: 'black', }}>अ</Text>
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
                        <Icon name="share-alt" size={35} color="black" onPress={() => this.onShare(0)} />
                    </View>
                   
                </View>
            </View>
        )
    }
}
