import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/Home';
import Flash from '../screen/Flash';
import Location from '../screen/Location';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="flash"
          component={Flash}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{header: () => null}}
        />

        <Stack.Screen
          name="LocationPage"
          component={Location}
          options={{header: () => null}}
        />

        {/* <Stack.Screen
          name="HomePage"
          component={Home}
          options={{header: () => null}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNav;
