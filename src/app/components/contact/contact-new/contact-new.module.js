import { contactNewComponent } from './contact-new.component';

export const contactNew = angular
  .module('components.contact.contact-new', [])
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
