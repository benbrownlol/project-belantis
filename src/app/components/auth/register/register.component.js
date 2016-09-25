import registerTemplate from './register.html';
import registerCtrl from './register.controller';

const register = {
  templateUrl: registerTemplate,
  controller: registerCtrl,
};

angular
  .module('components.auth')
  .component('register', register)
  .config(config);

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
