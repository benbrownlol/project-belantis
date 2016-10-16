import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactEditComponent from './contact-edit.component';

const contactEdit = angular
  .module('components.contact.contact-edit', [
    uiRouter,
  ])
  .component('contactEdit', contactEditComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('contact', {
        parent: 'app',
        url: '/contact/:id',
        component: 'contactEdit',
        resolve: {
          contact($transition$, ContactService) {
            'ngInject';

            const key = $transition$.params().id;
            return ContactService.getContactById(key).$loaded();
          },
        },
      });
  })
  .name;

export default contactEdit;
