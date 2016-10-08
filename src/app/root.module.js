import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rootComponent from './root.component';
import rootStyles from './root.scss';
import common from './common/common.module';
import components from './components/components.module';

const root = angular
  .module('root', [
    uiRouter,
    common,
    components,
  ])
  .component('root', rootComponent)
  .config(config)
  .name;

function config($locationProvider, $urlRouterProvider) {
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/auth/login');
}
config.$inject = [
  '$locationProvider',
  '$urlRouterProvider',
];

export default root;
