import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const AddDriveScreen = (props: any) => {
  return (
    <View>
      <Text>AddDrive Screen</Text>
      <Text>AddDrive Screen</Text>
      <Text>AddDrive Screen</Text>
      <Text>AddDrive Screen</Text>
      <Text>AddDrive Screen</Text>
      <TouchableOpacity
        {...props}
        onPress={() => props.navigation.navigate('Details')}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddDriveScreen;
