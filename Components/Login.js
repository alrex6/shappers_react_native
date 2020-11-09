import Axios from 'axios';
import React, {useState, useContext, useRef} from 'react'; 

import {GlobalContext} from '../Context/GlobalProvider';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';


const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;
// import TextInput from '../HtmlComponents/TextInput';
// import Samples from '../Samples';
// import { Button, FormControl } from 'react-bootstrap';
// import FacebookLogin from 'react-facebook-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import { render } from 'react-dom';
// import { FacebookProvider, LoginButton } from 'react-facebook';

export default function Login() {
    console.log('LOGIN');
    const {userData, globals, getUserData, forceUpdate} = useContext(GlobalContext);
    // const fbRef = useRef(null);
    // console.log('context: ', context);
    // const [amount, setAmount] = useState(5);
    const [userInputs, setUserInputs] = useState({
        username: '',
        password: ''
    });


    async function login(){
        console.log('login');
        // var response = null;
        var options = {
            method: 'post',
            url: globals.varNames.apiPath + 'user/login',
            data: {
                username: userInputs.username,
                password: userInputs.password,
                
            }
        }
        var response = await Axios(options);
        // if(userData.usingSample){
            
        //     response = Samples.register(options);
        // }else{
        //     response = 
        // }
        console.log('response: ', response);
        if(response.data.status == 1){
            // userData.token = response.data.payload;
            // AsyncStorage.setItem('userData', JSON.stringify({token: userData.token}));
            getUserData(response.data.payload);    
        }
    }
    
    return (
        <View style={[s.body]}>
            {/* <Text style={[s.text, s.textPrimary, styles.text]}>
				Login
			</Text> */}
            
            <TextInput style={[s.formControl, styles.textInput]} placeholder='Username' onChangeText={(e) => {setUserInputs({...userInputs, username: e})}}></TextInput>
            <TextInput style={[s.formControl]} placeholder='Password' onChangeText={(e) => {setUserInputs({...userInputs, password: e})}}></TextInput>
            <TouchableOpacity onPress={login} style={[s.btn, s.btnPrimary, s.mt2]}>
                <Text style={[s.text, s.textLight, styles.text]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[s.mt2]}>
                <Text onPress={() => {userData.registering = true; forceUpdate()}} style={[s.text, s.textPrimary, styles.link]}>Register</Text>
            </TouchableOpacity>
        </View>
        // <div style={{marginBottom: 50}} >
            
            
            
        //     <FormControl
        //         placeholder="Username"
        //         aria-label="Username"
        //         aria-describedby="basic-addon1"
        //         onChange={(e) => {setUserInputs({...userInputs, username: e.target.value})}}
        //     />
        //     <FormControl
        //         placeholder="Password"
        //         aria-label="Username"
        //         aria-describedby="basic-addon1"
        //         onChange={(e) => {setUserInputs({...userInputs, password: e.target.value})}}
        //     />
        //     <Button onClick={login} variant="primary">Login</Button>
        //     <Button onClick={() => {userData.registering = true; forceUpdate()}} variant="link">Register</Button>
        // </div>
    );
}



const styles = StyleSheet.create({
	textInput: {
		marginBottom: 5
	},
	text: {
        // paddingBottom: 10,
		fontSize: 15,
        fontWeight: 'bold',
        // marginBottom: 5,
        // backgroundColor: 'blue'
		textAlign: 'center',
    },
    link: {
        // paddingBottom: 10,
		fontSize: 15,
        // fontWeight: 'bold',
        // marginBottom: 5,
        // backgroundColor: 'blue'
		textAlign: 'right',
	},
	button: {
		fontSize: 30,
		backgroundColor: 'blue'
	},
	logo: {
		height: 128,
		width: 128,
	}
});