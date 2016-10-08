import navComponent from './app-nav.component';

const appNav = angular
  .module('common.app-nav', [])
  .component('appNav', navComponent)
  .name;

export default appNav;
