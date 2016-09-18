class MenuController {

  constructor(MapAppService, deviceDetector) {

    this.Service = MapAppService;
    this.newSports = ["baseball", "football", "paddle", "soccer", "boxing", "dart", "biking", "golf", "hockey",
      "inline-skating", "tennis", "volleyball", "skateboard", "kickball", "bowling", "pool",
      "ride", "hike", "ice-skating"
    ];
  //  this.curMap = this.newSports;
    //detect if mobile or desktop
    this.device = deviceDetector.os;
    // templates for pop overs
    // this.profileHtml = ;
    // this.sortSportsHtml = ;
    // this.makeGame = ;
  }

  $onInit(){
  this.curMap = this.parent.getMyData();
console.log(this.parent.getMyData());
}
  pickCatogories() {
//   let curCatogories = this.parent.mapMenuData();

  }
    //determine if mobile device
  mobileDevice() {
      if (this.device == 'windows' | 'mac' | 'linux' | 'unix') {
        return true
      } else {
        return false
      }
    }

  logOut() {
this.parent.auth.logout();
    }

  isAuthenticated() {
       console.log(this.parent.auth.isAuthenticated());
   return this.parent.auth.isAuthenticated();

  }

  authorize(provider) {
    this.parent.authenticate(provider);
  }

  resetChoices() {
    this.parent.undoSortSports();
  }

  alterMarkers(choice) {
      this.parent.sortSports(choice);
    }

  updateMap(choice) {
    this.parent.clickMe([choice]);
  }
};

  export default MenuController;
