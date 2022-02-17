import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/*function httpGet(url){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, true);
  xmlHttp.setRequestHeader("AuthToken", "admin");
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function httpPost(url){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", url, true);
  xmlHttp.setRequestHeader("AuthToken", "admin");
  console.log(xmlHttp.send(event));
}*/



async function getEvent() {
  try {
    let response = await fetch('34.201.126.106:9090/events/', {
      method: 'GET',
      headers: {
        "AuthToken": 'admin',
        'Content-Type': 'application/json',
      },
    });
    let responseJson = await response.json();
    console.log(responseJSon);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

const event = {"name": "Event 1", "owner": "test"}

const TestScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <StatusBar barStyle="dark-content"/>
            </SafeAreaView>

            <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}
                style = {{flex: '4%', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection:'row',}}>
                <View style = {{width: 20}}></View>
                <Icon name="arrow-back-outline" size={30} color='black' />
            </TouchableOpacity>

            <Button
                title="create event"
                onPress={() => getEvent()}
            /> 

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
  