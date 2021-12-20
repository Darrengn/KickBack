import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native';

const HomeScreen = ({navigation}) => {
    const [search, onChangeSearch] = React.useState('');
    return (
        <View style={{flex: 1}}>
            <View style = {{flex: '7%', alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'black'}}>
                
            </View>

            <View style = {[styles.container,{flex: '93%'}]}>
                <View style = {{flexDirection: 'row', flex: 1,}}>
                    <Text style = {{fontSize: 40, alignSelf:'center'}}>New Kickbacks</Text>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Onboarding")}>
                        <Text style = {{backgroundColor: 'grey', height:'100%', color: 'blue'}}>Settngs</Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style = {[styles.event, {flex: 1, flexDirection:'row'}]}>
                    <TextInput 
                        style={{flex:1, padding: 5}} 
                        onChangeText={onChangeSearch} 
                        value={search}
                        placeholder='Search'    
                    />
                </View>
                <View style = {{flex: 12}}>
                    <ScrollView 
                        showsVerticalScrollIndicator ={false}                      
                    >
                        <View style = {[styles.container,{flex:6, justifyContent: 'flex-start', width: 350}]}>
                            <Text style = {{fontSize: 14, fontWeight: 'bold', alignSelf:'flex-start'}}>Upcoming Events</Text>
                            <TouchableWithoutFeedback onPress={() => alert('Go to Event 1')}>
                                <View style = {styles.event}>
                                    <View style ={{flex:'22.5%',borderWidth:1}}>
                                        <Text>Image here</Text>
                                    </View>
                                    <View style = {{flex:'77.5%'}}>
                                        <Text style = {{fontWeight:'bold'}}>Event 1</Text>
                                        <Text>Description</Text>
                                        <Text>Date</Text>
                                        <Text style = {{fontSize: 10}}>Friends going</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => alert('Go to Event 2')}>
                                <View style = {styles.event}>
                                    <View style ={{flex:'22.5%',borderWidth:1}}>
                                        <Text>Image here</Text>
                                    </View>
                                    <View style = {{flex:'77.5%'}}>
                                        <Text style = {{fontWeight:'bold'}}>Event 2</Text>
                                        <Text>Description</Text>
                                        <Text>Date</Text>
                                        <Text style = {{fontSize: 10}}>Friends going</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>    
                            
                            <TouchableWithoutFeedback onPress={() => alert('Go to Event 3')}>
                                <View style = {styles.event}>
                                    <View style ={{flex:'22.5%',borderWidth:1}}>
                                        <Text>Image here</Text>
                                    </View>
                                    <View style = {{flex:'77.5%'}}>
                                        <Text style = {{fontWeight:'bold'}}>Event 3</Text>
                                        <Text>Description</Text>
                                        <Text>Date</Text>
                                        <Text style = {{fontSize: 10}}>Friends going</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        
                        <View style = {[styles.container,{flex:6, justifyContent: 'flex-start', width: 350}]}>
                            <Text style = {{fontSize: 14, fontWeight: 'bold', alignSelf:'flex-start'}}>Suggested Events</Text>
                            <View style = {{width: 400, alignItems:'center'}}>
                                
                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 4')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 4</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 5')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 5</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10,}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 6')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 6</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 7')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 7</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 8')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 8</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                
                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 9')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 9</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style= {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', width: 400, borderTopWidth: 2}}>
                    <TouchableWithoutFeedback onPress={() => alert('Home')}>
                        <Text>Home</Text>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => alert('Host')}>
                        <Text>Host</Text>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => alert('Add Friend')}>
                        <Text>Add Friend</Text>
                    </TouchableWithoutFeedback>
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
        padding: 10,
        textAlign: 'center',
      },
    event: {
        height: 70,
        width: 350,
        margin: 6,
        borderWidth: 2,
        flexDirection:'row'
    },
  });