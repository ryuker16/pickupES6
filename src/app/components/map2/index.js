import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MapAppComponent from './mapApp.component';
import MapAppService from './mapApp.service';
import MapAppController from './mapApp.controller';
//import 'angular-google-maps';


const mapApp = angular
  .module('mapApp', [
    uiRouter
  ])
  .component('mapApp', MapAppComponent)
  .service('MapAppService', MapAppService)
  .name;

//  mapping.$inject = ['uiGmapGoogleMapApiProvider'];


  export default mapApp;
