import MapAppController from './mapApp.controller';

const MapAppComponent = {
  controller: MapAppController,
  bindings: {
    mapData: '<'
  },
  template: `
  <menu-comp log-in-status='$ctrl.login()'>testing</menu-comp>
  <div class='googlemap'>
  <ui-gmap-google-map center='$ctrl.map.center' zoom='$ctrl.map.zoom' draggable="true"
                    options="$ctrl.options" bounds="$ctrl.map.bounds" control="googlemap">

  <ui-gmap-markers type="'spider'" models="$ctrl.mapData" coords="'self'" icon="'icon'"
                   options="'options'" events="$ctrl.markerEvents" fit="true" type="spider" doRebuildAll="false" >
                   <ui-gmap-windows  show="'show'" options="$ctrl.windowEvents">
                          <div ng-non-bindable class="blackText"><h5 > {{title}} - {{time | date}}</h5>
                          <p>Going: {{going}}, Maybe Going: {{maybeGoing}},
                           Address: {{address}}, Group: {{group.name}}<br>
                           </p>
                           </div>
                           </ui-gmap-windows>

   </ui-gmap-markers>
  </ui-gmap-google-map>
  </div>
  `
};

export default MapAppComponent;
