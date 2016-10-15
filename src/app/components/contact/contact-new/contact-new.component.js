import templateUrl from './contact-new.html';

const contactNewComponent = {
  templateUrl,
  controller(contactService, $state) {
    'ngInject';

    this.$onInit = () => {
      this.contact = {
        name: '',
        email: '',
        job: '',
        location: '',
        social: {
          facebook: '',
          github: '',
          twitter: '',
          linkedin: '',
        },
        tag: 'none',
      };
    };

    this.createNewContact = (event) => contactService
      .createNewContact(event.contact)
      .then((contact) => {
        $state.go('contact', {
          id: contact.key,
        });
      });
  },
};

export default contactNewComponent;
