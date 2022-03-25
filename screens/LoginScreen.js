//replaced with code from DylanLee_Signin branch
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, StatusBar,} from 'react-native';
import { auth } from '../firebase';
import Icon from 'react-native-vector-icons/Ionicons';


const LoginScreen = ({navigation}) => {
    const [number, onNumber] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={[styles.container,{flex: 1, backgroundColor:'black'}]}>
            
            <SafeAreaView>
                <StatusBar barStyle="light-content"/>
            </SafeAreaView>

            <View style = {{flex: '5%', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection:'row',}}>
                <View style = {{flex: '5%'}}></View>

                <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}>
                    <Icon name="chevron-back-outline" size={20} color='white' />
                </TouchableOpacity>
                <View style = {{flex: '35%'}}></View>
                <View style = {{flex: '20%'}}>
                    <Text style = {{color: 'white'}}>Logo here</Text>
                </View>
                <View style = {{flex: '40%'}}></View>
            </View>

            <View style = {{flex: '5%'}}></View>

            <View style = {{flex: '7%', alignItems: 'center', justifyContent: 'center',}}>
                <Text style ={{color: 'white', fontSize:35, fontWeight:'bold'}}> Welcome Back</Text>
            </View>

            <View style = {{flex: '5%',alignItems: 'center', justifyContent: 'center',}}>
                <Text style = {{fontSize: 14, color: '#79abe0'}}>Let's get you back to the party!</Text>
            </View>

            <View style = {{flex: '2%'}}></View>

            <View style = {{flex: '30%',backgroundColor:'white', borderWidth:2, borderColor:'white',
                width:250, }}>
                <Text>Image here</Text>
            </View>

            <View style = {{flex: '5%'}}></View>

            <View style = {[styles.container,{flex: '8%',}]}>
                <TextInput 
                    style={[styles.input,{color:'grey'}]}
                    onChangeText={onNumber} 
                    value={number}
                    placeholder='Phone Number'
                    placeholderTextColor={'grey'}
                />
            </View>

            <View style = {{flex: '2%'}}></View>

            <View style = {{flex: '2%',width:250}}>
                <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword1")}>
                    <Text style= {{textAlign:'right', textDecorationLine:'underline',color:'grey'}}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <View style = {[styles.container,{flex: '10%',}]}>
                <TextInput 
                    style={[styles.input,{color:'grey'}]}
                    onChangeText={onChangePassword} 
                    value={password}
                    placeholder='Password'
                    placeholderTextColor={'grey'}
                    secureTextEntry
                />
            </View>

            <View style = {{flex: '5%'}}></View>

            <View style = {{flex: '10%', alignItems: 'center',justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style = {{backgroundColor: '#79abe0', width:220, height:50, justifyContent:'center', 
                        alignItems:'center', borderRadius:5}}>

                        <Text style={{color: 'black', fontSize: 14,fontWeight:'bold'}}>SIGN IN</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style = {{flex: '15%'}}></View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 60,
        width: 300,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        fontSize:14,
        borderRadius:15,
        borderColor:'grey',
        shadowOffset: {
            width: 5,
            height: 5,
          },
        shadowOpacity:0.1,
      },
  });
