import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Touchable } from 'react-native';

const HomeScreen = ({navigation}) => {
    const [search, onChangeSearch] = React.useState('');
    return (
        <View style={{flex: 1}}>
            <View style = {{flex: '7&', alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'black'}}>
                
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

                <View style = {[styles.container,{flex:6, justifyContent: 'flex-start', width: 350}]}>
                    <Text style = {{fontSize: 14, fontWeight: 'bold', alignSelf:'flex-start'}}>Upcoming Events</Text>
                    
                    <View style = {styles.event}>

                    </View>

                    <View style = {styles.event}>
                        
                    </View>

                    <View style = {styles.event}>
                        
                    </View>
                </View>

                <View style = {[styles.container,{flex:6, justifyContent: 'flex-start', width: 350}]}>
                    <Text style = {{fontSize: 14, fontWeight: 'bold', alignSelf:'flex-start'}}>Suggested Events</Text>
                    <TouchableWithoutFeedback>
                    <View style = {styles.event}>
                        
                    </View>
                    </TouchableWithoutFeedback>

                    <View style = {styles.event}>
                        
                    </View>

                    <View style = {styles.event}>
                        
                    </View>
                </View>

                <TouchableWithoutFeedback onPress={() => alert('Login')}>
                    <View style = {[styles.event, {flex: 1, flexDirection:'row', justifyContent: 'center', alignItems:'center', borderRadius:10}]}>
                        <Text style = {{fontSize: 20, fontWeight: 'bold'}}>See More</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style= {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignContent:'space-between', width: 400}}>
                    <TouchableWithoutFeedback>
                        <Text>Home</Text>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback>
                        <Text>Host</Text>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback>
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
        height: '25%',
        width: 350,
        margin: 6,
        borderWidth: 2,
    },
  });