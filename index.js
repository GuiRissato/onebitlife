/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushController from './src/services/PushController';

AppRegistry.registerComponent(appName, () => App);
