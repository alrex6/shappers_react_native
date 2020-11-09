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
// import { Button } from 'react-bootstrap';

export default function MessageHeaders() {
    console.log('MESSAGE HEADERS');
    const {userData, globals, apiCall, messageData, forceUpdate, getMsgs} = useContext(GlobalContext);
    
    
    
    console.log('msg headers:', messageData.msgHeaders);

    async function getMsgHeaders(){
        let response = await apiCall(globals.varNames.blagsApiPath + 'message/getMsgHeaders', {startPoint: 0});
        // console.log('response: ', response);
        if(response.status == 1){
            
            messageData.msgHeaders = response.payload;
            console.log('message headers: ', messageData.msgHeaders);
            forceUpdate();
        }     
    }

    useEffect(() => {
        // Update the document title using the browser API
        getMsgHeaders();
    }, []);
    
    
    // console.log('user inputs: ', userInputs);
    return (
        <View>
            <View style={{alignItems: 'flex-end'}}>
                <InputButton styleBtn={[s.btn, s.btnOutlinePrimary, styles.button]} btnText='New' onPressFunc={()=>{userData.showingModal = true; forceUpdate()}}></InputButton>
                {/* <TouchableOpacity style={[s.btn, s.btnOutlinePrimary]} onPress={()=>{userData.showingModal = true; forceUpdate()}}><Text style={[styles.buttonText]}>New Message</Text></TouchableOpacity> */}
                {/* <button >New Message</button> */}
            </View>
            
            {messageData.msgHeaders.map((msgHeader) => {
                return <TouchableOpacity style={[styles.msgHeaderTouchable]} onPress={() => {getMsgs(msgHeader.id, 0)}} key={msgHeader.id}><Text>{msgHeader.receivername}</Text></TouchableOpacity>
                
            })}
            
            
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
		
        
        width: 125
    },
    buttonText: {
        fontSize: 15,
        padding: 5,
		textAlign: 'center'
	},
	msgHeaderTouchable: {
		padding: 15,
        borderWidth: 0.1,
        margin: 1
    
	}
});

