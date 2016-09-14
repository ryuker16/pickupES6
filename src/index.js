import './index.css';
import './css/bootstrap.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import angularFilter from 'angular-filter';
import MapAppComponent from './app/components/map/mapApp.component';
import MapAppService from './app/components/map/mapApp.service';
import MenuComponent from './app/components/menu/menu.component';
import uiBootstrap from 'angular-ui-bootstrap';
import ngDeviceDetector from 'ng-device-detector';
import 'angular-google-maps';
import 'lodash';
import 'angular-simple-logger';

const app = angular
  .module('app', [
    'uiGmapgoogle-maps', 'ng.deviceDetector', 'ui.router', 'angular.filter', 'ui.bootstrap', 'ngAnimate'
  ])
  .component('mapMe', MapAppComponent)
  .component('menuComp', MenuComponent)
  .service('MapAppService', MapAppService)
  .config((uiGmapGoogleMapApiProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject';
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyDxUvPi28pVIgpZyYmjpH3YAZWa6VqMPQY',
      libraries: 'geometry,visualization'
    });
    $stateProvider
      .state('map', {
        url: '/',
        component: 'mapMe',
        resolve: {
          mapData: MapAppService => MapAppService.getMapData()
        }
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;


export default app;
