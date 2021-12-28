import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, StatusBar, TouchableHighlight } from 'react-native';

const GroupScreen = ({navigation}) => {
    return (
        <View style={{flex:1, backgroundColor:'#EDF6F9'}}>

            <SafeAreaView>
                <StatusBar barStyle="dark-content"/>
            </SafeAreaView>
            <View style = {{flex:'93%'}}>
                <View style = {{flex: '4%', alignItems: 'flex-start', justifyContent: 'flex-end',}}>
                    <Button
                        title="  Back"
                        onPress={() => navigation.navigate("AddFriend")}
                    />
                </View>

                    
                <View style = {{flex: '8%', width:300, alignSelf:'center', justifyContent:'center', alignItems:'flexStart'}}>
                    <Text style = {{fontSize: 40, fontWeight:'bold'}}>Group 1</Text>
                </View>

                <View style = {{flex: '3%', width:300, alignSelf:'center', justifyContent:'center', alignItems:'flexStart'}}>
                    <Text style = {{fontSize: 14, fontWeight:'bold'}}>1000 Followers</Text>
                </View>

                <View style = {{flex: '15%', width:300, alignSelf:'center', justifyContent:'center', alignItems:'flexStart',}}>
                    <Text style = {{fontSize: 16}}>Group Description</Text>
                    <Text style = {{fontSize: 14}}>--------------------------------</Text>
                    <Text style = {{fontSize: 14}}>--------------------------------</Text>
                    <Text style = {{fontSize: 14}}>--------------------------------</Text>
                    <Text style = {{fontSize: 14}}>--------------------------------</Text>
                </View>

                <View style = {{flex: '30%', width:300, alignSelf:'center', justifyContent:'center', alignItems:'center'}}>
                    <View style = {{borderWidth:2, width: 250, height: 250}}>
                        <Text> Image Here</Text>
                    </View>
                </View>

                

                <View style = {[styles.container,{flex: '12%', alignItems:'flex-start', width: 250, alignSelf:'center', justifyContent:'flex-start', padding:5}]}>
                <Text>Group members</Text>
                <Text>Group members</Text>
                <Text>Group members</Text>
                <Text>Group members</Text>
                <Text>+ 20 Others</Text>
                </View>
                
                <View style = {{flex:'7%', justifyContent:'center', alignItems:'center'}}>
                    <TouchableHighlignt onPress={() => alert('Following')}>
                        <View style = {{width:200, borderWidth:2, height:60, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                            <Text style ={{fontSize: 18, fontWeight:'bold'}}>Follow Group</Text>
                        </View>
                    </TouchableHighlignt>
                </View>
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

export default GroupScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  