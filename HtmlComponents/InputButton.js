import React, {useState, useContext} from 'react'; 
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';


const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;


export default function InputButton({btnText, onPressFunc, styleBtn}) {
    
    return (
        <TouchableOpacity style={styleBtn} onPress={onPressFunc}>
            <Text style={[s.text, styles.text]}>{btnText}</Text>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
	textInput: {
		marginBottom: 5
	},
	text: {
        // paddingBottom: 10,
		fontSize: 15,
        // fontWeight: 'bold',
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