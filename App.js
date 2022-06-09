import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Component/Screens/HomeScreen';
import DetailsScreen from './Component/Screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        component={HomeScreen}
        options={{
          title: 'Movies',
          headerStyle: {
            backgroundColor:"#eee",

          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: '900',
            fontSize:30
          },
        }}
      />
      <Stack.Screen
       name="Details"
       component={DetailsScreen} 
       
       options={{
        title: '',
        headerStyle: {
          
          backgroundColor:"#eee",
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:30
        },
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:"100%"
  },
  title:{
    fontSize:30,
    fontWeight:"bold",
    justifyContent:"center",
    textAlign:"center"
  }
})

export default App;
