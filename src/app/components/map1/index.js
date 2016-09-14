import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MapAppComponent from './app/components/map/mapApp.component';
import MapAppService from './app/components/map/mapApp.service';
import MapAppController from './app/components/map/mapApp.controller';
import 'angular-google-maps';
import 'lodash';
import 'angular-simple-logger';

const mapApp = angular
  .module('mapApp', [
      'uiGmapgoogle-maps'
  ])
  .component('mapMe', MapAppComponent)
  .service('MapAppService', MapAppService)
  .config((uiGmapGoogleMapApiProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject';
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDxUvPi28pVIgpZyYmjpH3YAZWa6VqMPQY',
            libraries: 'geometry,visualization'
        })
      $stateProvider
        .state('map', {
          url: '/map',
          component: 'mapMe'
        });
        $urlRouterProvider.otherwise('/');
      })
  .name;

  console.log(mapApp);

  //mapApp.$inject = ['uiGmapgoogle-maps'];

  export default mapApp;
