class MapAppController {

  constructor(MapAppService, $uibModal) {
    //make copy of original MapData Markers
    this.uibModal = $uibModal;
    this.mapDataOriginal = Array.from(this.mapData);
    this.Service = MapAppService;
    this.map = {
      zoom: 12,
      bounds: {},
      center: {
        latitude: 36.160338,
        longitude: -86.778780
      }
    };
    this.mapDataMenu = ["baseball", "football", "paddle", "soccer", "boxing", "dart", "biking", "golf", "hockey",
      "inline-skating", "tennis", "volleyball", "skateboard", "kickball", "bowling", "pool",
      "ride", "hike", "ice-skating"
    ];
    this.options = {
      scrollwheel: true,
    };
    this.windowEvents = {visible: false};

    this.markerEvents = {
        click: (marker, eventName, model) => {
      //console.log(this.currentMarker);
      let myModal = this.uibModal.open({
            template: `<div class='modalWidth'><h2>${model.title}</h2><br>
            <div class="row">
  <div class="col-md-6">Address: ${model.address}<br>
  City: ${model.venue.city}<br> Venue: ${model.venue.name}<br>Event Hosts: ${model.eventHosts}<br>
  Going: ${model.going}<br>Maybe Going: ${model.maybeGoing}<br>
  </div>
  <div class="col-md-6">Type:${model.sport}<br> Time:{{${model.time}| date}}<br>
  Group: ${model.group.name} <br>Url: <a href='${model.url}'>${model.url}</a><br></div>
</div><br> <br>
${model.description}
</div>`,
            size: 'lg'
          })
          console.log('clicked' );
        },

        mouseover: (marker, eventName, model) => {
          model.show = true;
            this.$apply;
        },
        mouseout: (marker, eventName, model) => {
          model.show = false;

        }

    }
  }

  openModal(model) {


  }

  getMyData() {
    return this.mapDataOriginal;
  }

//alter visibility of map markers by catogories
  sortSports(sports) {
    console.log(this.mapData);
      //let curMap = this.mapData;
      for (var i in this.mapData) {
        if (this.mapData[i].sport !== sports) {
          this.mapData[i].options.visible = false;
        } else if (this.mapData[i].sport == sports) {
          this.mapData[i].options.visible = true;
        }
      }

    };

    //restore map Markers to all visible
    undoSortSports() {

      for (var i in this.mapData) {
          this.mapData[i].options.visible = true;
        }
      };

    // will get all events or just specified ones
  clickMe(sporty) {
    this.Service.getMapData(sporty).then(response => {
      console.log(response);
      this.mapData = response;
    });
  }

};


export default MapAppController;
