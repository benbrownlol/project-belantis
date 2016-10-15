import templateUrl from './contact-edit.html';

const contactEditComponent = {
  bindings: {
    contact: '<',
  },
  templateUrl,
  controller(contactService, cfpLoadingBar, $window, $state) {
    'ngInject';

    this.deleteContact = (event) => {
      const message = `Delete ${event.contact.name} from contacts?`;
      if ($window.confirm(message)) {
        return contactService
          .deleteContact(event.contact)
          .then(() => {
            $state.go('contacts');
          });
      }
    };

    this.updateContact = (event) => {
      cfpLoadingBar.start();
      return contactService
        .updateContact(event.contact)
        .then(() => {
          cfpLoadingBar.complete();
        }, () => {
          cfpLoadingBar.complete();
        });
    };
  },
};

export default contactEditComponent;
