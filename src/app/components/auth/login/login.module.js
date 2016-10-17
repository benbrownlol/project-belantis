import { loginComponent } from './login.component';

export const login = angular
  .module('components.auth.login', [])
  .component('login', loginComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('auth', {
        redirectTo: 'auth.login',
        url: '/auth',
        template: '<div ui-view></div>',
      })
      .state('auth.login', {
        url: '/login',
        component: 'login',
      });
  })
  .name;
