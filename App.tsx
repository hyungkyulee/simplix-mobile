/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';

import MainMenu from './components/MainMenu';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // eslint-disable-next-line prettier/prettier
  return (
    <MainMenu mode={isDarkMode}/>
  );
};

export default App;
