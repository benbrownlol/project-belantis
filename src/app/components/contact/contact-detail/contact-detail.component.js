import templateUrl from './contact-detail.html';

const contactDetailComponent = {
  bindings: {
    contact: '<',
    onSave: '&',
    onUpdate: '&',
    onDelete: '&',
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

    this.updateContact = () => {
      this.onUpdate({
        $event: {
          contact: this.contact,
        },
      });
    };

    this.deleteContact = () => {
      this.onDelete({
        $event: {
          contact: this.contact,
        },
      });
    };
  },
};

export default contactDetailComponent;
