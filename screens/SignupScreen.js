import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Picker, ScrollView} from 'react-native';

const SignupScreen = ({navigation}) => {
    const [first, onChangeFirst] = React.useState('');
    const [last, onChangeLast] = React.useState('');
    const [gender, setGender] = React.useState("other");
    const [email, onChangeEmail] = React.useState('');
    const [vEmail, onChangeVEmail] = React.useState('');
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [vPassword, onChangeVPassword] = React.useState('');
    
    return (
        <View style={{flex:1}}>
            <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'black'}}>
                <Button
                    title="  Back"
                    onPress={() => navigation.navigate("Onboarding")}
                />
            </View>
            <View style = {[styles.container, {flex: 12}]}>
                
                <Text style = {{fontSize: 40}}>Create Account</Text>
                <Button style ={styles.input}
                    title="Sign in with Google"
                    onPress={() => alert('sign in with google')}
                />
                <Button style ={styles.input}
                    title="Continue with Facebook"
                    onPress={() => alert('sign in with facebook')}
                />
                <Text style = {{fontSize: 25}}>Or</Text>
                <ScrollView>
                    <View style = {styles.container}>
                        

                        <TextInput style={styles.input} onChangeText={onChangeFirst} value={first}>
                            First Name
                        </TextInput>

                        <TextInput style={styles.input} onChangeText={onChangeLast} value={last}>
                            Last Name
                        </TextInput>

                        <Text style = {{fontSize: 25}}>Birthday</Text>


                        
                        <View style = {styles.container}>
                            <Text style = {{fontSize: 25}}>Gender</Text>
                            <Picker
                                selectedValue={gender}
                                style={{ height: 20, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                            >
                                <Picker.Item label="Other" value="other" />
                                <Picker.Item label="Male" value="male" />
                                <Picker.Item label="Female" value="female" />
                            </Picker>
                        </View>
                        
                        <TextInput style={styles.input} onChangeText={onChangeEmail} value={email}>
                            Email Address
                        </TextInput>
                        <TextInput style={styles.input} onChangeText={onChangeVEmail} value={vEmail}>
                            Verify Email Address
                        </TextInput>
                        <TextInput style={styles.input} onChangeText={onChangeUsername} value={username}>
                            Username
                        </TextInput>
                        <TextInput style={styles.input} onChangeText={onChangePassword} value={password}>
                            Password
                        </TextInput>
                        <TextInput style={styles.input} onChangeText={onChangeVPassword} value={vPassword}>
                            Verify Password
                        </TextInput>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default SignupScreen;

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
