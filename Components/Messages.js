import Axios from 'axios';
import React, {useState, useContext, useEffect} from 'react'; 
import {GlobalContext} from '../Context/GlobalProvider';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import InputButton from '../HtmlComponents/InputButton';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;
// import TextInput from '../HtmlComponents/TextInput';
// import Samples from '../Samples';
// import { Button, FormControl } from 'react-bootstrap';

export default function Messages() {
    console.log('MESSAGES');
    const {userData, globals, getMsgs, messageData, forceUpdate, apiCall} = useContext(GlobalContext);
    
    const [msgInputs, setMsgInputs] = useState({
        
        msg: ''
    });
    
    console.log('msg headers:', messageData.msgHeaders);
    // useEffect(async () => {
    //     // Update the document title using the browser API
    //     getMsgs();
    // }, []);
    function backToMsgHeaders(){
        userData.viewingMsgs = false; 
        forceUpdate();
    }

    function replyMsg(){
        // var options = {
        //     url: globals.varNames.apiPath + 'message/replyMessage',
        //     data: 
        // }
        var data = {
            msgHeaderID: messageData.headerIDViewed,
            post: msgInputs.msg
        }
        // console.log('options: ', options);
        apiCall(globals.varNames.apiPath + 'message/replyMessage', data);
        
    }
    // console.log('user inputs: ', userInputs);
    return (
        <View className="">
            <View>
                <InputButton styleBtn={[s.btn, s.btnOutlinePrimary, styles.button]} onPressFunc={backToMsgHeaders} btnText='Back'></InputButton>
                {/* <TouchableOpacity onPress={backToMsgHeaders}>
                    <Text>Back</Text>
                </TouchableOpacity> */}
               
            </View>
            
            {messageData.msgs.map((msg) => {
                return <View style={[styles.msgView]} key={msg.id}><Text>{msg.message}</Text></View>
                
            })}
            
            {/* <FormControl
                placeholder="Message"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {setMsgInputs({...msgInputs, msg: e.target.value})}}
            /> */}
            <TextInput style={[s.formControl, styles.textInput]} placeholder='Enter message...' onChangeText={(e) => {setMsgInputs({...msgInputs, msg: e})}}></TextInput>
            <TouchableOpacity onPress={replyMsg}>
                <Text>Reply</Text>
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
    msgView: {
        // paddingBottom: 10,
		padding: 15,
        // fontWeight: 'bold',
        // marginBottom: 5,
        // backgroundColor: 'blue'
		// textAlign: 'right',
	},
	button: {
		fontSize: 20,
		// backgroundColor: 'blue'
    },
    buttonText: {
        fontSize: 15,
        padding: 5,
		textAlign: 'center'
	},
	logo: {
		height: 128,
		width: 128,
	}
});


