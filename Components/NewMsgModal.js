import Axios from 'axios';
import React, {useState, useContext, useRef} from 'react'; 
import {GlobalContext} from '../Context/GlobalProvider';

import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import InputText from '../HtmlComponents/InputText';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;


export default function NewMsgModal({okClicked}) {
    console.log('NewMsgModal');
    const {userData, globals, getUserData, forceUpdate, apiCall} = useContext(GlobalContext);
    // const fbRef = useRef(null);
    // console.log('context: ', context);
    // const [amount, setAmount] = useState(5);
    const [msgInputs, setMsgInputs] = useState({
        username: '',
        msg: ''
    });

    
    function sendMsg(){
        // newMsg(msgInputs.username, msgInputs.msg);
        // console.log('get user data');
        // console.log('api path: ', state.globals.varNames.apiPath);
        // console.log('token: ', state.userData.token);
        let data = {
            username: msgInputs.username,
            message: msgInputs.msg
        }

        apiCall(globals.varNames.blagsApiPath + 'message/newMessage', data);
        
        okClicked();
    }
    
    
    return (
        <View style={{marginBottom: 50}} >
            
            
            
            {/* <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {setMsgInputs({...msgInputs, username: e.target.value})}}
            />
            <FormControl
                placeholder="Message"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {setMsgInputs({...msgInputs, msg: e.target.value})}}
            />
            <Button onClick={sendMsg} variant="primary">Ok</Button> */}
            <InputText placeholder='Username' onChangeFunc={(e) => {setMsgInputs({...msgInputs, username: e})}}></InputText>
            <InputText placeholder='Message' onChangeFunc={(e) => {setMsgInputs({...msgInputs, msg: e})}}></InputText>
            <TouchableOpacity onPress={sendMsg} style={[s.btn, s.btnPrimary, s.mt2]}>
                <Text style={[s.text, s.textLight, styles.text]}>Send</Text>
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
	modal: {
        // position: 'fixed'
        borderRadius: 1,
        borderWidth: 1,
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        // elevation: 5
		
	}
});




 