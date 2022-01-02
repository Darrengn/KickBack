import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = ({navigation}) => {
    const [search, onChangeSearch] = React.useState('');
    return (
        <View style={{flex: 1, backgroundColor:'#EDF6F9'}}>
            
            <SafeAreaView>
                <StatusBar barStyle="dark-content"/>
            </SafeAreaView>

            <View style = {[styles.container,{flex: '93%'}]}>
                <View style = {{flexDirection: 'row', flex: '7.5%',}}>
                    <View style = {{width: 60}}/>
                    <Text style = {{fontSize: 40, alignSelf:'center',}}>New Kickbacks</Text>
                    <View style = {{width: 30}}/>
                    <TouchableOpacity style = {{alignItems:'center', justifyContent:'center'}} onPress={() => navigation.navigate("Onboarding")}>
                        <Icon name="settings-outline" size={30} color='black' />
                    </TouchableOpacity>
                </View>

                <View style = {[styles.event, {flex: '7.5%', flexDirection:'row', alignItems:'center', justifyContent:'center'}]}>
                    <View style = {{width: 20}}/>
                    <Icon name="search-outline" size={30} color='black' style = {{opacity: 0.1}} />
                    <TextInput 
                        style={{flex:1, padding: 5}} 
                        onChangeText={onChangeSearch} 
                        value={search}
                        placeholder='Search'    
                    />
                </View>

                <View style = {{flex: '7.5%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style = {styles.filter} >
                        <Text>Beach</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style = {styles.filter}>
                            <Text>Party</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style = {styles.filter}>
                            <Text>Sports</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style = {styles.filter}>
                            <Text>Food</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style = {styles.filter}>
                            <Text>Music</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style = {styles.filter}>
                            <Text>Bonfire</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style = {{flex: '82%'}}>
                    <ScrollView showsVerticalScrollIndicator ={false}>
                        
                        <View style = {[styles.container, {flex:6, justifyContent: 'flex-start', width: 400,}]}>
                            <Text style = {{fontSize: 14, fontWeight: 'bold', alignSelf:'flex-start'}}>Attending Events</Text>
                            <TouchableOpacity onPress={() => alert('Go to Event 0')}>
                                <View style = {styles.event}>
                                    <View style = {{width:10}}></View>
                                    <View style ={{borderWidth:1, height: 70, width:70,
                                        borderColor:'black',borderRadius:35, justifyContent:'center', alignItems:'center'}}>
                                        <Text>Image here</Text>
                                    </View>
                                    <View style = {{width:10}}></View>
                                    <View style = {{width:260,}}>
                                        <Text style = {{fontWeight:'bold'}}>Event 0</Text>
                                        <Text>Description</Text>
                                        <Text>Date</Text>
                                        <Text style = {{fontSize: 10}}>Friends going</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>   

                        <View style = {[styles.container, {flex:6, justifyContent: 'flex-start', width: 400,}]}>
                            <Text style = {{fontSize: 14, fontWeight: 'bold', alignSelf:'flex-start'}}>Upcoming Events</Text>
                            <TouchableOpacity onPress={() => alert('Go to Event 1')}>
                                <View style = {styles.event}>
                                    <View style = {{width:10}}></View>
                                    <View style ={{borderWidth:1, height: 70, width:70,
                                        borderColor:'black',borderRadius:35, justifyContent:'center', alignItems:'center'}}>
                                        <Text>Image here</Text>
                                    </View>
                                    <View style = {{width:10}}></View>
                                    <View style = {{width:260,}}>
                                        <Text style = {{fontWeight:'bold'}}>Event 1</Text>
                                        <Text>Description</Text>
                                        <Text>Date</Text>
                                        <Text style = {{fontSize: 10}}>Friends going</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => alert('Go to Event 2')}>
                                <View style = {styles.event}>
                                    <View style = {{width:10}}></View>
                                    <View style ={{borderWidth:1, height: 70, width:70,
                                        borderColor:'black',borderRadius:35, justifyContent:'center', alignItems:'center'}}>
                                        <Text>Image here</Text>
                                    </View>
                                    <View style = {{width:10}}></View>
                                    <View style = {{width:260,}}>
                                        <Text style = {{fontWeight:'bold'}}>Event 2</Text>
                                        <Text>Description</Text>
                                        <Text>Date</Text>
                                        <Text style = {{fontSize: 10}}>Friends going</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => alert('Go to Event 3')}>
                                <View style = {styles.event}>
                                    <View style = {{width:10}}></View>
                                    <View style ={{borderWidth:1, height: 70, width:70,
                                        borderColor:'black',borderRadius:35, justifyContent:'center', alignItems:'center'}}>
                                        <Text>Image here</Text>
                                    </View>
                                    <View style = {{width:10}}></View>
                                    <View style = {{width:260,}}>
                                        <Text style = {{fontWeight:'bold'}}>Event 3</Text>
                                        <Text>Description</Text>
                                        <Text>Date</Text>
                                        <Text style = {{fontSize: 10}}>Friends going</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                        <View style = {[styles.container,{flex:6, justifyContent: 'flex-start', width: 400}]}>
                            <Text style = {{fontSize: 14, fontWeight: 'bold', alignSelf:'flex-start'}}>Suggested Events</Text>
                            <View style = {{width: 400, alignItems:'center'}}>
                                
                                <TouchableOpacity onPress={() => alert('Go to Event 4')}>
                                    <View style = {styles.event}>
                                        <View style = {{width:10}}></View>
                                        <View style ={{borderWidth:1, height: 70, width:70,
                                            borderColor:'black',borderRadius:35, justifyContent:'center', alignItems:'center'}}>
                                            <Text>Image here</Text>
                                        </View>
                                        <View style = {{width:10}}></View>
                                        <View style = {{width:260,}}>
                                            <Text style = {{fontWeight:'bold'}}>Event 4</Text>
                                            <Text>Description</Text>
                                            <Text>Date</Text>
                                            <Text style = {{fontSize: 10}}>Friends going</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => alert('Go to Event 5')}>
                                    <View style = {styles.event}>
                                        <View style = {{width:10}}></View>
                                        <View style ={{borderWidth:1, height: 70, width:70,
                                            borderColor:'black',borderRadius:35, justifyContent:'center', alignItems:'center'}}>
                                            <Text>Image here</Text>
                                        </View>
                                        <View style = {{width:10}}></View>
                                        <View style = {{width:260,}}>
                                            <Text style = {{fontWeight:'bold'}}>Event 5</Text>
                                            <Text>Description</Text>
                                            <Text>Date</Text>
                                            <Text style = {{fontSize: 10}}>Friends going</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => alert('Go to Event 6')}>
                                    <View style = {styles.event}>
                                        <View style = {{width:10}}></View>
                                        <View style ={{borderWidth:1, height: 70, width:70,
                                            borderColor:'black',borderRadius:35, justifyContent:'center', alignItems:'center'}}>
                                            <Text>Image here</Text>
                                        </View>
                                        <View style = {{width:10}}></View>
                                        <View style = {{width:260,}}>
                                            <Text style = {{fontWeight:'bold'}}>Event 6</Text>
                                            <Text>Description</Text>
                                            <Text>Date</Text>
                                            <Text style = {{fontSize: 10}}>Friends going</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => alert('Go to Event 7')}>
                                    <View style = {styles.event}>
                                        <View style = {{width:10}}></View>
                                        <View style ={{borderWidth:1, height: 70, width:70,
                                            borderColor:'black',borderRadius:35, justifyContent:'center', alignItems:'center'}}>
                                            <Text>Image here</Text>
                                        </View>
                                        <View style = {{width:10}}></View>
                                        <View style = {{width:260,}}>
                                            <Text style = {{fontWeight:'bold'}}>Event 7</Text>
                                            <Text>Description</Text>
                                            <Text>Date</Text>
                                            <Text style = {{fontSize: 10}}>Friends going</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => alert('Go to Event 8')}>
                                    <View style = {styles.event}>
                                        <View style = {{width:10}}></View>
                                        <View style ={{borderWidth:1, height: 70, width:70,
                                            borderColor:'black',borderRadius:35, justifyContent:'center', alignItems:'center'}}>
                                            <Text>Image here</Text>
                                        </View>
                                        <View style = {{width:10}}></View>
                                        <View style = {{width:260,}}>
                                            <Text style = {{fontWeight:'bold'}}>Event 8</Text>
                                            <Text>Description</Text>
                                            <Text>Date</Text>
                                            <Text style = {{fontSize: 10}}>Friends going</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={() => alert('Go to Event 9')}>
                                    <View style = {styles.event}>
                                        <View style = {{width:10}}></View>
                                        <View style ={{borderWidth:1, height: 70, width:70,
                                            borderColor:'black',borderRadius:35, justifyContent:'center', alignItems:'center'}}>
                                            <Text>Image here</Text>
                                        </View>
                                        <View style = {{width:10}}></View>
                                        <View style = {{width:260,}}>
                                            <Text style = {{fontWeight:'bold'}}>Event 9</Text>
                                            <Text>Description</Text>
                                            <Text>Date</Text>
                                            <Text style = {{fontSize: 10}}>Friends going</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style = {{flex: '3%'}}/>
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

export default HomeScreen;

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
        padding: 13,
        textAlign: 'center',
      },
    event: {
        height: 70,
        width: 350,
        margin: 15,
        borderRadius:6,
        flexDirection:'row',
        backgroundColor:'white',
        shadowOffset: {
            width: 5,
            height: 5,
          },
        shadowOpacity:0.1,
    },
    filter: {
        width: 50,
        height: 40,
        borderRadius:10,
        margin:6,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        shadowOffset: {
            width: 5,
            height: 5,
          },
        shadowOpacity:0.1,
    },
  });