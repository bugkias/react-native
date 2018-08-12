import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import Login from './Login'

const { width, height } = Dimensions.get('window')
const DEVICE_HEIGHT = height
const DEVICE_WIDTH = width

export default class SplashScreen extends Component<{}> {

    constructor(props){
        super(props);
        this.state = {
            done: false
        }
    }

    timer() {
        sestTimeout(() => {
            this.setState({
                done: true
            });
        }, 3000)
    }

    componentDidMount() {
        this.timeout();
    }

    render() {
        return (
            this.state.done ? () : 
            (
                <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../images/logo.png')} style={styles.logo} />
                </View>
                <View>
                    <Text style={styles.powerby}>
                        Quick Leasing Co.,Ltd.@2018 Powered  by NM
                    </Text>
                </View>
                </View>
            )

            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c0392b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: DEVICE_WIDTH * 0.55,
        height: DEVICE_HEIGHT * 0.1,
        resizeMode: 'contain'
    },
    logoContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    powerby: {
        color: '#FFF',
        paddingBottom: 10
    }

});
