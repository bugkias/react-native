import React, { Component } from 'react';

import { StyleSheet, WebView, Platform} from 'react-native';

export default class Web extends Component {

     render() {
       
       return (
    
         <WebView 
         style={styles.WebViewStyle} 
         source={{uri: 'http://172.16.9.64/app/index.php'}} 
         javaScriptEnabled={true}
         domStorageEnabled={true}  />
   
       );
     }
   }
   


const styles = StyleSheet.create(
{

WebViewStyle:
{
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   marginTop: (Platform.OS) === 'ios' ? 20 : 0
}
});