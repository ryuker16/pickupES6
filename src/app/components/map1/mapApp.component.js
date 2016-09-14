import MapAppController from './mapApp.controller';

const MapAppComponent = {
  MapAppController,
  template:`
  <div id="map_canvas" ng-controller="mainCtrl">
   <ui-gmap-google-map center="map.center" zoom="map.zoom"></ui-gmap-google-map>
</div>`
  };

export default MapAppComponent;
