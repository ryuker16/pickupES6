/**   Pick up Sports App
**
**   Main Index file: weback will bundle this in dist or tmp.
**/

//load our css
import './index.css';
import './css/bootstrap.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import angularFilter from 'angular-filter';
import uiBootstrap from 'angular-ui-bootstrap';
import ngDeviceDetector from 'ng-device-detector';
import satellizer from 'satellizer';
// Components and Services
import MapAppComponent from './app/components/map/mapApp.component';
import MapAppService from './app/components/map/mapApp.service';
import MenuComponent from './app/components/menu/menu.component';

//Will 100% need these...well, maybe not Lodash
import 'angular-google-maps';
import 'lodash';
//Will not run without this....even if not injected!
import 'angular-simple-logger';

const app = angular
  .module('app', [
    'uiGmapgoogle-maps', 'ng.deviceDetector', 'ui.router', 'angular.filter', 'satellizer', 'ui.bootstrap', 'ngAnimate'
  ])
  .component('mapMe', MapAppComponent)
  .component('menuComp', MenuComponent)
  .service('MapAppService', MapAppService)
  .config((uiGmapGoogleMapApiProvider, $stateProvider, $urlRouterProvider, $authProvider) => {
    // Configures google maps with API key
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyDxUvPi28pVIgpZyYmjpH3YAZWa6VqMPQY',
      libraries: 'geometry,visualization'
    });
    //Facebook Authentication
    $authProvider.facebook({
      name: 'facebook',
     clientId: '164197200662441',
     responseType: 'token',
     url: '/auth/facebook',
  authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
  //redirectUri: window.location.origin + '/test',
  requiredUrlParams: ['display', 'scope'],
  scope: ['email'],
  scopeDelimiter: ',',
  display: 'popup',
  oauthType: '2.0',
  popupOptions: { width: 580, height: 400 }
   });
    // Just one path for now, will add profile option.
    $stateProvider
      .state('map', {
        url: '/',
        component: 'mapMe',
        resolve: {
          mapData: MapAppService => MapAppService.getMapData()
        }
      })

      .state('loggedIn', {
        url: '/test',
        component: 'menuComp',
        resolve: {
          mapData: MapAppService => MapAppService.getMapData()
        }
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

//export app
export default app;
