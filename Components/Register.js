import Axios from 'axios';
import React, {useState, useContext, useRef} from 'react'; 
import {GlobalContext} from '../Context/GlobalProvider';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import BootstrapStyleSheet from 'react-native-bootstrap-styles';
// import { Button, FormControl } from 'react-bootstrap';
// import Samples from '../Samples';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;

export default function Register() {
    console.log('REGISTER');
    const {userData, globals, getUserData, forceUpdate} = useContext(GlobalContext);
    const [userInputs, setUserInputs] = useState({
        username: '',
        password: '',
        email: '',
        confirmingRegister: false,
        emailCode: '',
        code: ''   
    })

    async function register(){
        console.log('register');
        // var response = null;
        console.log('user inputs: ', userInputs);
        var options = {
            method: 'post',
            url: globals.varNames.apiPath + 'user/register',
            data: {
                username: userInputs.username,
                password: userInputs.password,
                email: userInputs.email
            }
        }
        // if(userData.usingSample){
            
        //     response = Samples.register(options);
        // }else{
            
        // }
        var response = await Axios(options);
        console.log('response: ', response);
        if(response.data.status == 1){
            userInputs.code = response.data.payload.code;
            userInputs.confirmingRegister = true;
            setUserInputs({...userInputs});
        }
    }

    async function confirmRegister(){
        console.log('register');
        // var response = null;
        var options = {
            method: 'post',
            url: globals.varNames.apiPath + 'user/confirmRegister',
            data: {
                code: userInputs.code,
                emailCode: userInputs.emailCode,
                email: userInputs.email
            }
        }
        // if(userData.usingSample){
            
        //     response = Samples.confirmRegister(options);
        // }else{
            
        // }
        var response = await Axios(options);
        console.log('response: ', response);
        if(response.data.status == 1){
            // userData.token = response.data.payload;

            // AsyncStorage.setItem('userData', JSON.stringify({token: userData.token}));
            getUserData(response.data.payload);    
        }
    }
    var div = <View style={[s.body]}>
        
        <TextInput value={userInputs.username} style={[s.formControl, styles.textInput]} placeholder='Username' onChangeText={(e) => {setUserInputs({...userInputs, username: e})}}></TextInput>
        <TextInput value={userInputs.password} style={[s.formControl, styles.textInput]} placeholder='Password' onChangeText={(e) => {setUserInputs({...userInputs, password: e})}}></TextInput>
        <TextInput value={userInputs.email} style={[s.formControl, styles.textInput]} placeholder='Email' onChangeText={(e) => {setUserInputs({...userInputs, email: e})}}></TextInput>
        <TouchableOpacity onPress={register} style={[s.btn, s.btnPrimary, s.mt2]}>
            <Text style={[s.text, s.textLight, styles.text]}>Register</Text>
        </TouchableOpacity>
        
    </View>
    // var div = <div>
    //     <FormControl
    //         placeholder="Username"
    //         aria-label="Username"
    //         aria-describedby="basic-addon1"
    //         value={userInputs.username}
    //         onChange={(e) => {userInputs.username = e.target.value; setUserInputs({...userInputs})}}
    //     />
    //     <FormControl
    //         placeholder="Password"
    //         aria-label="Username"
    //         aria-describedby="basic-addon1"
    //         value={userInputs.password}
    //         onChange={(e) => {setUserInputs({...userInputs, password: e.target.value})}}
    //     />
    //     <FormControl
    //         placeholder="Email"
    //         aria-label="Username"
    //         aria-describedby="basic-addon1"
    //         value={userInputs.email}
    //         onChange={(e) => {setUserInputs({...userInputs, email: e.target.value})}}
    //     />
    //     <Button onClick={register} variant="primary">Register</Button>
    // </div>;

    if(userInputs.confirmingRegister){
        div = <View style={[s.body]}>
        
            <TextInput value={userInputs.emailCode} style={[s.formControl, styles.textInput]} placeholder='Verification Code' onChangeText={(e) => {setUserInputs({...userInputs, emailCode: e})}}></TextInput>
            
            <TouchableOpacity style={[s.btn, s.btnPrimary, s.mt2]}>
                <Text onClick={confirmRegister} style={[s.text, s.textLight, styles.text]}>Confirm</Text>
            </TouchableOpacity>
            
        </View>
    }
    
    return (
        <View style={[styles.view, s.containerFluid]}>
            
            
            {div}
            <TouchableOpacity style={[s.mt2]}>
                <Text onPress={() => {userData.registering = false; forceUpdate()}} style={[s.text, s.textPrimary, styles.link]}>Login</Text>
            </TouchableOpacity>
            
        </View>
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
	view: {
        // height: 200,
        flex: 1
		// width: 128,
	}
});



