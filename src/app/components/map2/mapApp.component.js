import controller from './mapApp.controller';
import ngMap from 'ngmap';

const MapAppComponent = {
  bindings: {
    position: '<',
    heading: '<'
  },
  controller,
  template:`
  <div class="map">  <ng-map center="[40.74, -74.18]"></ng-map>
</div>`
  };

export default MapAppComponent;
