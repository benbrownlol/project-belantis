import templateUrl from './login.html';

const loginComponent = {
  templateUrl,
  controller(authService, $state) {
    'ngInject';

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
  },
};

export default loginComponent;
