import contactNewTemplate from './contact-new.html';

const contactNewComponent = {
  templateUrl: contactNewTemplate,
  controller: contactNewCtrl,
};

function contactNewCtrl(contactService) {
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
    .then(contact => console.log(contact));
}
contactNewCtrl.$inject = [
  'contactService',
  '$state',
];

export default contactNewComponent;
