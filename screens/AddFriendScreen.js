import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
                                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 1</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => alert('Go to friend 2')}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 2</Text>
                                    </View>
                                </TouchableOpacity>    
                                
                                <TouchableOpacity onPress={() => alert('Go to friend 3')}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 3</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => alert('Go to friend 3')}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 4</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => alert('Go to friend 3')}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 5</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('Go to friend 3')}>
                                    <View style = {styles.friend}>
                                        <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Name 6</Text>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        
                        <View style = {[styles.container,{flex:6, justifyContent: 'flex-start', width: 350}]}>
                            <Text style = {{fontSize: 18, fontWeight: 'bold', alignSelf:'flex-start'}}>Suggested Groups</Text>
                            <ScrollView showsVerticalScrollIndicator ={false}>
                                <View style = {{width: 350, alignItems:'center'}}>    
                                    <TouchableOpacity onPress={() => navigation.navigate("Group")}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 1</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => alert('Go to Group 2')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 2</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => alert('Go to Group 3')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 3</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => alert('Go to Group 4')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 4</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => alert('Go to Group 5')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 5</Text>
                                        </View>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity onPress={() => alert('Go to Group 6')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 6</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => alert('Go to Group 6')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 7</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => alert('Go to Group 6')}>
                                        <View style = {styles.friend}>
                                            <Text style = {{fontSize:16, alignSelf:'flex-start'}}>+ Group 8</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                </View>
            </View>
            
            <View style = {[styles.container, {flex: '7%', backgroundColor:'#023047', width:'100%', alignSelf:'center'}]}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', width: 400,}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <Icon name="home-outline" size={30} color='white' />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('Host')}>
                            <Icon name="calendar-outline" size={30} color='white' />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("AddFriend")}>
                            <Icon name="person-add-outline" size={30} color='white' />
                        </TouchableOpacity>
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