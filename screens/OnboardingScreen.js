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
      marginTop:175
    },
    container2: {
      justifyContent: 'center',
      alignSelf: 'center',
      margin:10,
    },
    loginbutton: {
      margin:'auto',
      padding: 13,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 2,
      textAlign: 'center',
      width: 175,
      borderRadius:6
    },
    createaccountbutton: {
      backgroundColor: 'black',
      padding: 13,
      margin:'auto',
      borderColor: 'black',
      borderWidth: 2,
      textAlign: 'center',
      color: 'white',
      width: 175,
      borderRadius:6,
      overflow: 'hidden'
    }
  });
  
  export default OnboardingScreen;
  