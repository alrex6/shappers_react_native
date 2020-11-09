import React, {useState, useContext} from 'react'; 
import {GlobalContext} from '../Context/GlobalProvider';
import ProfileDiv from '../Components/ProfileDiv';
import { View } from 'react-native';

function ProfilePage() {
 
    return (
        <View>
            <ProfileDiv/>
        </View>
    );
}

// function login(){
//     console.log('login');
// }

export default ProfilePage;