import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsComponent from './contacts.component';
import contactsStyles from './contacts.scss';

const contacts = angular
  .module('components.contact.contacts', [
    uiRouter,
  ])
  .component('contacts', contactsComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('contacts', {
        parent: 'app',
        url: '/contacts',
        component: 'contacts',
        resolve: {
          contacts(contactService) {
            'ngInject';

            return contactService.getContactsList().$loaded();
          },
        },
      });
  })
  .name;

export default contacts;
