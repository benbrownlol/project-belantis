import templateUrl from './contacts.html';

const contactsComponent = {
  bindings: {
    contacts: '<',
  },
  templateUrl,
  controller($state) {
    'ngInject';

    this.goToContact = (event) => {
      $state.go('contact', {
        id: event.contactId,
      });
    };
  },
};

export default contactsComponent;
