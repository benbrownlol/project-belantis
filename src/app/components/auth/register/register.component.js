import registerTemplate from './register.html';

const registerComponent = {
  templateUrl: registerTemplate,
  controller: registerCtrl,
};

function registerCtrl(authService) {
  this.$onInit = () => {
    this.error = null;
    this.user = {
      email: '',
      password: '',
    };
  };
  this.createUser = (event) => authService
    .register(event.user)
    .then(response => {
      console.debug('Success:', response);
    }, reason => {
      this.error = reason.message;
    });
}
registerCtrl.$inject = [
  'authService',
];

export default registerComponent;
