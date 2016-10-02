import loginTemplate from './login.html';

const loginComponent = {
  templateUrl: loginTemplate,
  controller: loginCtrl,
};

function loginCtrl(authService) {
  this.$onInit = () => {
    this.error = null;
    this.user = {
      email: '',
      password: '',
    };
  };
  this.loginUser = (event) => authService
    .login(event.user)
    .then(response => {
      console.debug('Success:', response);
    }, reason => {
      this.error = reason.message;
    });
}
loginCtrl.$inject = [
  'authService',
];

export default loginComponent;
