import templateUrl from './contact-detail.html';

const contactDetailComponent = {
  bindings: {
    contact: '<',
    onSave: '&',
  },
  templateUrl,
  controller() {
    'ngInject';

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
  },
};

export default contactDetailComponent;
