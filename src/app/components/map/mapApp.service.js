class MapAppService {
  constructor($http) {
    this.$http = $http;
    this.sportToChoose = ["baseball", "football", "paddle", "soccer", "boxing", "dart", "biking", "golf", "hockey",
      "inline-skating", "tennis", "volleyball", "skateboard", "kickball", "bowling", "pool",
      "ride", "hike", "ice-skating"
    ];
    this.availibleSports = [];
  }

  //gets sport event data and return data in a format that google maps can use for markers
  getMapData(chosen) {

    let sports = ["baseball", "football", "paddle", "soccer", "boxing", "dart", "biking", "golf", "hockey",
      "inline-skating", "tennis", "volleyball", "skateboard", "kickball", "bowling", "pool",
      "ride", "hike", "ice-skating"
    ];

    //returns all we need to to make googe map markers and populate out menus
    return this.$http.get('app/components/map/data/meetup.json').then(function(response) {
      let finalArray = response.data.results.map(function(results) {
        let sportChoices = chosen !== undefined ? chosen : sports;
        if (results.venue) {
          for (var i = 0; i < sportChoices.length; i++) {
            if (results.description == undefined) {
              results.description = "No Description Provided";
            }

            if (results.group.name.toLowerCase().search(sportChoices[i].toLowerCase()) !=
              -1 || results.description.toLowerCase().search(sportChoices[i].toLowerCase()) != -1) {

              return {
                allData: results,
                latitude: results.venue.lat,
                longitude: results.venue.lon,
                sport: sportChoices[i],
                address: results.venue.address_1,
                title: results.name,
                time: results.time,
                lastUpdated: results.updated,
                description: results.description,
                id: results.created,
                venue: results.venue,
                eventHosts: results.event_hosts,
                group: results.group,
                url: results.event_url,
                going: results.yes_rsvp_count,
                maybeGoing: results.maybe_rsvp_count,
                options: {
                  visible: true
                }
              }
            }
          }
        }

      });
      //filter out undefined elements
      let markers = finalArray.filter(function(ele) {
        return ele !== undefined;
      });

      return markers;

    }, function(error) {
      console.log(error)
      return error
    });

  };
}

MapAppService.$inject = ['$http'];

export default MapAppService;
