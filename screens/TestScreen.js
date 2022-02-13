import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function httpGet(url){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, true );
  xmlHttp.setRequestHeader("AuthToken", "admin");
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

const TestScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}
                style = {{flex: '4%', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection:'row',}}>
                <View style = {{width: 20}}></View>
                <Icon name="arrow-back-outline" size={30} color='black' />
            </TouchableOpacity>
            <Text>{httpGet("34.201.126.106:9090/event/1")}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignSelf: 'center',
      margin:10,
      marginTop:175
    },
    container2: {
      justifyContent: 'center',
      alignSelf: 'center',
      margin:10,
    },
    loginbutton: {
      margin:'auto',
      padding: 13,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 2,
      textAlign: 'center',
      width: 175,
      borderRadius:6
    },
    createaccountbutton: {
      backgroundColor: 'black',
      padding: 13,
      margin:'auto',
      borderColor: 'black',
      borderWidth: 2,
      textAlign: 'center',
      color: 'white',
      width: 175,
      borderRadius:6,
      overflow: 'hidden'
    }
  });
  
  export default TestScreen;
  