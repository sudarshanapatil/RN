import React, { Component } from 'react';
// import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import abhangList from '../databaseFiles/abhang/abhangData'
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const backAction = NavigationActions.back({
    screen: 'Others',
});

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
    cardText: { fontSize: 18, textAlign: 'justify', textAlign: "center", fontFamily: "Laila-Medium" }
});


export default class Abhang extends Component {
    onTouchCard = (detailAbhang) => {
        this.props.navigation.navigate("FullAbhang", { fullAbhang: detailAbhang })
    }
    goBack = () => {
        const { navigate } = this.props.navigation;
        navigate('newHome');
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
                            alignContent: 'center', alignItems: 'center', textAlign: "center", fontFamily: 'Laila-Bold',
                            alignSelf: 'center', fontSize: 20, color: "white"
                        }}>
                            {` कांबेकर महाराज अभंग`}
                        </Text>

                    </View>
                </View>
                <ScrollView>
                    <View style={{
                        width,
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
        )
    }
}
