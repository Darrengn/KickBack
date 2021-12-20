import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

const ForgotPassword1 = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('');
    return (
        <View style={{flex: 1}}>
            <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'black'}}>
                <Button
                    title="  Back"
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
            <View style = {[styles.container,{flex:12, justifyContent:'flex-start'}]}>
                <View style = {[styles.input,{borderWidth:0}]}></View>
                <View style = {{alignItems:'center', justifyContent:'center'}}>
                    <Text style = {{fontSize: 40}}>Forgot Password</Text>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={onChangeEmail} 
                        value={email}
                        placeholder='Email'
                    />
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("ForgotPassword2")}>
                    <View style = {[styles.input,{backgroundColor: 'black', justifyContent:'center', alignItems:'center'}]}>
                        <Text style={{color: 'white', fontSize: 18}}>Send Verification</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

export default ForgotPassword1;

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
      },
  });