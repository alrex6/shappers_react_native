import React, {useState, useContext, useEffect} from 'react'; 
import {GlobalContext} from '../Context/GlobalProvider';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import InsidePages from './InsidePages';
import OutsidePages from './OutsidePages';
import AppModal from '../Components/AppModal';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;

export default function Pages() {
    console.log('PAGES');
    const {userData, globals, getUserData} = useContext(GlobalContext);
    
	if(!userData.production){
		globals.varNames.apiPath = globals.varNames.devApi;
    }

    const login = async () => {
        console.log('login');
        var options = {
            method: 'post',
            url: globals.varNames.apiPath + 'user/login',
            data: {
                username: 'he',
                password: 'ha',
                
            }
        }
        var response = await Axios(options);
    }
    // storeData = async () => {
    //     try {
    //       await AsyncStorage.setItem(
    //         '@MySuperStore:key',
    //         'I like to save it.'
    //       );
    //     } catch (error) {
    //       // Error saving data
    //     }
    // };
    async function getUserToken(){
        console.log('get user token');
        console.log('asyn storage: ', AsyncStorage);
        let value = await AsyncStorage.getItem('userData');
        let userDataStorage = JSON.parse(value); 
        
        if(userDataStorage != null){
            console.log('userdata storage: ', userDataStorage);
            // userData.token = userDataStorage.token;
            getUserData(userDataStorage.token);
            
            
            
        }   
    }

    useEffect(() => {
        // Update the document title using the browser API
        
        getUserToken();
        // await getUserToken(userData, getUserData);
    }, []);
    
    let page = <OutsidePages/>
    if(userData.loggedIn){
        page = <InsidePages/>
    }
    let appModal = null;
    if(userData.showingModal){
        appModal = <AppModal/>
    }
    return (
        <View style={[styles.container, s.containerFluid]}>
			
			
			{page}
            {appModal}
		</View>

        // <div>
        //     {/* {appModal} */}
        //     {/* {page} */}
        // </div>
    );
}

const styles = StyleSheet.create({
	container: {
        // flexDirection: 'column',
        // height: '100%',
        flex: 1,
        paddingTop: 70
        // backgroundColor: 'blue'
		// alignItems: 'center',
		// justifyContent: 'center',
        
	},
	paragraph: {
		margin: 24,
		marginTop: 0,
		fontSize: 14,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	button: {
		fontSize: 30,
		backgroundColor: 'blue'
	},
	footer: {
		height: 50,
		// textAlign: "center"
    },
    footerText: {
		// height: 50,
		textAlign: "center"
	}
});

// export default Pages;