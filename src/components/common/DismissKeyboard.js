import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const DismissKeyboard = (props) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {props.children}
    </TouchableWithoutFeedback>
  );

export { DismissKeyboard };