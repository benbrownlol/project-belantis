import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactNewComponent from './contact-new.component';

const contactNew = angular
  .module('components.contact-new', [
    uiRouter,
  ])
  .component('contactNew', contactNewComponent)
  .config(config)
  .name;

function config($stateProvider) {
  $stateProvider
    .state('new', {
      parent: 'app',
      url: '/new',
      component: 'contactNew',
    });
}
config.$inject = [
  '$stateProvider',
];

export default contactNew;
