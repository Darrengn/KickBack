import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, SafeAreaView, StatusBar } from 'react-native';

const OnboardingScreen = ({navigation}) => {
	const [email, onChangeEmail] = React.useState('');
		const [password, onChangePassword] = React.useState('');
		return (
			<View style={{flex: 1, backgroundColor: 'black'}}>
				<SafeAreaView>
					<StatusBar barStyle="light-content"/>
				</SafeAreaView>

				<View style = {styles.container}>
					
					<View style = {{flex:'10'}}></View>
					
					<View style = {{flex: '35%', borderWidth: 1, backgroundColor: 'white', width:300, justifyContent:'center'}}>
						<Button style ={styles.input}
							title="Logo here"
							color='black'
							onPress={() => alert('Login')}
						/>
					</View>

					<View style = {{flex: '10%', justifyContent: 'center'}}>
						<Text style = {{fontSize: 40, color: 'white'}}>Kickback</Text>
					</View>

					<View style = {{flex: '5%',}}>
						<Text style = {{fontSize: 14, color: '#79abe0'}}>LET'S GET THE PARTY STARTED</Text>
					</View>

					<View style = {{flex:'2%'}}></View>

					<TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
						<View style = {{flex: '5%', borderWidth: 2, borderRadius: 50, width:300, 
							justifyContent:'center', alignItems:'center', backgroundColor:'#96c3f2'}}>
							
							<Text style = {{fontSize: 20, fontWeight:'bold'}}> Login </Text>
						</View>
					</TouchableWithoutFeedback>

					<View style = {{flex:'5%'}}></View>
					
					<TouchableWithoutFeedback onPress={() => navigation.navigate("Signup")}>
						<View style = {{flex: '5%', borderWidth: 2, borderRadius: 50, width:300, 
							justifyContent:'center', alignItems:'center',borderColor:'#96c3f2'}}>
							<Text style = {{fontSize: 20, color: 'white',fontWeight:'bold'}}> Create Account </Text>
						</View>
					</TouchableWithoutFeedback>
										
					<View style = {{flex:'23'}}></View>
				</View>
			</View>
		);
}

export default OnboardingScreen;

const styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
		},
		input: {
				height: 40,
				width: 300,
				margin: 12,
				borderWidth: 1,
				padding: 10,
				textAlign: 'center',
			},
	});
	