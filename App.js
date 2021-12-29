import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AddFriendScreen from './screens/AddFriendScreen';
import GroupScreen from './screens/GroupScreen';
import ProfileScreen from './screens/ProfileScreen';
import ForgotPassword1 from './screens/ForgotPassword1';
import ForgotPassword2 from './screens/ForgotPassword2';
import ForgotPassword3 from './screens/ForgotPassword3';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
      >
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="Signup" component={SignupScreen} />
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="AddFriend" component={AddFriendScreen} />
        <AppStack.Screen name="Group" component={GroupScreen} />
        <AppStack.Screen name="Profile" component={ProfileScreen} />
        <AppStack.Screen name="ForgotPassword1" component={ForgotPassword1} />
        <AppStack.Screen name="ForgotPassword2" component={ForgotPassword2} />
        <AppStack.Screen name="ForgotPassword3" component={ForgotPassword3} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

