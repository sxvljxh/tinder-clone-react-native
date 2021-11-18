import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const user= false;
    return (
       <Stack.Navigator>
           {user? (
            <>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ChatScreen" component={ChatScreen}/>
           </>
            ):(
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        )
        }
        </Stack.Navigator>
    )
}

export default StackNavigator
