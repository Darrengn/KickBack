//replaced with code from DylanLee_Signin branch
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, StatusBar,TouchableHighlight} from 'react-native';
import { auth } from '../firebase';

const LoginScreen = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with ' + user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <View style={{flex: 1, backgroundColor:'#EDF6F9'}}>
            
            <SafeAreaView>
                <StatusBar barStyle="dark-content"/>
            </SafeAreaView>

            <View style = {{flex: '4%', alignItems: 'flex-start', justifyContent: 'flex-end',}}>
                <Button
                    title="  Back"
                    onPress={() => navigation.navigate("Onboarding")}
                />
            </View>
            <View style = {{flex: '96%'}}>
                <View style = {[styles.container,{flex:12,}]}>
                    <View style = {[styles.container, {flex: 10, justifyContent: 'flex-end'}]}>
                        <Text style = {{fontSize: 40,}}>Kickback</Text>
                        <TextInput 
                            style={styles.input} 
                            onChangeText={onChangeEmail} 
                            value={email}
                            placeholder='Email'
                        />
                        <TextInput 
                            style={styles.input} 
                            onChangeText={onChangePassword} 
                            value={password}
                            placeholder='Password'
                            secureTextEntry
                        />
                        <Text style = {{fontSize: 25}}>OR</Text>
                    </View>
                    <View style = {{flex: 2, padding: 10}}>
                        <Button style ={styles.input}
                            title="Sign in with Google"
                            onPress={() => alert('sign in with google')}
                        />
                        <Button style ={styles.input}
                        title="Continue with Facebook"
                        onPress={() => alert('sign in with facebook')}
                        />
                    </View>
                    <TouchableHighlight onPress={handleLogin}>
                        <View style = {{flex: 1, borderWidth: 1, backgroundColor: 'black', width:300, justifyContent:'center', 
                            alignItems:'center', borderRadius:10}}>
                            
                            <Text style={{color: 'white', fontSize: 20}}>Login</Text>
                        </View>
                    </TouchableHighlight>
                    <View style= {[styles.input,{borderWidth: 0,}]}>
                        <TouchableOpacity onPress={() => alert('Move to forgot password')}>
                            <Text style= {{textAlign:'right', textDecorationLine:'underline'}}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flex: 7}}></View>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

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
        borderWidth: 2,
        padding: 10,
        fontSize:14,
        borderRadius:5,
        shadowOffset: {
            width: 5,
            height: 5,
          },
        shadowOpacity:0.1,
      },
  });
