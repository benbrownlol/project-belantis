import { contactEditComponent } from './contact-edit.component';

export const contactEdit = angular
  .module('components.contact.contact-edit', [])
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
