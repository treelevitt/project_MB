import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Body, Container, Content, Title, Left, Right, Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

class SignUpForm extends Component {
  static navigationOptions = {
    header: null
    }

  render() {
    return (
      <View>
        <Header>
          <Left>
            <Button
            onPress={() => this.props.navigation.navigate('LoginScreen')}
            transparent>
            <Ionicons 
            name="ios-arrow-back"
            size={20}
            />
            <Text>Back</Text>
            </Button>
          </Left>
          <Body>
          <Title>Sign up</Title>
          </Body>
          <Right />
        </Header>
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
}

export default SignUpForm;
