import React, {ReactElement} from 'react';
import {View, Text, Button} from 'react-native';

function ExpensesSettingScreen({navigation}: {navigation: any}): ReactElement {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => console.log('clicked')} title="Text" />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Setting Screen</Text>
      <Text>Setting Screen</Text>
      <Text>Setting Screen</Text>
      <Text>Setting Screen</Text>
      <Text>Setting Screen</Text>
    </View>
  );
}

export default ExpensesSettingScreen;
