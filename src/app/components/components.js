import angular from 'angular';
import MapApp from './map/index';

const components = angular
    .module('app.components', [
      MapApp
    ])
    .name;

export default components;
