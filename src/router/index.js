import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginStack from './LoginStack';
import AppStack from './AppStack';
// import FirebaseAuth from './FirebaseAuth';

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Auth: LoginStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  }
));

export default AppContainer;
