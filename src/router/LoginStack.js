import { createStackNavigator } from 'react-navigation';
//import { fromRight } from 'react-navigation-transition-config';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const LoginStack = createStackNavigator(
  {
    LoginScreen: LoginForm,
    SignUpScreen: SignUpForm,
    
  },
  {
    initialRouteName: 'LoginScreen'
  }
);

export default LoginStack;
