/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotificationController from './src/services/PushNotificationController';

AppRegistry.registerComponent(appName, () => App);
