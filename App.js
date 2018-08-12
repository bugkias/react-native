import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/pages/Login';
import Web from './src/components/pages/Web';
import CustomerList from './src/components/pages/CustomerList';


const Application = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Web: {
    screen: Web,
    navigationOptions: {
      title: 'เข้าสู่ระบบ'
    }
  },
  CustomerList: {
    screen: CustomerList,
    navigationOptions: {
      title: 'รายการลูกค้า'
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Application />
    );
  }
}