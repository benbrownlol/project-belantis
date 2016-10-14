import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactNewComponent from './contact-new.component';

const contactNew = angular
  .module('components.contact-new', [
    uiRouter,
  ])
  .component('contactNew', contactNewComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('new', {
        parent: 'app',
        url: '/new',
        component: 'contactNew',
      });
  })
  .name;

export default contactNew;
