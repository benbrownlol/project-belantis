import uiRouter from 'angular-ui-router';
import registerComponent from './register.component';

const register = angular
  .module('components.auth.register', [
    uiRouter,
  ])
  .component('register', registerComponent)
  .config(config)
  .name;

function config($stateProvider) {
  $stateProvider
    .state('auth.register', {
      url: '/register',
      component: 'register',
    });
}
config.$inject = [
  '$stateProvider',
];

export default register;
