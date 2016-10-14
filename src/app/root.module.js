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
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';

    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/auth/login');
  })
  .name;

export default root;
