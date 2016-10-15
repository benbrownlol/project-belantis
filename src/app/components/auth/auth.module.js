import angular from 'angular';
import uiRouter from 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';
import authStyles from './auth.scss';
import authService from './auth.service';
import login from './login/login.module';
import register from './register/register.module';
import form from './auth-form/auth-form.module';

const auth = angular
  .module('components.auth', [
    uiRouter,
    angularfire,
    login,
    register,
    form,
  ])
  .config(($firebaseRefProvider, $stateProvider) => {
    'ngInject';

    const firebaseConfig = {
      apiKey: 'AIzaSyBSf5XnsvoPRewbCVQ1MXPD62KKlA7N6-o',
      authDomain: 'project-belantis.firebaseapp.com',
      databaseURL: 'https://project-belantis.firebaseio.com',
      storageBucket: 'project-belantis.appspot.com',
      messagingSenderId: '615638830609',
    };

    $firebaseRefProvider
      .registerUrl({
        default: firebaseConfig.databaseURL,
        contacts: `${firebaseConfig.databaseURL}/contacts`,
      });

    firebase.initializeApp(firebaseConfig);

    $stateProvider
      .state('auth', {
        redirectTo: 'auth.login',
        url: '/auth',
        template: '<div ui-view></div>',
      });
  })
  .run(($transitions, $state, authService) => {
    'ngInject';

    $transitions.onStart({
      to: state => !!(state.data && state.data.requiredAuth),
    }, () => {
      authService
        .requireAuthentication()
        .catch(() => $state.go('auth.login'));
    });
    $transitions.onStart({
      to: 'auth.*',
    }, () => {
      if (authService.isAuthenticated()) return $state.target('app');
    });
  })
  .service('authService', authService)
  .name;

export default auth;
