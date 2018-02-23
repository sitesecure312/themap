
'use strict'

const React = require('react-native')
const {StyleSheet, Dimensions} = React
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

module.exports = StyleSheet.create({
	loginButton: {
		backgroundColor: 'transparent',
	    paddingLeft: 40,
	    paddingRight: 40,
	    paddingTop: 10,
	    paddingBottom: 10,
	    borderColor: '#7e9199',
	    borderWidth: 1,
		width: deviceWidth/2.5,
		height: 46,
		marginTop: 20,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	signupButton: {
		backgroundColor: 'transparent',
	    paddingLeft: 40,
	    paddingRight: 40,
	    paddingTop: 10,
	    paddingBottom: 10,
	    borderColor: '#7e9199',
	    borderWidth: 1,
		width: deviceWidth/2.5,
		height: 46,
		marginTop: 20,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	createAccountButton: {
		backgroundColor: 'transparent',
	    paddingLeft: 0,
	    paddingRight: 0,
	    paddingTop: 10,
	    paddingBottom: 10,
	    borderColor: '#7e9199',
	    borderWidth: 1,
		width: deviceWidth/2.5,
		height: 46,
		marginTop: 20,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	buttonText: {
		color: '#7e9199',
		alignSelf: 'center',
		fontSize: 16,
		fontWeight: '600'
	}
});
