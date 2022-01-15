import React from 'react';
import {useColorScheme, Appearance} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import store from './src/redux/store';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import MovieDetails from './src/screens/MovieDetails';
import {COLORS} from './utils/constants';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: COLORS.darkBlue,
    background: '#fff',
    primary: COLORS.lightBlue,
  },
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: COLORS.darkBlue,
    text: '#fff',
    primary: COLORS.grey,
  },
};
const RootStack = createStackNavigator();

console.log('color scheme', Appearance.getColorScheme());

const App = () => {
  const scheme = useColorScheme();
  return (
    // <Provider store={store}>
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : MyTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="MovieDetails" component={MovieDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
