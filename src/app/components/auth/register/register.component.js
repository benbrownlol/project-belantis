import registerTemplate from './register.html';

const registerComponent = {
  templateUrl: registerTemplate,
  controller: registerCtrl,
};

function registerCtrl(authService, $state) {
  this.$onInit = () => {
    this.error = null;
    this.user = {
      email: '',
      password: '',
    };
  };
  this.createUser = (event) => authService
    .register(event.user)
    .then(() => {
      $state.go('app');
    }, reason => {
      this.error = reason.message;
    });
}
registerCtrl.$inject = [
  'authService',
  '$state',
];

export default registerComponent;
