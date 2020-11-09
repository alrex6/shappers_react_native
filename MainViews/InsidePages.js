import React, {useState, useContext} from 'react'; 
import {GlobalContext} from '../Context/GlobalProvider';
import ProfilePage from '../Views/ProfilePage';
import MessagesPage from '../Views/MessagesPage';
import SideNav from '../Components/SideNav';
import TopNav from '../Components/TopNav';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
// import { Button, FormControl, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;
export default function InsidePages() {
    const {userData, globals, appData} = useContext(GlobalContext);
    
    let page = <ProfilePage/>
    if(userData.currentPage.back == 'Home'){
        // page = 
    }else if(userData.currentPage.back == 'Messages'){
        page = <MessagesPage/>
    }
   
    return (
        // <Navbar bg="light" expand="lg">
        //     <Navbar.Brand href="#home">{appData.name}</Navbar.Brand>
        //         <Navbar.Toggle onClick={() => {setToggle(!toggle)}} />
        //         <Navbar.Collapse>
        //             {nav}
        //             {/* <Form inline>
        //             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        //             <Button variant="outline-success">Search</Button>
        //             </Form> */}
        //         </Navbar.Collapse>
        //     </Navbar>
        <View style={[s.containerFluid, styles.view]}>
            <TopNav/>
            {page}
            {/* <div style={{display: 'flex', flexDirection: 'row', padding: 100}}>
                <div style={{flex: 1}} className='bg-secondary'>
                    <SideNav/> 
                </div>
                <div style={{flex: 3}}>
                    {page}
                </div>
            </div> */}
            
            
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
        
        
        flex: 1
		
	}
});