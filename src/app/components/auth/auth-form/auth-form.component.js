import formTemplate from './auth-form.html';

const formComponent = {
  bindings: {
    user: '<',
    button: '@',
    message: '@',
    onSubmit: '&',
  },
  templateUrl: formTemplate,
  controller: formCtrl,
};

function formCtrl() {
  this.$onChanges = changes => {
    if (changes.user) {
      this.user = angular.copy(this.user);
    }
  };
  this.submitForm = () => {
    this.onSubmit({
      $event: {
        user: this.user,
      },
    });
  };
}

export default formComponent;
