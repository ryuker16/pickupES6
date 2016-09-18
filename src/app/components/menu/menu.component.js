import MenuController from './menu.controller';

//this has a mobile nav and non mobile nav. Still working on this since I plan on switching it.

const menuComponent = {
  controller: MenuController,
  bindings: {
  },
  require: {
    parent: '^mapMe',
  },
  template: `
  <!-- Desktop Nav -->


<nav ng-if="$ctrl.mobileDevice()"class="navbar navbar-default" role="navigation">
<div class="navbar-header">
<a class="navbar-brand" href="#">Pick Up Sports</a>
</div>
        <ul class="nav navbar-nav navbar-left">
          <li class="dropdown" uib-dropdown >
            <a  uib-dropdown-toggle class="dropdown-toggle">Sports <b class="caret"></b></a>
            <ul class="dropdown-menu" uib-dropdown-menu>
              <li> Availible Sports<br></li>
              <li ng-click="$ctrl.resetChoices()"> Show All </li>
              <li ng-repeat="sports in $ctrl.curMap | unique: 'sport'" ng-click="$ctrl.alterMarkers(sports.sport)"><p>{{sports.sport}}</p></li>
            </ul>
          </li>
<li uib-popover="Hiya" popover-trigger="'mouseenter'"
popover-placement="bottom"><a href="#">Choose Sport</a></li>
<li uib-popover-html="$ctrl.makeGame" popover-trigger="'mouseenter'"
popover-placement="bottom"><a href="#" >Create Game</a></li>
</ul>
<ul class="nav navbar-nav navbar-right">
<li>  <form class="navbar-form ">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search Games">
        </div>
        </li>
<li class="" uib-popover-html="$ctrl.profileHtml"  popover-trigger="'mouseenter'"
popover-placement="bottom-left">
<a  ng-click="$ctrl.authorize('facebook')" ng-if="!$ctrl.isAuthenticated()" href="">Log In</a>
<a ng-click="$ctrl.logOut()" ng-if="$ctrl.isAuthenticated()"href="">Log Out</a>
 </li>
</ul>


            </form>
    </nav>


      <!-- Mobile devices Nav -->

    <div ng-if="$ctrl.mobileDevice() == false">

    <nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
    <a class="navbar-brand" href="#">Pick Up Sports</a>
    </div>
            <ul class="nav navbar-nav">
              <li uib-popover="Hiya" popover-trigger="'click'"
              popover-placement="bottom-left"><a href="#">Choose Sport</a></li>
              <li uib-popover-html="$ctrl.profileHtml" popover-trigger="'click'"
              popover-placement="bottom-left"><a href="#">Profile</a></li>
            </ul>
        </nav>
        <div class="footer">
                <button type="button" class="center btn btn-primary btn-lg">Create Game</button>
                </div>
</div>
    `
};

export default menuComponent;
