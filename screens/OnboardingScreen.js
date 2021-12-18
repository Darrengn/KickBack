import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const OnboardingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Onboarding Screen</Text>
            <Text>hi</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate("Signup")}
            />
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
  });
  