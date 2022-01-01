/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import tw from 'twrnc';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthSignInScreen';
import DrivesScreen from './screens/DrivesScreen';
import TripDetailsScreen from './screens/TripDetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import ExpensesScreen from './screens/ExpensesScreen';
import AuthSignInScreen from './screens/AuthSignInScreen';
import AuthSignUpScreen from './screens/AuthSignUpScreen';
import TripsSummaryScreen from './screens/TripsSummaryScreen';
import ProfileScreen from './screens/ProfileScreen';
import AddTripScreen from './screens/DrivesScreen copy';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

function Drives() {
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
        // options={{
        //   // headerTitle: props => <LogoTitle {...props} />,
        //   tabBarLabel: 'Drives',
        //   // tabBarIcon: ({ color, size }) => (
        //   //   <MaterialCommunityIcons name="home" color={color} size={size} />
        //   // ),
        //   // headerRight: () => (
        //   //   <Button
        //   //     onPress={() => console.log('This is a button!')}
        //   //     title="Info"
        //   //     color="#00cc00"
        //   //   />
        //   // ),
        // }}
      />
      <Tab.Screen
        name="Details"
        component={TripDetailsScreen}
        options={({navigation}) => ({
          tabBarLabel: 'Details',
          tabBarBadge: 3,
          tabBarButton: (props: any) => (
            <TouchableOpacity
              {...props}
              onPress={() => navigation.navigate('Details')}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Summary"
        component={TripsSummaryScreen}
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
      <Drawer.Screen name="Drives" component={Drives} />
      <Drawer.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Profile')}
              title="Profile"
              color="#00cc00"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        // options={{
        //   headerRight: () => (
        //     <Button
        //       onPress={() => navigation.navigate('Profile')}
        //       title="Profile"
        //       color="#00cc00"
        //     />
        //   ),
        // }}
      />
      <Stack.Screen
        name="Trips"
        component={Drives}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Profile')}
              title="Profile"
              color="#00cc00"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen
              name="Main"
              component={MainDrawer}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={AuthSignInScreen} />
            <Stack.Screen name="SignUp" component={AuthSignUpScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
      {/* <Main /> */}
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              <Text style={tw`text-md text-red-500`}>App.tsx</Text>
              to change this screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView> */}
    </NavigationContainer>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
