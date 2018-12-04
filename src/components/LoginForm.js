import React, { Component } from 'react';
import { Keyboard, TouchableWithoutFeedback, Modal, View, Text } from 'react-native';
import { Item, Card, CardItem, Input, Button } from 'native-base';
import { ForgotPassword } from './modals/ForgotPassword';
import { DismissKeyboard } from './common/DismissKeyboard';

/* const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  {children}
  </TouchableWithoutFeedback>
) */
  
class LoginForm extends Component {
  static navigationOptions = {
    header: null
    }

  state = { modalVisible: false }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <DismissKeyboard>
        <View style={styles.containerStyle}>
        <Item regular style={styles.itemStyle}>
        <Input
        style={styles.inputStyle}
        placeholder='Email'
        autoCapitalize='none'
        keyboardType='email-address'
        returnKeyType='next'
        onSubmitEditing={() => {this.passwordTextInput.focus(); }}
        blurOnSubmit={false}
        clearButtonMode='while-editing'
        />
        </Item>
        <Item regular style={styles.itemStyle}>
        <Input
        style={styles.inputStyle}
        placeholder='Password'
        secureTextEntry
        ref={(input) => { this.passwordTextInput = input; }}
        clearButtonMode='while-editing'
        />
        </Item>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
          >
          <ForgotPassword>
            <Text
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              Cancel
            </Text>
          </ForgotPassword>
        </Modal>
        <CardItem style={{ backgroundColor: 'transparent' }}>
        <Text 
        style={{ color: '#fff', alignSelf: 'flex-start', marginLeft: 15 }}
        onPress={() => {
          this.setModalVisible(true);
        }}>
          Forgot password?
        </Text>
        </CardItem>
        <CardItem style={{
          backgroundColor: 'transparent',
          paddingTop: 50
        }}>
        <Button rounded
        onPress={() => this.props.navigation.navigate('HomeScreen')}
        style={styles.buttonStyle}>
          <Text>Sign In</Text>
        </Button>
        </CardItem>
        <Text
        onPress={() => this.props.navigation.navigate('SignUpScreen')} 
        style={{ color: '#fff' }}>Create an account</Text>
        </View>
    </DismissKeyboard>
    );
  } 
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',
    backgroundColor: '#ef3f3f'
  },
  cardStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  itemStyle: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 5,
  },
  inputStyle: {
    color: '#000',
    opacity: 1
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
};

export default LoginForm;
