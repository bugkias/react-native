import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Dimensions, 
    TouchableOpacity, 
    WebView, 
    Linking, 
    TextInput,
    KeyboardAvoidingView, 
    Keyboard } from 'react-native';
  
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window')
const DEVICE_HEIGHT = height
const DEVICE_WIDTH = width
const RADIUS = 10
const inputHeight = 40

const Container = ({ children }) => (
  <View style = {styles.container}>

  <Image source={require('../images/bg2.png')} style={styles.backgroundImage} />
    {children}
  </View>
)

const Logo = (props) => (
  <View style={styles.logoContainer}>
    <Image source={require('../images/quickapplogo.png')} style={styles.applogo} />
    <Text style={styles.textVersion}>
      v{props.version}
    </Text>
  </View>

)


export default class Login extends React.Component {
  
  constructor(props){
		super(props)
		this.state={
			userEmail:'',
			userPassword:''
		}
	}
	
	login = () =>{
		const {userEmail,userPassword} = this.state;
		//here we will send our data to server with fetch
		
		fetch('http://172.16.9.64/app/applogin.php',{
			method:'POST',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: userEmail,
				password: userPassword
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
				 //alert("Successfully Login");
				 this.props.navigation.navigate("CustomerList");
			 }else{
				 alert("Cannot login");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		
		
		Keyboard.dismiss();
	}
  

  handleContact = () => {
    this.props.navigation.navigate("SearchScreen");
  }

  openURL = () => {
    this.props.navigation.navigate("Web");
  }


  render() {
    const { children } = this.props
    // const inputContainerStyle = [styles.inputContainer]
    //   if (this.state.isFocused) {
    //     inputContainerStyle.push({
    //       borderBottomColor: 'red'
    //     })
    //   }
    
    return (
      
      <Container>
        
        <Logo version="0.1"/>
        <KeyboardAvoidingView behavior="padding">
        <View style={styles.loginContainer}>
            <View style={styles.loginContent}>

                <View style={styles.inputLoginContainer}>    
                  <View style={{flexDirection: 'row'}}>
                    <TextInput
                    placeholder="ระบุรหัสผู้ใช้งาน"
                    placeholderTextColor='#BDBDBD'
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    style={{
                      width:200, 
                      margin:10, 
                      color: '#FFF', 
                      borderBottomColor: '#BDBDBD',
                      borderBottomWidth: 1}}
                      onChangeText={userEmail => this.setState({userEmail})}
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TextInput
                    placeholder="ระบุรหัสผ่าน"
                    placeholderTextColor='#BDBDBD'
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    returnKeyType="go"
                    style={{
                      width:200, 
                      margin:10,
                      color: '#FFF', 
                      borderBottomColor: '#BDBDBD',
                      borderBottomWidth: 1}}
                      onChangeText={userPassword => this.setState({userPassword})}
                    />
                  </View>  
                    <TouchableOpacity
                    onPress={this.login}
                    style={{width:200,padding:10,
                    backgroundColor:'#900',
                    alignItems:'center', 
                    borderTopLeftRadius:RADIUS,
                    borderTopRightRadius:RADIUS,
                    borderBottomLeftRadius:RADIUS,
                    borderBottomRightRadius:RADIUS}}
                    >
                   
                    <Text 
                    style={{
                      color:'#fff',
                      fontSize: 16,
                      fontWeight:'200'
                    }}
                    >
                     เข้าสู่ระบบ
                    </Text>
                    </TouchableOpacity>
                
                </View>
             
               

            </View>

            <View style={styles.loginAction}>
              <TouchableOpacity 
                onPress = {this.openURL}
                style={styles.actionBtn}
              >
                  <Image source={require('../images/earth-globe.png')} style={styles.actionIcon} />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={this.handleContact}
                style={styles.actionBtn}
              >
                  <Image source={require('../images/telephone.png')} style={styles.actionIcon} />
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={this.handlePress}
                style={styles.actionBtn}
              >
                  <Image source={require('../images/map-marker.png')} style={styles.actionIcon} />
              </TouchableOpacity>

            </View>
          </View>
        </KeyboardAvoidingView>       
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  applogo: {
    width: DEVICE_WIDTH * 0.55,
    height: DEVICE_HEIGHT * 0.1,
    resizeMode: 'contain'
  },
  backgroundImage: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: DEVICE_WIDTH,
      height: DEVICE_HEIGHT,
      resizeMode: 'cover'
  },
  logoContainer: {
    marginTop: 15,
    flexDirection: 'row'
  },
  textVersion: {
    color: '#c0392b',
    fontSize: 9,
    marginTop: DEVICE_HEIGHT * 0.1 /2,
    backgroundColor: 'transparent',
    marginLeft: 9
  },
  loginContainer: {
    height: height * 0.4,
    width: width * 0.8,
    borderRadius: RADIUS
  },
  loginContent: {
    height: (height * 0.4) * 0.8,
    backgroundColor: 'rgba(231, 76, 60,0.5)',
    width: width * 0.8,
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS
  },
  loginAction: {
    height: (height * 0.4) * 0.2,
    width: width * 0.8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  actionBtn: {


  },
  actionIcon: {
    height: 32,
    width: 32,
    resizeMode: 'contain'
  },
  loginInputContainer: {
    width: '90%',
    height: inputHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center' 
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    marginLeft: 20
  },

  username: {
    flex: 1,
    height: inputHeight,
    color: '#fff'
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: RADIUS,
    backgroundColor: '#c0392b',
    paddingTop: 40,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputLoginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
   
  }
});