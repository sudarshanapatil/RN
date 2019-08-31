import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Text, View, Dimensions, Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Docs extends Component {

    goBack = () => {
        const { navigate } = this.props.navigation;
        navigate('Others');
    }
    render() {
        const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
        return (
            <View style={{ width, height, flex: 1, alignItems: 'center' }}>
                <View style={{
                    justifyContent: 'center',flexDirection:"row",
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
                            {`कांबेकर महाराज हस्ताक्षर`}
                        </Text>
                    </View>

                </View>

                <View style={{
                    width: width, height: height - 50, backgroundColor: 'antiquewhite'
                }}>
                    <View style={{ width, height: height / 2, flex: 1 }}>
                        <Image style={{ width, height }} source={require('../../images/specialPhotos/1.jpg')}>

                        </Image>
                    </View>
                </View>
            </View>
        )
    }

}
