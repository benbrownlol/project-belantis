import navComponent from './app-nav.component';
import navStyles from './app-nav.scss';

const appNav = angular
  .module('common.app-nav', [])
  .component('appNav', navComponent)
  .name;

export default appNav;
