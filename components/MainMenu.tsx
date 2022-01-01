import React, {useState} from 'react';
import {Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import WelcomeScreen from '../screens/WelcomeScreen';
import DrivesScreen from '../screens/drives/DrivesScreen';
import ExpensesScreen from '../screens/expenses/ExpensesScreen';
import AuthSignInScreen from '../screens/AuthSignInScreen';
import AuthSignUpScreen from '../screens/AuthSignUpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import JournalsScreen from '../screens/JournalsScreen';
import DriveDetailsScreen from '../screens/drives/DriveDetailsScreen';
import DrivesSummaryScreen from '../screens/drives/DrivesSummaryScreen';
import AddDriveScreen from '../screens/drives/AddDriveScreen';
import DrivesSettingScreen from '../screens/drives/DrivesSettingScreen';
import ExpensesSettingScreen from '../screens/expenses/ExpensesSettingScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrivesTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Drives"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Drives"
        component={DrivesScreen}
        options={{
          tabBarLabel: 'Drives',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddDriveScreen}
        options={{
          tabBarLabel: 'Add',
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Summary"
        component={DrivesSummaryScreen}
        options={{
          tabBarLabel: 'Summary',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={size} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainDrawer({navigation}) {
  return (
    <Drawer.Navigator>
      <Stack.Screen
        name="Drives"
        component={DrivesTabs}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('DrivesSetting')}
              title="Settings"
              color="#00cc00"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('ExpensesSetting')}
              title="Settings"
              color="#00cc00"
            />
          ),
        }}
      />
      <Stack.Screen name="Journals" component={JournalsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const MainMenu = ({mode}: {mode: boolean}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen
              name="Main"
              component={MainDrawer}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: mode ? Colors.black : Colors.white,
                },
              }}
            />
            <Stack.Screen name="DriveDetails" component={DriveDetailsScreen} />
            <Stack.Screen
              name="DrivesSetting"
              component={DrivesSettingScreen}
            />
            <Stack.Screen
              name="ExpensesSetting"
              component={ExpensesSettingScreen}
            />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="SignIn" component={AuthSignInScreen} />
            <Stack.Screen name="SignUp" component={AuthSignUpScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainMenu;
