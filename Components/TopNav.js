import Axios from 'axios';
import React, {useState, useContext} from 'react'; 
import {GlobalContext} from '../Context/GlobalProvider';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import InputButton from '../HtmlComponents/InputButton';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;

export default function TopNav() {
    const {userData, globals, changePage, appData, logout} = useContext(GlobalContext);
    const [toggle, setToggle] = useState(false);
    var nav = null;

    function navPage(page){
        setToggle(false);
        changePage(page);
    }

    if(toggle){
        nav = <View style={[styles]}>
            <InputButton styleBtn={[s.btnLink, s.bgSecondary, s.py2, styles.navBtns]} onPressFunc={() => {navPage('Home')}} btnText='Home'></InputButton>
            <InputButton styleBtn={[s.btnLink, s.bgSecondary, s.py2, styles.navBtns]} onPressFunc={() => {navPage('Profile')}} btnText='Profile'></InputButton>
            <InputButton styleBtn={[s.btnLink, s.bgSecondary, s.py2, styles.navBtns]} onPressFunc={() => {navPage('Messages')}} btnText='Message'></InputButton>
            <InputButton styleBtn={[s.btnLink, s.bgSecondary, s.py2, styles.navBtns]} onPressFunc={logout} btnText='Logout'></InputButton>
            
        </View>;        
    }
    
    
    // console.log('user inputs: ', userInputs);
    return (
        <View style={[s.navbar, s.containerFluid]} >
            <View style={[styles.menuView, s.bgSuccess, s.p2]}>
                <InputButton styleBtn={[s.btn, s.btnSecondary, styles.button]} onPressFunc={() => {setToggle(!toggle)}} btnText='M'></InputButton>
            </View>
            
            
            {nav}
            
            
               
        </View>
        // <Navbar bg="light" expand="lg">
        //     <Navbar.Brand href="#home">{appData.name}</Navbar.Brand>
        //     <Navbar.Toggle onClick={() => {setToggle(!toggle)}} />
        //     <Navbar.Collapse>
        //         {nav}
                
        //     </Navbar.Collapse>
        // </Navbar>
    );
}

const styles = StyleSheet.create({
	nav: {
        display: 'flex',
        flexDirection: 'row',
        
	},
	text: {
        // paddingBottom: 10,
		fontSize: 20,
        // fontWeight: 'bold',
        // marginBottom: 5,
        // backgroundColor: 'blue'
		textAlign: 'left',
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
		width: 80,
        // marginBottom: 1,
        // padding: 5
        // backgroundColor: 'blue',
        // borderBottomWidth: 1,
        // borderBottomColor: 'black'
	},
	toggle: {
		
		textAlign: 'right',
    },
    menuView: {
		alignItems: 'flex-end',
		textAlign: 'right',
    },
    navBtns: {
        marginBottom: 1,
        alignItems: 'flex-start',
        paddingLeft: 10
    }
});

 