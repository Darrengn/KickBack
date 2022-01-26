import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, StatusBar, Modal, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ForgotPassword1 = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <View style={{flex: 1, backgroundColor:'#EDF6F9'}}>
            
            <SafeAreaView>
                <StatusBar barStyle="dark-content"/>
            </SafeAreaView>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style = {{flex: 1, justifyContent:'center', alignContent:'center'}}>
                    
                    <View style={styles.modalView}>
                    
                        <View style = {{flexDirection: 'row', justifyContent:'flex-end', width:'100%'}}>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Icon name="close-outline" size={40} color='black' />
                                </TouchableOpacity>
                        </View>
                        

                        <View style = {{justifyContent:'space-around' , alignItems:'center'}}>
                            <Text style={{fontSize: 40}}>Error</Text>

                            <Icon name="warning-outline" size={100} color='black' />

                            <Text style={{fontSize: 20}}>Accont can not be found</Text>
                        </View>
                        
                    </View>

                    <View style = {{height: 200}}/>
                </View>
                
            </Modal>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}
                style = {{flex: '4%', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection:'row',}}>
                <View style = {{width: 20}}></View>
                <Icon name="arrow-back-outline" size={30} color='black' />
            </TouchableOpacity>

            <View style = {[styles.container,{flex:'96%', justifyContent:'flex-start'}]}>
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
                <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword2")}>
                    <View style = {[styles.input,{backgroundColor: 'black', justifyContent:'center', alignItems:'center', borderRadius:10}]}>
                        <Text style={{color: 'white', fontSize: 16}}>Send Verification</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} /* TODO delete this when we connect to backend*/>
                    <View style = {{justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <Text style={{fontSize: 16}}>error popup</Text>
                    </View>
                </TouchableOpacity>
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
      modalView: {
        margin: 20,
        height:'40%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
  });