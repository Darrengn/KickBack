import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation}) => {
    return (
        <View style={{flex:1, backgroundColor:'#EDF6F9'}}>

            <SafeAreaView>
                <StatusBar barStyle="dark-content"/>
            </SafeAreaView>

            <TouchableOpacity onPress={() => navigation.navigate("AddFriend")}
                style = {{flex: '4%', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection:'row',}}>
                <View style = {{width: 20}}></View>
                <Icon name="arrow-back-outline" size={30} color='black' />
            </TouchableOpacity>

            <View style = {{flex:'93%'}}>

                <View style = {{flex: '30%', justifyContent:'center', alignItems:'center'}}>
                    <View style = {{width: 200, height: 200, borderWidth:2}}>
                        <Text>Pfp here</Text>
                    </View>
                </View>

                <View style = {{flex: '8%', alignSelf:'center', justifyContent:'center', alignItems:'center'}}>
                    <Text style = {{fontSize: 40, fontWeight:'bold'}}>First Last</Text>
                </View>

                <View style = {{flex: '3%', width: 200, alignSelf:'center', justifyContent:'center', alignItems:'flexStart'}}>
                    <Text style = {{fontSize: 14, fontWeight:'bold'}}>Description</Text>
                </View>

                <View style = {{flex: '15%', width:200, alignSelf:'center', justifyContent:'center', alignItems:'flexStart',}}>
                    <Text style = {{fontSize: 14}}>--------------------------</Text>
                    <Text style = {{fontSize: 14}}>--------------------------</Text>
                    <Text style = {{fontSize: 14}}>--------------------------</Text>
                    <Text style = {{fontSize: 14}}>--------------------------</Text>
                    <Text style = {{fontSize: 14}}>--------------------------</Text>
                </View>
                
                <View style = {{flex:'7%', justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={() => alert('Added as Friend')}>
                        <View style = {{width:200, borderWidth:2, height:60, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                            <Text style ={{fontSize: 18, fontWeight:'bold'}}>Add Friend</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style = {{flex:'21%'}}></View>

            </View>

            <View style = {[styles.container, {flex: '7%', backgroundColor:'#023047', width:'100%', alignSelf:'center'}]}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', width: 400,}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <Text style = {{color:'white'}}>Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('Host')}>
                            <Text style = {{color:'white'}}>Host</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("AddFriend")}>
                            <Text style = {{color:'white'}}>Add Friend</Text>
                        </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  