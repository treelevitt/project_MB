import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ForgotPassWordForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Forgot password component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ForgotPassWordForm;
