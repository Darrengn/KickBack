import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

const NavScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Nav Screen</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate("Signup")}
            />
            <Button
                title="Onboarding"
                onPress={() => navigation.navigate("Onboarding")}
            />
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
  
  export default NavScreen;