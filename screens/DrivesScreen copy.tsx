import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const AddTripScreen = (props: any) => {
  return (
    <View>
      <Text>AddTrip Screen</Text>
      <Text>AddTrip Screen</Text>
      <Text>AddTrip Screen</Text>
      <Text>AddTrip Screen</Text>
      <Text>AddTrip Screen</Text>
      <TouchableOpacity
        {...props}
        onPress={() => props.navigation.navigate('Details')}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTripScreen;
