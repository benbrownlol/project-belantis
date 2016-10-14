import contactDetailTemplate from './contact-detail.html';

const contactDetailComponent = {
  bindings: {
    contact: '<',
    onSave: '&',
  },
  templateUrl: contactDetailTemplate,
  controller: contactDetailCtrl,
};

function contactDetailCtrl() {
  this.$onInit = () => {
    this.isNewContact = !this.contact.$id;
  };

  this.saveContact = () => {
    this.onSave({
      $event: {
        contact: this.contact,
      },
    });
  };
}
contactDetailCtrl.$inject = [

];

export default contactDetailComponent;
