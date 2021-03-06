import React, {useState, useContext} from 'react'; 
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import {GlobalContext} from '../Context/GlobalProvider';
import Login from '../Components/Login';
import Register from '../Components/Register';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;
export default function LoginPage() {
    const {userData, globals, getUserData} = useContext(GlobalContext);
    var div = <Login />
    if(userData.registering){
        div = <Register />
    }
    return (
        <View style={[s.containerFluid, styles.view]}>
            {div}   
            
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
