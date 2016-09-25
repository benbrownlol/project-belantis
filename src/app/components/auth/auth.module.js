import uiRouter from 'angular-ui-router';
import firebase from 'firebase';

const auth = angular
  .module('components.auth', [
    uiRouter,
    firebase,
  ])
  .config(config)
  .name;

function config($firebaseRefProvider, $stateProvider) {
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
}
config.$inject = [
  '$firebaseRefProvider',
  '$stateProvider',
];

export default auth;
