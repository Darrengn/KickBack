import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

const OnboardingScreen = ({navigation}) => {
    return (
        <View>
            <View style = {styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style = {styles.loginbutton}>
                    LOG IN
                    </Text>
                </TouchableOpacity>
                
            </View>
            <View style = {styles.container2}>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style = {styles.createaccountbutton}>
                    CREATE ACCOUNT
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignSelf: 'center',
      margin:10,
      marginTop:150
    },
    container2: {
      justifyContent: 'center',
      margin:10,
    },
    loginbutton: {
      margin:'auto',
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 2,
      textAlign: 'center',
      width: 150,
      borderRadius:4
    },
    createaccountbutton: {
      backgroundColor: 'black',
      margin:'auto',
      borderColor: 'black',
      borderWidth: 2,
      textAlign: 'center',
      color: 'white',
      width: 150,
      borderRadius:4
    }
  });
  
  export default OnboardingScreen;
  