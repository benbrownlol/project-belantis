import templateUrl from './contact.html';

const contactComponent = {
  bindings: {
    contact: '<',
    onSelect: '&',
  },
  templateUrl,
  controller() {
    'ngInject';

    this.selectContact = () => {
      this.onSelect({
        $event: {
          contactId: this.contact.$id,
        },
      });
    };
  },
};

export default contactComponent;
