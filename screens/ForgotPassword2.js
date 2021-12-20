import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

const ForgotPassword2 = ({navigation}) => {
    const [key, onChangeKey] = React.useState('');
    return (
        <View style={{flex: 1}}>
            <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'black'}}>
                <Button
                    title="  Back"
                    onPress={() => navigation.navigate("ForgotPassword1")}
                />
            </View>
            <View style = {[styles.container,{flex:12, justifyContent:'flex-start'}]}>
                <View style = {[styles.input,{borderWidth:0}]}></View>
                <View style = {{alignItems:'center', justifyContent:'center'}}>
                    <Text style = {{fontSize: 40}}>Forgot Password</Text>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={onChangeKey} 
                        value={key}
                        placeholder='Verification Key'
                    />
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("ForgotPassword3")}>
                    <View style = {[styles.input,{backgroundColor: 'black', justifyContent:'center', alignItems:'center'}]}>
                        <Text style={{color: 'white', fontSize: 18}}>Verify</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

export default ForgotPassword2;

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