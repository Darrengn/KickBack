import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Touchable } from 'react-native';

const GroupScreen = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <View style = {{flex: '7%', alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'black'}}>
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
                <TouchableWithoutFeedback onPress={() => alert('Following')}>
                    <View style = {{width:150, borderWidth:2, height:45, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                        <Text style ={{fontSize: 18, fontWeight:'bold'}}>Follow Group</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>


            <View style = {[styles.container, {flex: '13%'}]}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', width: 400, borderTopWidth: 2}}>
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

export default GroupScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  