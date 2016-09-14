class MapAppService {
  constructor($http) {
    this.$http = $http;
    this.sports = ["baseball", "football", "paddle", "soccer", "boxing", "dart", "biking", "golf", "hockey",
                        "inline-skating", "tennis", "volleyball", "skateboard", "kickball", "bowling", "pool",
                        "ride", "hike", "ice-skating"];
  }
getMapData(chosen) {
 return this.$http.get('data/meetup.json').then(function (response) {
                      let finalArray = response.data.results.map(function (results) {
                          let sportChoices = chosen !== undefined ? chosen : this.sports ;
                          if (results.venue) {
                              for (var i = 0; i < sportChoices.length; i++) {
                                  if (results.group.name.toLowerCase().search(sportChoices[i].toLowerCase()) != -1 || results.description.toLowerCase().search(sportChoices[i].toLowerCase()) != -1) {
                                      results.type = sportChoices[i];
                                      console.log(results.name);
                                      return {
                                          latitude: results.venue.lat,
                                          longitude: results.venue.lon,
                                          title: results.name,
                                          id: results.created
                                      }
                                  }
                              }
                          }

                      });
                       console.log(finalArray);
                      let markers = finalArray.filter(function (ele) {
                          return ele !== undefined;
                      });

                    return markers;

                  }, function (error) {
                      console.log(error)
                      return error
                  });

              };
}

MapAppService.$inject = ['$http'];

export default MapAppService;
