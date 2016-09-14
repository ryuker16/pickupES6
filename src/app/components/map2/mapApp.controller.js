


class MapAppController {
    constructor(mapData, $element) {
        this.mapData = mapData;
        this.element = $element;
        //this.mapAppService = MapAppService;
        this.mapOptions = {
            zoom: 12,
            center: {
                lat: 36.160338,
                lng: -86.778780
            }
          };
          this.options = {
                scrollwheel: true,
          };
}
$onInit() {
// this.makeMap()
//   return new google.maps.Map(this.element, this.mapOptions);

}

};

//MapAppController.$inject(['MapAppService'])
export default MapAppController;
    // .controller('MapCtrl',['$scope', 'uiGmapGoogleMapApi','uiGmapIsReady', '$http', function($scope, uiGmapGoogleMapApi,uiGmapIsReady, $http) {
    //     uiGmapGoogleMapApi.then(function(maps) {
    //
    //
    //         uiGmapIsReady.promise()
    //             .then(function(instances) {
    //             var  sports = ["baseball", "football", "paddle", "soccer", "boxing", "dart", "biking", "golf", "hockey",
    //                     "inline-skating", "tennis", "volleyball", "skateboard", "kickball", "bowling", "pool",
    //                     "ride", "hike", "ice-skating"];
    //
    //                 sorted(sports);
    //
    //             });
    //
    //
    //         $scope.windowCoords = {};
    //
    //         $scope.onClick = function(marker, eventName, model) {
    //             //$scope.map.center.latitude = model.latitude;
    //             //$scope.map.center.longitude = model.longitude;
    //             //$scope.map.zoom = 11;
    //             $scope.windowCoords.latitude = model.latitude;
    //             $scope.windowCoords.longitude = model.longitude;
    //             $scope.Name = model.title;
    //             $scope.show = true;
    //         };
    //
    //         $scope.closeClick = function() {
    //             $scope.show = false;
    //         };
    //
    //         $scope.options = {
    //             scrollwheel: true,
    //         };
    //
    //         $scope.show = false;
    //
    //     });
    // }]);

//
// function genaratePlaces(count){
//     var vals = [];
//     for(var i = 0; i < count; i++) {
//         vals.push({
//             latitude: getRandomArbitrary(33.192528,48.209871),
//             longitude: getRandomArbitrary(-118.586462,-81.716346),
//             id: i,
//             name: 'Place #' + i
//         });
//     }
//     return vals;
// }
//
//
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }
