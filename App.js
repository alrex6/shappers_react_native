import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {GlobalProvider} from './Context/GlobalProvider';
import Pages from './MainViews/Pages';
// You can import from local files


// or any pure javascript modules available in npm


export default function App() {
     return (
          <GlobalProvider>
               <Pages/>    
          </GlobalProvider>
     
     );
}

