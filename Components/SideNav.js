import Axios from 'axios';
import React, {useState, useContext} from 'react'; 
import {GlobalContext} from '../Context/GlobalProvider';
// import { Nav } from 'react-bootstrap';

function SideNav() {
    const {userData, globals, changePage, logout} = useContext(GlobalContext);
    

    
    
    // console.log('user inputs: ', userInputs);
    return (
        
        <Nav className="flex-column bg-light">
            <Nav.Link onClick={() => {changePage('Home')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {changePage('Profile')}}>Profile</Nav.Link>
            <Nav.Link onClick={() => {changePage('Messages')}}>Messages</Nav.Link>
            
        </Nav>
        
    );
}

// function login(){
//     console.log('login');
// }

export default SideNav;