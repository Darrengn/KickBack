import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const HomeScreen = ({navigation}) => {
    const [search, onChangeSearch] = React.useState('');
    return (
        <View style={{flex: 1}}>
            <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'black'}}>
                
            </View>
            <View style = {[styles.container,{flex: 12}]}>
                <View style = {{flexDirection: 'row', flex: 1, alignItems: 'flex-start'}}>
                    <Text style = {{fontSize: 40,}}>New Kickbacks</Text>
                    <Button
                        title="settings"
                        onPress={() => navigation.navigate("Onboarding")} // TODO change to settings page
                    />
                </View>
                <View style = {[styles.input, {flex: 1, width: '90%',flexDirection:'row'}]}>
                <TextInput 
                    style={{flex:1,}} 
                    onChangeText={onChangeSearch} 
                    value={search}
                    placeholder='Search'    
                />
                </View>
                <View style = {{flex:15}}></View>
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