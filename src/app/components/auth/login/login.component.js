import loginTemplate from './login.html';

const loginComponent = {
  templateUrl: loginTemplate,
  controller: loginCtrl,
};

function loginCtrl(authService, $state) {
  this.$onInit = () => {
    this.error = null;
    this.user = {
      email: '',
      password: '',
    };
  };
  this.loginUser = (event) => authService
    .login(event.user)
    .then(() => {
      $state.go('app');
    }, reason => {
      this.error = reason.message;
    });
}
loginCtrl.$inject = [
  'authService',
  '$state',
];

export default loginComponent;
