import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, StatusBar, SafeAreaView } from 'react-native';

const ProfileScreen = ({navigation}) => {
    return (
        <View style={{flex:1, backgroundColor:'#EDF6F9'}}>

            <SafeAreaView>
                <StatusBar barStyle="dark-content"/>
            </SafeAreaView>

            <View style = {{flex:'93%'}}>
                <View style = {{flex: '4%', alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                    <Button
                        title="  Back"
                        onPress={() => navigation.navigate("AddFriend")}
                    />
                </View>

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
                    <TouchableWithoutFeedback onPress={() => alert('Added as Friend')}>
                        <View style = {{width:200, borderWidth:2, height:60, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                            <Text style ={{fontSize: 18, fontWeight:'bold'}}>Add Friend</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style = {{flex:'17%'}}></View>

            </View>

            <View style = {[styles.container, {flex: '7%', backgroundColor:'#023047', width:'100%', alignSelf:'center'}]}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', width: 400,}}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
                            <Text>Home</Text>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => alert('Host')}>
                            <Text>Host</Text>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate("AddFriend")}>
                            <Text>Add Friend</Text>
                        </TouchableWithoutFeedback>
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
  