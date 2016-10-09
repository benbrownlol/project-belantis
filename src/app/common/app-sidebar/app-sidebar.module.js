import sidebarComponent from './app-sidebar.component';

const appSidebar = angular
  .module('common.app-sidebar', [])
  .component('appSidebar', sidebarComponent)
  .name;

export default appSidebar;
