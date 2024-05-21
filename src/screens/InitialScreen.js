import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const InitialScreen = () => {
  return (
    <View>
      <Text style={styles.text}>InitialScreen</Text>
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
