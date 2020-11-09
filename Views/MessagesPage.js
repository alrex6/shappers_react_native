import React, {useState, useContext} from 'react'; 
import {GlobalContext} from '../Context/GlobalProvider';
import MessageHeaders from '../Components/MessageHeaders';
import Messages from '../Components/Messages';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;

export default function MessagesPage() {
    console.log('MESSAGES PAGE');
    const {userData} = useContext(GlobalContext);
    let page = <MessageHeaders/>;
    if(userData.viewingMsgs){
        page = <Messages/>;
    }
    return (
        <View style={[s.containerFluid, styles.view]}>
            
            {page}
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
		height: 200,
		
	}
});


