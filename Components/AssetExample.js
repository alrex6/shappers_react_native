// import * as React from 'react';
import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AssetExample() {

	const login = () => {
		console.log('login');
	}
  	return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>
				Local files and assets can be imported by dragging and dropping them into the editor
			</Text>
			<TouchableOpacity onPress={login}><Text style={styles.button}>
				Login Button
			</Text></TouchableOpacity>
			<Image style={styles.logo} source={require('../assets/snack-icon.png')} />
		</View>
  	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 24,
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
	logo: {
		height: 128,
		width: 128,
	}
});
