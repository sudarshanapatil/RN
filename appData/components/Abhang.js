import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import abhangList from '../databaseFiles/abhang/abhangData'

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    card: {
        width: width - 10, height: 80,
        padding: 8,
        alignContent: 'center', justifyContent: 'center',
        backgroundColor: 'white',
        shadowRadius: 2, shadowColor: 'darkcyan',
        elevation: 5,
        shadowOffset: { width: 2, height: 5 }, shadowOpacity: 1,
        margin: 5, borderRadius: 10
    },
    cardText: { fontSize: 18, textAlign: 'justify', textAlign: "center" }
});


export default class Abhang extends Component {
    onTouchCard = (detailAbhang) => {
        this.props.navigation.navigate("FullAbhang", { fullAbhang: detailAbhang })
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
                <View style={{ width, height: height - 50 }}>
                    <ScrollView>
                        <View style={{
                         backgroundColor: "white"

                        }}>
                            {
                                abhangList.map((item, i) =>
                                    <TouchableOpacity key={i} onPress={() => this.onTouchCard(item[i + 1].fullAbhang)}>
                                        <View style={styles.card}>
                                            <View style={{ margin: 10, alignContent: 'center', justifyContent: 'center' }}>
                                                <Text style={styles.cardText}>
                                                    {item[i + 1].initial}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>)
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
