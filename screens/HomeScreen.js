import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

const HomeScreen = ({navigation}) => {
    const [search, onChangeSearch] = React.useState('');
    return (
        <View style={{flex: 1}}>
            <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'black'}}>
                
            </View>
            <View style = {[styles.container,{flex: 12}]}>
                <View style = {{flexDirection: 'row', flex: 1,}}>
                    <Text style = {{fontSize: 40, alignSelf:'center'}}>New Kickbacks</Text>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Onboarding")}>
                        <Text style = {{backgroundColor: 'grey', height:'100%', color: 'blue'}}>Settngs</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style = {[styles.input, {flex: 1, width: '80%',flexDirection:'row'}]}>
                <TextInput 
                    style={{flex:1,}} 
                    onChangeText={onChangeSearch} 
                    value={search}
                    placeholder='Search'    
                />
                </View>
                <View style = {{flex:12}}>

                </View>
                <TouchableWithoutFeedback onPress={() => alert('Login')}>
                    <View style = {[styles.input, {flex: 1, width: '80%',flexDirection:'row', justifyContent: 'center', alignItems:'center'}]}>
                        <Text style = {{fontSize: 20, fontWeight: 'bold'}}>See More</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style= {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignContent:'space-between'}}>
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
  });