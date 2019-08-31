import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import data from './abhangData/abhangs.json'

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    card: {
        width: width - 10, height: 80,
        padding: 8,
        alignContent: 'center', justifyContent: 'center', 
        backgroundColor: 'white',
        shadowRadius: 2, shadowColor: 'darkcyan',
        elevation:5,
        shadowOffset: { width: 2, height: 5 }, shadowOpacity: 1,
        margin: 5, borderRadius: 10
    },
    cardText: { fontSize: 18, textAlign: 'justify', textAlign: "center" }
});

const abhangData = [{
    1: "     समचरणदृष्टि विटेवरी साजिरी |\n तेथें माझी हरी वृत्ति राहो ॥१॥"
},
{
    2: "    सुंदर तें ध्यान उभे विटेवरी ।\n कर कटावरी ठेवूनियां ॥१॥"

},
{
    3: "     सदा माझे डोळे जडो तुझे मूर्ती ।\nरखुमाईच्या पती सोयरिया ॥१॥"
},
{
    4: "     राजस सुकुमार मदनाचा पुतळा ।\nरविशशिकळा लोपलिया ॥१॥"
}
    , {
    5: "     कर कटावरी तुळसीच्या माळा ।\nऐसें रूप डोळां दावीं हरी ॥१॥"
},
{
    6: "     गरुडाचें वारिकें कासे पीतांबर ।\nसांवळें मनोहर कैं देखेन ॥१॥"
},
{
    7: "     गरुडाचें वारिकें कासे पीतांबर ।\nसांवळें मनोहर कैं देखेन ॥१॥"
}

]
export default class Abhang extends Component {
    onTouchCard = (id) => {
        this.props.navigation.navigate("FullAbhang")
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
                        कांबेकर महाराज अभंग
                </Text>
                </View>
                <ScrollView>

                    <View style={{
                        width: width, height: height - 50, backgroundColor: "white"

                    }}>

                        {
                            abhangData.map((item, i) =>
                                <TouchableOpacity key={i} onPress={() => this.onTouchCard()}>
                                    <View style={styles.card}>
                                        <View style={{ margin: 10, alignContent: 'center', justifyContent: 'center' }}>
                                            <Text style={styles.cardText}>

                                                {item[i + 1]}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>)
                        }



                    </View>
                </ScrollView>
            </View>
        )
    }
}
