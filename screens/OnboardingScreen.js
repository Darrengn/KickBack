import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const OnboardingScreen = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
        <View style={{flex: 1}}>
            <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'black'}}>
                
            </View>
            <View style = {[styles.container,{flex:12}]}>
                <View style = {[styles.container, {flex: 5, justifyContent: 'flex-end'}]}>
                    <View style = {{flex:1}}></View>
                    <View style = {{flex: 1, borderWidth: 1, width:300, justifyContent:'center'}}>
                    <Button style ={styles.input}
                        title="Login"
                        onPress={() => navigation.navigate("Login")}
                    />
                    </View>
                    <View style = {{flex:1}}></View>
                    <View style = {{flex: 1, borderWidth: 1, backgroundColor: 'black', width:300, justifyContent:'center'}}>
                    <Button style ={[styles.input, {textAlign: 'center'}]}
                        title="Create Account"
                        color='white'
                        onPress={() => navigation.navigate("Signup")}
                    />
                    <View style = {{flex:1}}></View>
                    </View>
                </View>
                <View style = {{flex: 2,}}>
                </View>
                <View style = {{flex: 8, borderWidth: 1, backgroundColor: 'black', width:300, justifyContent:'center'}}>
                    <Button style ={styles.input}
                        title="Logo here"
                        color='white'
                        onPress={() => alert('Login')}
                    />
                </View>
                <View style = {{flex: 3}}></View>
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
  