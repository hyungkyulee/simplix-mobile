import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

const DrivesScreen = (props: any) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => console.log('clicked')} title="Text" />
      ),
    });
  }, [props.navigation]);

  return (
    <View>
      <Text>Drives Screen</Text>
      <Text>Drives Screen</Text>
      <Text>Drives Screen</Text>
      <Text>Drives Screen</Text>
      <Text>Drives Screen</Text>
      <TouchableOpacity
        {...props}
        onPress={() => props.navigation.navigate('Details')}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrivesScreen;
