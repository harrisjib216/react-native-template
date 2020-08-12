/**
 * App imports
*/
import {AppRegistry} from 'react-native';
import Router from "./app/routing/index";
import {name as appName} from './app.json';


// export
AppRegistry.registerComponent(appName, () => Router);
