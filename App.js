import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { HomeScreen } from './screens/HomeScreen'; 
import { SignInScreen } from './screens/SignInScreen';
import { ValidationScreen } from './screens/ValidationScreen'; 
import { QrScannerScreen } from './screens/QrScannerScreen'




const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="QrScanner"
        component={QrScannerScreen}
        options={{title: 'Scan a QR Code'}}
      />
      <Stack.Screen
        name="Validation"
        component={ValidationScreen}
        options={{title: 'Validation'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};






    

export default App;
