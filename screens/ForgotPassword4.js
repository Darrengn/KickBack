import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ForgotPassword1 = ({navigation}) => {
    const [phoneNumber, onChangePhoneNumber] = React.useState('');
    return (
        <View style={{flex: 1, backgroundColor:'#EDF6F9'}}>
            
            <SafeAreaView>
                <StatusBar barStyle="dark-content"/>
            </SafeAreaView>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}
                style = {{flex: '4%', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection:'row',}}>
                <View style = {{width: 20}}></View>
                <Icon name="arrow-back-outline" size={30} color='black' />
            </TouchableOpacity>

            <View style = {[styles.container,{flex:'96%', justifyContent:'flex-start'}]}>
                <View style = {[styles.input,{borderWidth:0}]}></View>
                <View style = {{alignItems:'center', justifyContent:'center'}}>
                    <Text style = {{fontSize: 50}}>Forgot Password</Text>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={onChangePhoneNumber} 
                        value={phoneNumber}
                        placeholder='Phone Number'
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword2")}>
                    <View style = {[styles.input,{backgroundColor: 'black', justifyContent:'center', alignItems:'center', borderRadius:10}]}>
                        <Text style={{color: 'white', fontSize: 16}}>Send Verification</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ForgotPassword4;

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