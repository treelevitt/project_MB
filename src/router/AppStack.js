import { createStackNavigator } from 'react-navigation';
import Home from '../components/Home';

const AppStack = createStackNavigator(
  {
    HomeScreen: Home,
  }
);

export default AppStack;
