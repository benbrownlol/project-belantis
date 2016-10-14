import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

const login = angular
  .module('components.auth.login', [
    uiRouter,
  ])
  .component('login', loginComponent)
  .config(config)
  .name;

function config($stateProvider) {
  $stateProvider
    .state('auth.login', {
      url: '/login',
      component: 'login',
    });
}
config.$inject = [
  '$stateProvider',
];

export default login;
