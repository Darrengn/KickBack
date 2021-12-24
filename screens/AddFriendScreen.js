import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView, SafeAreaView, StatusBar } from 'react-native';

const AddFriendScreen = ({navigation}) => {
    const [search, onChangeSearch] = React.useState('');
    return (
        <View style={{flex: 1, backgroundColor:'#EDF6F9'}}>
            
            <SafeAreaView>
                <StatusBar barStyle="dark-content"/>
            </SafeAreaView>

            <View style = {[styles.container,{flex: '93%'}]}>
                <View style = {{flexDirection: 'row', flex: 1, justifyContent:'flex-start', width: 350}}>
                    <Text style = {{fontSize: 40, alignSelf:'center'}}>Friends</Text>
                </View>

                <View style = {{flex: 1, height: 70, width: 350, margin: 6, borderWidth: 2}}>
                    <TextInput 
                        style={{flex:1, padding: 5, width: 350}} 
                        onChangeText={onChangeSearch} 
                        value={search}
                        placeholder='Search'    
                    />
                </View>
                <View style = {{flex: 12,}}>
                        <View style = {[styles.container,{flex:4,justifyContent: 'flex-start', width: 350}]}>
                            <Text style = {{fontSize: 18, fontWeight: 'bold', alignSelf:'flex-start'}}>Suggested Friends</Text>
                            <ScrollView showsVerticalScrollIndicator ={false}>
                                <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 1</Text>
                                    </View>
                                </TouchableWithoutFeedback>

                                <TouchableWithoutFeedback onPress={() => alert('Go to friend 2')}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 2</Text>
                                    </View>
                                </TouchableWithoutFeedback>    
                                
                                <TouchableWithoutFeedback onPress={() => alert('Go to friend 3')}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 3</Text>
                                    </View>
                                </TouchableWithoutFeedback>

                                <TouchableWithoutFeedback onPress={() => alert('Go to friend 3')}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 4</Text>
                                    </View>
                                </TouchableWithoutFeedback>

                                <TouchableWithoutFeedback onPress={() => alert('Go to friend 3')}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 5</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => alert('Go to friend 3')}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 6</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </ScrollView>
                        </View>
                        
                        <View style = {[styles.container,{flex:6, justifyContent: 'flex-start', width: 350}]}>
                            <Text style = {{fontSize: 18, fontWeight: 'bold', alignSelf:'flex-start'}}>Suggested Groups</Text>
                            <ScrollView showsVerticalScrollIndicator ={false}>
                                <View style = {{width: 350, alignItems:'center'}}>    
                                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Group")}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 1</Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Group 2')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 2</Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Group 3')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 3</Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Group 4')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 4</Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Group 5')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 5</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    
                                    <TouchableWithoutFeedback onPress={() => alert('Go to Group 6')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 6</Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Group 6')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 7</Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Group 6')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 8</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </ScrollView>
                        </View>
                </View>
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
};

export default AddFriendScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 450,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
      },
    friend: {
        height: 25,
        width: 300,
        margin: 3,
        flexDirection:'row'
    },
  });