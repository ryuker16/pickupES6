import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MapAppComponent from './mapApp.component';
import MapAppService from './mapApp.service';
import MapAppController from './mapApp.controller';
import 'angular-google-maps';
import 'lodash';
import 'angular-simple-logger';

const mapApp = angular
  .module('mapApp', [
     'lodash','nemLogging', 'uiGmapgoogle-maps'
  ])
  .component('mapApp', MapAppComponent)
  .service('MapAppService', MapAppService)
  .config((uiGmapGoogleMapApiProvider) => {
    'ngInject';
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDxUvPi28pVIgpZyYmjpH3YAZWa6VqMPQY',
            libraries: 'geometry,visualization'
        })
      })
  .name;

  console.log(mapApp);

  //mapApp.$inject = ['uiGmapgoogle-maps'];

  export default mapApp;
