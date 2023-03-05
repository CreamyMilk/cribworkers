import { StyleSheet, Text, View } from 'react-native';
import Login from "./screens/login"
import Home from "./screens/home"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RentCollectionList from './screens/rentcollection';
import ChatScreen, { ComplainsList } from './screens/complains';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Collections" component={RentCollectionList} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="ComplainsList" component={ComplainsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems:'center',
    // justifyContent:'center',
    // width:'100%',
  },
});
