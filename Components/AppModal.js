import Axios from 'axios';
import React, {useState, useContext, useRef} from 'react'; 
import {GlobalContext} from '../Context/GlobalProvider';
import NewMsgModal from './NewMsgModal';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';


const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;


export default function AppModal() {
    console.log('AppModal');
    const {userData, globals, getUserData, forceUpdate, appModalData} = useContext(GlobalContext);
    

    

    function okClicked(){
        
        
        userData.showingModal = false;
        forceUpdate();
    }
    var modalPage = <NewMsgModal okClicked={okClicked}/>
    if(appModalData.page == 'newMsg'){

    }
    
    return (
        <View style={[s.modal, s.bgWhite, styles.modal]}>
            <View style={[s.modalDialog]}>

                <View style={[s.modalHeader]}>
                    <TouchableOpacity onPress={okClicked} style={[s.btn, s.btnOutlinePrimary]}>
                        <Text>Close</Text>
                    </TouchableOpacity>   
                </View>
                <View style={[s.modalBody, s.bgSecondary]}>
                    {modalPage}
                </View>
                {/* <View style={[s.modalFooter, s.bgPrimary]}>
                
                </View>  */}
                         
            </View> 
            
            {/* <View style={[s.modalDialog]}>
                  
            </View> */}
            
        </View>
        // <Modal.Dialog>
        //     <Modal.Header closeButton>
        //         <Modal.Title>Modal title</Modal.Title>
        //     </Modal.Header>

        //     <Modal.Body>
        //         <p>Modal body text goes here.</p>
        //     </Modal.Body>

        //     <Modal.Footer>
        //         <Button variant="secondary">Close</Button>
        //         <Button variant="primary">Save changes</Button>
        //     </Modal.Footer>
        // </Modal.Dialog>
       
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






