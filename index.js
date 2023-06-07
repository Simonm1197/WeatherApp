/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Flash from './src/screen/Flash';
import Home from './src/screen/Home';
import Axios from './src/utils/axiosInstance';
import AxiosInstance from './src/utils/axiosInstance';
import ContextProvider from './src/components/ContextProvider';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => ContextProvider);
