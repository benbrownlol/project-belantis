import angular from 'angular';
import firebase from 'firebase';
import angularfire from 'angularfire';
import AuthService from './auth.service';
import login from './login/login.module';
import register from './register/register.module';
import form from './auth-form/auth-form.module';
import './auth.scss';

const auth = angular
  .module('components.auth', [
    angularfire,
    login,
    register,
    form,
  ])
  .config(($firebaseRefProvider) => {
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
  })
  .run(($transitions, $state, AuthService) => {
    'ngInject';

    $transitions.onStart({
      to: state => !!(state.data && state.data.requiredAuth),
    }, () => {
      AuthService
        .requireAuthentication()
        .catch(() => $state.go('auth.login'));
    });
    $transitions.onStart({
      to: 'auth.*',
    }, () => {
      if (AuthService.isAuthenticated()) return $state.target('app');
    });
  })
  .service('AuthService', AuthService)
  .name;

export default auth;
