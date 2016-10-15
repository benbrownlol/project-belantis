import templateUrl from './contact-tag.html';

const contactTagComponent = {
  bindings: {
    tag: '<',
    onChange: '&',
  },
  templateUrl,
  controller() {
    'ngInject';

    this.$onInit = () => {
      this.tags = ['friends', 'family', 'acquaintances', 'following'];
    };

    this.$onChanges = (changes) => {
      if (changes.tag) {
        this.tag = angular.copy(this.tag);
      }
    };

    this.updateTag = (tag) => {
      this.onChange({
        $event: {
          tag,
        },
      });
    };
  },
};

export default contactTagComponent;
