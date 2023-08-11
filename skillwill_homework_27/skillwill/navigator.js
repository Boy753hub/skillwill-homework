import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import TabScreen from "./screens/TabScreen";
import TabScreen2 from "./screens/tabScreen2";
import TabScreen3 from "./screens/TabScreen3";
import { Entypo, EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'gray',
            headerStyle:{
                backgroundColor:'#1f2c34',
                borderTopWidth: 0,
                borderButtomColor:'#273443' 
                       },
        }}>
            <Stack.Screen name="WhatsApp" component={TabNavigator}  options={{
      
      headerRight: () => <Text> 
        <Feather name="camera" size={24} color="gray" />
        <EvilIcons name="search" size={24} color="gray" />
        <Entypo name="dots-three-vertical" size={24} color="gray" />
      </Text>,
    }}/>
            {/* <Stack.Screen name="ScreenTwo" component={ScreenTwo}/> */}
        </Stack.Navigator>
    )
}


const TabNavigator = () => {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          showLaber: false,
          tabBarActiveTintColor: '#25D366',
          tabBarInactiveTintColor: 'gray',
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;
        //     if (route.name === 'people') {
        //       iconName = focused ? 'people-sharp' : 'ios-people-outline';
        //     } else if(route.name === 'Chats') {
        //         iconName=focused? 'people-sharp': 'ios-people-outline'
        //     }
        //         else if(route.name === 'Status') {
        //         iconName=focused? 'people-sharp': 'ios-people-outline'
        //     }
        //         else if(route.name === 'calls') {
        //         iconName=focused? 'people-sharp': 'ios-people-outline'
        //     }
        //     return <Ionicons name={iconName} color={color} size={size} />;
        //   },
          tabBarStyle: {
            backgroundColor: '#1f2c34',
            borderTopWidth: 0,
            borderBottomColor: 'red', 
          },
        })}
      >
        {/* <Tab.Screen name="people" component={ScreenOne}/> */}
        <Tab.Screen name="Chats" component={TabScreen} />
        <Tab.Screen name="Status" component={TabScreen2} />
        <Tab.Screen name="calls" component={TabScreen3} />
      </Tab.Navigator>
      
      
    )
}

export default StackNavigator
