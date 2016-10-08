import uiRouter from 'angular-ui-router';
import appComponent from './app.component';

const app = angular
  .module('common.app', [
    uiRouter,
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
