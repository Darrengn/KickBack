import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Button} from 'react-native';
const AccountTypeScreen = ({navigation}) => {
    return (
        <View style={{flex:1,}}>
            <Text style={styles.title}>Create Profile</Text>
            <View style={styles.container}>
                <Button
                    title="PERSONAL"
                    onPress={() => navigation.navigate("Signup")}//whatever the personal sign up name is
                />
            </View>
            <Text style={styles.underText}>For individual users who are attending and hosting events around campus.</Text>
            <View style={styles.container}>
                <Button
                    title="GROUP"
                    onPress={() => navigation.navigate("Signup")}//whatever the group sign up name is
                />
            </View>
            <Text style={styles.underText}>For organizations such as fraternities, sports teams, and club pages who will be hosting events.</Text>
        </View>
    );
}

export default AccountTypeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff",
        marginTop: 16, //change margin to fit
        paddingTop: 25, //change padding to fit
        borderWidth: 2,
        borderRadius: 7,
        fontSize: 2,
        fontWeight: 'bold',
    },
    title: {
        marginTop: 16,
        paddingTop: 25,
        fontSize: 50
        
    },
    underText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });