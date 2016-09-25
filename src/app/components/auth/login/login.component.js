import loginTemplate from './login.html';
import loginCtrl from './login.controller';

const login = {
  templateUrl: loginTemplate,
  controller: loginCtrl,
};

angular
  .module('components.auth')
  .component('login', login)
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('auth.login', {
      url: '/login',
      component: 'login',
    });

  $urlRouterProvider.otherwise('/auth/login');
}
config.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
];

export default login;
