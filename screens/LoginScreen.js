import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const LoginScreen = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
        <View style={{flex: 1}}>
            <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'black'}}>
                <Button
                    title="  Back"
                    onPress={() => navigation.navigate("Onboarding")}
                />
            </View>
            <View style = {[styles.container,{flex:12}]}>
                <View style = {[styles.container, {flex: 10, justifyContent: 'flex-end'}]}>
                    <Text style = {{fontSize: 40}}>Kickback</Text>
                    <TextInput style={styles.input} onChangeText={onChangeEmail} value={email}>
                        Email Address
                    </TextInput>
                    <TextInput style={styles.input} onChangeText={onChangePassword} value={password}>
                        Password
                    </TextInput>
                    <Text style = {{fontSize: 25}}>OR</Text>
                </View>
                <View style = {{flex: 2,}}>
                    <Button style ={styles.input}
                        title="Sign in with Google"
                        onPress={() => alert('sign in with google')}
                    />
                    <Button style ={styles.input}
                    title="Continue with Facebook"
                    onPress={() => alert('sign in with facebook')}
                    />
                </View>
                <View style = {{flex: 1, borderWidth: 1, backgroundColor: 'black', width:300, justifyContent:'center'}}>
                    <Button style ={styles.input}
                        title="Login"
                        color='white'
                        onPress={() => alert('Login')}
                    />
                </View>
                <View style = {{flex: 8}}></View>
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
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
      },
  });