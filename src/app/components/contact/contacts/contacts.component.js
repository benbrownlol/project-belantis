import templateUrl from './contacts.html';

const contactsComponent = {
  bindings: {
    contacts: '<',
    filter: '<',
  },
  templateUrl,
  controller($state, $filter) {
    'ngInject';

    const contacts = this.contacts;

    this.filteredContacts = $filter('contactsFilter')(contacts, this.filter);

    this.goToContact = (event) => {
      $state.go('contact', {
        id: event.contactId,
      });
    };
  },
};

export default contactsComponent;
