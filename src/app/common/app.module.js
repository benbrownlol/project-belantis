import uiRouter from 'angular-ui-router';
import appComponent from './app.component';
import appNav from './app-nav/app-nav.module';
import appSidebar from './app-sidebar/app-sidebar.module';

const app = angular
  .module('common.app', [
    uiRouter,
    appNav,
    appSidebar,
  ])
  .component('app', appComponent)
  .config(config)
  .name;

function config($stateProvider) {
  $stateProvider
    .state('app', {
      // redirectTo: 'contacts',
      url: '/app',
      data: {
        requiredAuth: true,
      },
      component: 'app',
    });
}
config.$inject = [
  '$stateProvider',
];

export default app;
