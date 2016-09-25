import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rootComponent from './root.component';
import rootStyles from './root.scss';
import components from './components/components.module.js';

const root = angular
  .module('root', [
    // 'common',
    components,
    uiRouter,
  ])
  .component('root', rootComponent)
  .config(config)
  .name;

function config($locationProvider) {
  $locationProvider.html5Mode(true);
}
config.$inject = [
  '$locationProvider',
];

export default root;
