import sidebarComponent from './app-sidebar.component';
import sidebarStyles from './app-sidebar.scss';

const appSidebar = angular
  .module('common.app-sidebar', [])
  .component('appSidebar', sidebarComponent)
  .name;

export default appSidebar;