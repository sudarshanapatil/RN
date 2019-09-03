import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Text, View, Dimensions, Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default class Docs extends Component {

    goBack = () => {
        const { navigate } = this.props.navigation;
        navigate('Others');
    }
    render() {

        return (
            <View style={{ width, height, flex: 1, alignItems: 'center' }}>
                <View style={{
                    justifyContent: 'center', flexDirection: "row",
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
                            alignSelf: 'center', fontFamily: 'Laila-Bold', fontSize: 20, color: "white"
                        }}>
                            {`हस्तलिखित अल्प-परिचय `}
                        </Text>
                    </View>

                </View>
                <ScrollView>

                    <View style={{
                        width, backgroundColor: 'antiquewhite',alignContent:'center',justifyContent:'center'
                    }}>
                        <View style={{ width,alignContent:'center',justifyContent:'center', 
                             }}>
                            <Image style={{ width, height }} 
                            source={require('../../images/docs/doc1.jpg')}
                            resizeMode='stretch'>
                            </Image>
                            <Image style={{ width, height }} 
                            source={require('../../images/docs/doc2.jpg')}
                            resizeMode='stretch'>
                            </Image>
                            <Image style={{ width, height }} 
                            source={require('../../images/docs/doc3.jpg')}
                            resizeMode='stretch'>
                            </Image>
                            <Image style={{ width, height }} 
                            source={require('../../images/docs/doc4.jpg')}
                            resizeMode='stretch'>
                            </Image>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

}
